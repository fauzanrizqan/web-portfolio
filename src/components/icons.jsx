import {
  SiPytorch, SiTensorflow, SiOnnx, SiPandas, SiNumpy, SiPostgresql, SiReact, SiSvelte,
  SiNodedotjs, SiDjango, SiSpringboot, SiFlutter, SiPython, SiJavascript, SiC, SiCplusplus,
  SiHaskell, SiFastapi, SiDocker,
} from 'react-icons/si';
import { FaJava, FaBrain, FaCode, FaChartLine } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi2';

export const skillIcons = {
  PyTorch: SiPytorch, TensorFlow: SiTensorflow, ONNX: SiOnnx, Pandas: SiPandas, NumPy: SiNumpy,
  PostgreSQL: SiPostgresql, React: SiReact, Svelte: SiSvelte, 'Node.js': SiNodedotjs,
  Django: SiDjango, 'Spring Boot': SiSpringboot, Flutter: SiFlutter, Python: SiPython,
  JavaScript: SiJavascript, Java: FaJava, C: SiC, 'C++': SiCplusplus, Haskell: SiHaskell,
  FastAPI: SiFastapi, Docker: SiDocker,
};

export const serviceIcons = { brain: FaBrain, spark: HiSparkles, code: FaCode, chart: FaChartLine };
