import { motion } from "framer-motion";
import { Flag, Terminal } from "lucide-react";

const events = [
  {
    date: "Nov 2025",
    event: "CTF ENCRYPTED",
    desc: "ThunderCipher Platform · Rank 9 / 50+ teams · Team problem-solving across crypto and forensics challenges.",
    icon: Flag,
  },
  {
    date: "Jan 2026",
    event: "TRIVANA CTF",
    desc: "Rank 4 / 50+ teams — solo participation. No team, no problem.",
    icon: Flag,
  },
  {
    date: "Apr 2026",
    event: "XPLOIT404 CTF",
    desc: "Hosted by CSEMA · Rank 4 / 50+ teams · Tackled MLE Web Hard challenge worth 300pts.",
    icon: Flag,
  },
  {
    date: "TBD",
    event: "[ ADD CTF WIN ]",
    desc: "Next mission incoming...",
    icon: Flag,
  },
];

export const CTF = () => {
  return (
    <section id="ctf" className="relative py-32 border-t border-border overflow-hidden">
      {/* Decorative FLAG{} */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-10 top-1/2 -translate-y-1/2 font-display text-primary/20 select-none"
        style={{ fontSize: "clamp(180px, 28vw, 420px)", lineHeight: 1 }}
      >
        FLAG{"{}"}
      </div>

      <div className="container mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-primary font-mono text-xs tracking-widest mb-4">
            04 / CTF_LOG
          </div>
          <h2 className="font-display text-5xl md:text-7xl">MISSION LOG.</h2>
        </motion.div>

        <div className="relative max-w-4xl ml-auto">
          {/* timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
            className="absolute left-[18px] md:left-[140px] top-0 bottom-0 w-px border-l border-dashed border-primary/40"
          />

          <ul className="space-y-10">
            {events.map((e, i) => {
              const Icon = e.icon;
              return (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.15 }}
                  className="relative grid grid-cols-[40px_1fr] md:grid-cols-[160px_40px_1fr] gap-4 md:gap-6 items-start"
                >
                  <div className="hidden md:block font-mono text-xs text-secondary uppercase tracking-widest pt-1">
                    {e.date}
                  </div>
                  <div className="relative z-10 flex items-center justify-center h-10 w-10 bg-background border border-primary text-primary glow-primary">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="md:hidden font-mono text-[10px] text-secondary uppercase tracking-widest mb-1">
                      {e.date}
                    </div>
                    <div className="font-display text-2xl md:text-3xl text-foreground">
                      {e.event}
                    </div>
                    <div className="font-mono text-xs md:text-sm text-muted-foreground mt-1">
                      {e.desc}
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 border border-border bg-surface grid grid-cols-1 md:grid-cols-3"
        >
          {[
            { n: "03+", l: "CTFs Entered" },
            { n: "20+", l: "Challenges Solved" },
            { n: "TOP 30%", l: "Best Placement" },
          ].map((s, i) => (
            <div
              key={i}
              className="p-8 border-b md:border-b-0 md:border-r border-border last:border-0 text-center"
            >
              <div className="font-display text-4xl md:text-5xl text-primary">{s.n}</div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-2">
                {s.l}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
