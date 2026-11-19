import { proof } from '../data/site.js';

export default function Proof() {
  return (
    <section className="proof" aria-label="Highlights">
      <div className="container proof-grid">
        {proof.map((p) => (
          <div key={p.label} className="proof-item">
            <strong>{p.value}</strong>
            <span>{p.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
