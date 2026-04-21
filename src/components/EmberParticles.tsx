import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

export const EmberParticles = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  const options: ISourceOptions = {
    fullScreen: { enable: false },
    background: { color: { value: "transparent" } },
    fpsLimit: 60,
    detectRetina: true,
    particles: {
      number: { value: 200, density: { enable: true, width: 1200, height: 800 } },
      color: { value: ["#ff4d00", "#ff8c00", "#ffcc00", "#ff2200"] },
      shape: { type: "circle" },
      opacity: {
        value: { min: 0.2, max: 0.9 },
        animation: { enable: true, speed: 0.6, startValue: "max", destroy: "min", count: 0 },
      },
      size: { value: { min: 1, max: 4 } },
      move: {
        enable: true,
        direction: "top",
        speed: { min: 0.4, max: 1.6 },
        straight: false,
        random: true,
        outModes: { default: "out", top: "destroy", bottom: "none" },
      },
      life: { duration: { value: { min: 4, max: 9 }, sync: false }, count: 0 },
    },
    emitters: [
      {
        direction: "top",
        rate: { delay: 0.05, quantity: 3 },
        position: { x: 50, y: 110 },
        size: { width: 100, height: 0 },
        life: { count: 0, duration: 0, delay: 0 },
      },
    ],
    interactivity: {
      detectsOn: "window",
      events: { onHover: { enable: true, mode: "repulse" } },
      modes: { repulse: { distance: 80, duration: 0.6, speed: 1 } },
    },
  };

  if (!ready) return null;
  return (
    <div className="absolute inset-0 z-0">
      <Particles id="ember" options={options} className="h-full w-full" />
    </div>
  );
};
