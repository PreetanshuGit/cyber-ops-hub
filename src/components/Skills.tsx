import { motion } from "framer-motion";
import { Shield, Code2, Wrench, Globe, Database, Brain } from "lucide-react";

const Dot = ({ filled }: { filled: boolean }) => (
  <span
    className={`inline-block h-1.5 w-1.5 rounded-full ${
      filled ? "bg-primary" : "bg-border"
    }`}
  />
);

const Proficiency = ({ level }: { level: number }) => (
  <span className="inline-flex gap-1 ml-2">
    {[...Array(5)].map((_, i) => (
      <Dot key={i} filled={i < level} />
    ))}
  </span>
);

const cardBase =
  "group relative bg-surface border border-border rounded-md p-6 transition-all duration-200 hover:border-primary hover:scale-[1.02]";

export const Skills = () => {
  return (
    <section id="skills" className="relative py-32 border-t border-border">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-primary font-mono text-xs tracking-widest mb-4">
            02 / SKILLS_MATRIX
          </div>
          <h2 className="font-display text-5xl md:text-7xl mb-16">
            ARSENAL.<span className="text-primary">/</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
          {/* Cybersecurity — 2 col */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            className={`${cardBase} md:col-span-2 lg:col-span-2 lg:row-span-2`}
          >
            <Shield className="h-7 w-7 text-primary mb-4" />
            <div className="font-display text-3xl mb-1">CYBERSECURITY</div>
            <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-6">
              primary discipline
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "Network Security",
                "Web Pentesting",
                "CTF",
                "Vulnerability Assessment",
                "OSINT",
                "Cryptography",
              ].map((t) => (
                <span
                  key={t}
                  className="border border-primary/40 text-primary text-xs font-mono px-3 py-1.5 hover:bg-primary/10 transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className={cardBase}
          >
            <Code2 className="h-6 w-6 text-primary mb-3" />
            <div className="font-display text-2xl mb-3">LANGUAGES</div>
            <ul className="font-mono text-xs space-y-2 text-foreground/80">
              <li className="flex items-center justify-between">Python <Proficiency level={5} /></li>
              <li className="flex items-center justify-between">JavaScript <Proficiency level={4} /></li>
              <li className="flex items-center justify-between">C / C++ <Proficiency level={3} /></li>
              <li className="flex items-center justify-between">Bash <Proficiency level={4} /></li>
              <li className="flex items-center justify-between">Linux <Proficiency level={4} /></li>
            </ul>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={cardBase}
          >
            <Wrench className="h-6 w-6 text-primary mb-3" />
            <div className="font-display text-2xl mb-3">TOOLS & FRAMEWORKS</div>
            <div className="font-mono text-xs text-foreground/80 leading-relaxed">
              Wireshark · Burp Suite · Nmap · Metasploit · Git · VS Code
            </div>
          </motion.div>

          {/* Web Dev */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className={cardBase}
          >
            <Globe className="h-6 w-6 text-primary mb-3" />
            <div className="font-display text-2xl mb-1">WEB DEV</div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
              secondary skill
            </div>
            <div className="font-mono text-xs text-foreground/80">
              HTML/CSS · React · Node.js
            </div>
          </motion.div>

          {/* DSA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={cardBase}
          >
            <Database className="h-6 w-6 text-primary mb-3" />
            <div className="font-display text-2xl mb-2">DSA</div>
            <div className="font-mono text-xs text-muted-foreground">
              strong CS fundamentals
            </div>
          </motion.div>

          {/* Currently learning — pulsing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className={`relative bg-surface border border-secondary/40 rounded-md p-6 pulse-border md:col-span-2`}
          >
            <Brain className="h-6 w-6 text-secondary mb-3" />
            <div className="font-mono text-[10px] uppercase tracking-widest text-secondary mb-1">
              currently learning
            </div>
            <div className="font-display text-2xl text-foreground">
              Reverse Engineering · Binary Exploitation · Malware Analysis
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
