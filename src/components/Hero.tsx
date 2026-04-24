import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-scroll";
import { EmberParticles } from "./EmberParticles";

const tickerItems = [
  "[ THREAT LEVEL: ELEVATED ]",
  "ASPIRING RED TEAMER",
  "ETHICAL HACKER",
  "PYTHON · JS · CYBERSEC",
  "[ SYSTEM STATUS: ONLINE ]",
  "OPEN TO OPPORTUNITIES",
  "[ FIREWALL: ACTIVE ]",
];

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      {/* Embers */}
      <EmberParticles />

      {/* Corner brackets */}
      <div className="absolute top-6 left-6 z-10 text-primary/60 font-mono text-xs">┌─ SECTOR_01</div>
      <div className="absolute top-6 right-6 z-10 text-secondary/70 font-mono text-xs flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-secondary blink" />
        LIVE
      </div>

      {/* Foreground content */}
      <div className="relative z-10 container mx-auto min-h-screen flex flex-col justify-center pt-20 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-5xl md:ml-[6%]"
        >
          <div className="text-secondary font-mono text-xs mb-8 tracking-widest">
            // CYBERSECURITY PORTFOLIO
          </div>

          <h1 className="font-display leading-[0.85]">
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="block text-foreground"
              style={{ fontSize: "clamp(80px, 14vw, 160px)" }}
            >
              PREETANSHU
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="block text-outline"
              style={{ fontSize: "clamp(80px, 14vw, 160px)" }}
            >
              GUPTA
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-8 space-y-2"
          >
            <div className="font-mono text-base md:text-lg text-foreground/90">
              alias: <span className="text-primary">ParallaX</span>
            </div>
            <div className="font-mono text-sm text-muted-foreground">
              B.Tech CSE · Offensive Security · Aspiring Red Teamer
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="mt-12"
          >
            <Link
              to="about"
              smooth
              duration={700}
              offset={-60}
              className="cursor-none group inline-flex items-center gap-3 border border-primary px-8 py-4 font-label text-sm uppercase tracking-[0.25em] text-primary transition-all duration-300 hover:bg-primary/15 hover:glow-primary"
            >
              ENTER THE SYSTEM
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Ticker */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-border bg-background/70 py-3 backdrop-blur-sm">
        <div className="marquee">
          <div className="marquee-track font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-12 shrink-0">
                {tickerItems.map((t, j) => (
                  <span key={j} className="flex items-center gap-12">
                    {t}
                    <span className="text-primary">·</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
