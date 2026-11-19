import { useEffect, useRef, useState } from 'react';
import { HiSpeakerWave, HiSpeakerXMark } from 'react-icons/hi2';

// Six guitar strings in the hero. Sweep the cursor across them (or tap them on
// swipe across them on a phone) to strum. With sound on, each string plays a plucked note
// synthesised in the browser (Karplus-Strong), tuned to an E minor add9 chord.

const NOTES = [82.41, 123.47, 164.81, 196.0, 246.94, 369.99]; // E2 B2 E3 G3 B3 F#4
const WIDTHS = [3.2, 2.7, 2.2, 1.7, 1.3, 1]; // low strings are thicker
const DECAY = 1.6; // seconds for the visual vibration to fade

function pluckBuffer(ctx, freq) {
  const rate = ctx.sampleRate;
  const length = Math.floor(rate * 2.2);
  const buffer = ctx.createBuffer(1, length, rate);
  const out = buffer.getChannelData(0);
  const period = Math.round(rate / freq);
  const ring = new Float32Array(period);
  for (let i = 0; i < period; i++) ring[i] = Math.random() * 2 - 1;
  let idx = 0;
  for (let i = 0; i < length; i++) {
    const next = (idx + 1) % period;
    const value = (ring[idx] + ring[next]) * 0.4985;
    out[i] = ring[idx];
    ring[idx] = value;
    idx = next;
  }
  return buffer;
}

export default function Strings() {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);
  const [sound, setSound] = useState(false);
  const soundRef = useRef(false);
  const audioRef = useRef(null);
  const buffersRef = useRef([]);

  useEffect(() => {
    soundRef.current = sound;
    if (sound && !audioRef.current) {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return;
      const ctx = new Ctx();
      const master = ctx.createGain();
      master.gain.value = 0.35;
      master.connect(ctx.destination);
      audioRef.current = { ctx, master };
      buffersRef.current = NOTES.map((f) => pluckBuffer(ctx, f));
    }
    if (sound) audioRef.current?.ctx.resume();
  }, [sound]);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    const g = canvas.getContext('2d');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const strings = NOTES.map(() => ({ x: 0, amp: 0, at: 0.5, start: 0, last: 0 }));
    let w = 0;
    let h = 0;
    let frame = 0;
    let prev = null;
    let gap = 46;

    function layout() {
      const rect = wrap.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      g.setTransform(dpr, 0, 0, dpr, 0, 0);
      gap = Math.min(w / (NOTES.length + 1), 46);
      const left = (w - gap * (NOTES.length - 1)) / 2;
      strings.forEach((s, i) => (s.x = left + gap * i));
      draw(performance.now());
    }

    function play(i, strength) {
      if (!soundRef.current || !audioRef.current) return;
      const { ctx, master } = audioRef.current;
      const src = ctx.createBufferSource();
      src.buffer = buffersRef.current[i];
      const gain = ctx.createGain();
      gain.gain.value = 0.25 + 0.75 * strength;
      src.connect(gain).connect(master);
      src.start();
    }

    function pluck(i, y, strength) {
      const s = strings[i];
      const now = performance.now();
      if (now - s.last < 70) return; // debounce one sweep
      s.last = now;
      s.start = now;
      s.at = Math.min(0.9, Math.max(0.1, y / h));
      s.amp = (reduced ? 0 : 6) + 10 * strength;
      play(i, strength);
      if (!frame) frame = requestAnimationFrame(tick);
    }

    function draw(now) {
      g.clearRect(0, 0, w, h);
      strings.forEach((s, i) => {
        const t = (now - s.start) / 1000;
        const env = s.amp ? Math.exp(-t / (DECAY / 3)) : 0;
        const wobble = env * s.amp * Math.sin(t * (40 + i * 9));
        const glow = Math.min(1, env * 1.6);

        g.beginPath();
        g.moveTo(s.x, 0);
        // A plucked string bends to a triangle peaking at the pluck point.
        g.lineTo(s.x + wobble, h * s.at);
        g.lineTo(s.x, h);
        g.lineWidth = WIDTHS[i];
        g.strokeStyle = `rgba(245, 185, 66, ${0.22 + 0.7 * glow})`;
        g.shadowColor = 'rgba(245, 185, 66, 0.8)';
        g.shadowBlur = 14 * glow;
        g.stroke();
      });
      g.shadowBlur = 0;
    }

    function tick(now) {
      draw(now);
      const active = strings.some((s) => s.amp && now - s.start < DECAY * 1000);
      frame = active ? requestAnimationFrame(tick) : 0;
      if (!active) strings.forEach((s) => (s.amp = 0));
    }

    function local(e) {
      const r = wrap.getBoundingClientRect();
      return { x: e.clientX - r.left, y: e.clientY - r.top, t: performance.now() };
    }

    function onMove(e) {
      const p = local(e);
      if (prev && p.y >= 0 && p.y <= h) {
        const lo = Math.min(prev.x, p.x);
        const hi = Math.max(prev.x, p.x);
        const speed = Math.abs(p.x - prev.x) / Math.max(1, p.t - prev.t);
        strings.forEach((s, i) => {
          if (s.x >= lo && s.x <= hi && lo !== hi) pluck(i, p.y, Math.min(1, speed / 2));
        });
      }
      prev = p;
    }

    function onLeave() {
      prev = null;
    }

    function onDown(e) {
      const p = local(e);
      let best = -1;
      let dist = Math.max(22, gap / 2);
      strings.forEach((s, i) => {
        const d = Math.abs(s.x - p.x);
        if (d < dist) {
          dist = d;
          best = i;
        }
      });
      if (best >= 0) pluck(best, p.y, 0.7);
      prev = p;
    }

    const ro = new ResizeObserver(layout);
    ro.observe(wrap);
    wrap.addEventListener('pointermove', onMove);
    wrap.addEventListener('pointerleave', onLeave);
    wrap.addEventListener('pointerdown', onDown);
    return () => {
      ro.disconnect();
      cancelAnimationFrame(frame);
      wrap.removeEventListener('pointermove', onMove);
      wrap.removeEventListener('pointerleave', onLeave);
      wrap.removeEventListener('pointerdown', onDown);
    };
  }, []);

  return (
    <div className="strings" ref={wrapRef}>
      <canvas ref={canvasRef} aria-hidden="true" />
      <button
        type="button"
        className="strings-sound"
        onClick={() => setSound(!sound)}
        aria-pressed={sound}
      >
        {sound ? <HiSpeakerWave /> : <HiSpeakerXMark />}
        {sound ? 'Sound on' : 'Turn sound on'}
      </button>
      <p className="strings-hint">Strum me</p>
    </div>
  );
}
