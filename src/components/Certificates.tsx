import { motion } from "framer-motion";
import { Award, ArrowRight } from "lucide-react";

const certs = [
  {
    issuer: "Google",
    name: "Cybersecurity Certificate",
    date: "2024",
    status: "ACTIVE",
  },
  {
    issuer: "TryHackMe",
    name: "Pre Security Path",
    date: "2024",
    status: "COMPLETED",
  },
  {
    issuer: "HackTheBox",
    name: "Starting Point",
    date: "2025",
    status: "ACTIVE",
  },
  {
    issuer: "Cisco",
    name: "Intro to Cybersecurity",
    date: "2024",
    status: "COMPLETED",
  },
  {
    issuer: "[ ADD YOURS ]",
    name: "Placeholder Credential",
    date: "TBD",
    status: "PENDING",
  },
];

export const Certificates = () => {
  return (
    <section id="certs" className="relative py-32 border-t border-border">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-end justify-between"
        >
          <div>
            <div className="text-primary font-mono text-xs tracking-widest mb-4">
              05 / CREDENTIALS
            </div>
            <h2 className="font-display text-5xl md:text-7xl">VERIFIED.</h2>
          </div>
          <div className="hidden md:block font-mono text-xs text-muted-foreground">
            ← scroll →
          </div>
        </motion.div>

        <div className="overflow-x-auto pb-6 -mx-6 px-6">
          <div className="flex gap-4 min-w-max">
            {certs.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative w-[280px] bg-surface border border-border rounded-md p-6 hover:border-primary transition-colors"
              >
                <div
                  className={`absolute top-3 right-3 font-mono text-[9px] tracking-widest px-2 py-1 ${
                    c.status === "ACTIVE"
                      ? "bg-primary/15 text-primary border border-primary/40"
                      : c.status === "COMPLETED"
                      ? "bg-secondary/10 text-secondary border border-secondary/40"
                      : "bg-muted text-muted-foreground border border-border"
                  }`}
                >
                  {c.status}
                </div>
                <Award className="h-8 w-8 text-primary mb-6" />
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                  {c.issuer}
                </div>
                <div className="font-display text-2xl leading-tight text-foreground mb-4 min-h-[3.5rem]">
                  {c.name}
                </div>
                <div className="font-mono text-xs text-muted-foreground mb-6">
                  Issued · {c.date}
                </div>
                <button className="cursor-none flex items-center gap-2 font-mono text-xs text-foreground/80 hover:text-secondary transition-colors">
                  VERIFY <ArrowRight className="h-3 w-3" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
