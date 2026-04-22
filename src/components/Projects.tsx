import { motion } from "framer-motion";
import { ArrowUpRight, Lock } from "lucide-react";
import { useEffect, useState } from "react";

const SystemWidget = () => {
  const [uptime, setUptime] = useState(0);
  useEffect(() => {
    const start = Date.now();
    const id = setInterval(() => setUptime(Math.floor((Date.now() - start) / 1000)), 1000);
    return () => clearInterval(id);
  }, []);
  const fmt = (s: number) => {
    const h = String(Math.floor(s / 3600)).padStart(2, "0");
    const m = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
    const sec = String(s % 60).padStart(2, "0");
    return `${h}:${m}:${sec}`;
  };
  return (
    <div className="font-mono text-[11px] text-muted-foreground leading-relaxed text-right">
      <div>SYSTEM: ONLINE</div>
      <div>
        UPTIME: <span className="text-primary">{fmt(uptime)}</span>
      </div>
      <div>THREAT LVL: ELEVATED</div>
    </div>
  );
};

type Project = {
  num: string;
  name: string;
  desc: string;
  stack: string[];
  github?: string;
  note?: string;
  classified?: boolean;
};

const projects: Project[] = [
  {
    num: "01",
    name: "URBANSQUARE",
    desc: "AI-integrated home services platform. Photo-based emergency detection, agent dispatch under 5 mins, dynamic pricing, dual dashboards for customers and employees.",
    stack: ["React", "AI", "Dynamic Pricing", "Node.js"],
    github: "https://github.com/PreetanshuGit/home-service-hub-main.git",
    note: "Built @ Web-A-Thon 2.0 · 24hr hackathon · Qualified 3/4 rounds",
  },
  {
    num: "02",
    name: "PROFILE GUARDIAN",
    desc: "Social media authenticity analyzer. Detects fake accounts, bots, and inauthentic behavior across Instagram, X, and Reddit.",
    stack: ["Python", "Scraping", "ML", "Social Analysis"],
    github: "https://github.com/PreetanshuGit/profile-guardian.git",
    note: "Built @ Prompt Builder 2.0 · 12hr hackathon",
  },
  {
    num: "03",
    name: "PLACEMENT GUARDIAN",
    desc: "Agentic AI placement coach. Enter your profile, get a personalized roadmap — DSA, courses, interview prep — guided by a ReAct-style AI agent.",
    stack: ["FastAPI", "Python", "SQLite", "React", "Agentic AI"],
    github: "https://github.com/PreetanshuGit/HackAI.git",
    note: "Built @ HackAI Season 2 · 24hr hackathon",
  },
  {
    num: "04",
    name: "[CLASSIFIED]",
    desc: "Project files restricted. Clearance level insufficient.",
    stack: ["???", "???", "???"],
    classified: true,
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="relative py-32 border-t border-border">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-primary font-mono text-xs tracking-widest mb-4">
            03 / PROJECTS_ARCHIVE
          </div>
          <h2 className="font-display text-5xl md:text-7xl mb-4">PROJECTS.</h2>
          <p className="font-mono text-sm text-muted-foreground max-w-xl">
            Things I've built that might keep a sysadmin up at night.
          </p>
        </motion.div>

        <div className="space-y-px bg-border">
          {projects.map((p, i) => {
            const href = p.classified ? undefined : p.github;
            const Tag: any = href ? motion.a : motion.div;
            const linkProps = href
              ? { href, target: "_blank", rel: "noopener noreferrer" }
              : {};

            return (
              <Tag
                key={i}
                {...linkProps}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative block bg-background hover:bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-l-2 hover:border-l-primary"
              >
                <div className="container mx-auto px-0 py-8 md:py-10 grid grid-cols-12 gap-4 md:gap-8 items-center">
                  <div className="col-span-2 md:col-span-1 font-mono text-xs text-muted-foreground">
                    {p.num}
                  </div>
                  <div className="col-span-10 md:col-span-5">
                    <div
                      className={`font-display text-3xl md:text-5xl leading-none ${
                        p.classified ? "text-outline-fg" : "text-foreground group-hover:text-primary"
                      } transition-colors flex items-center gap-3`}
                    >
                      {p.classified && <Lock className="h-6 w-6 text-primary" />}
                      {p.name}
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-4 font-mono text-xs md:text-sm text-muted-foreground">
                    {p.desc}
                  </div>
                  <div className="col-span-10 md:col-span-1 flex flex-wrap gap-1 justify-start md:justify-end">
                    {p.stack.slice(0, 2).map((s) => (
                      <span
                        key={s}
                        className="text-[10px] font-mono border border-border px-2 py-0.5 text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="col-span-2 md:col-span-1 flex justify-end">
                    {href && (
                      <ArrowUpRight className="h-6 w-6 text-foreground/60 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    )}
                    {p.classified && (
                      <Lock className="h-6 w-6 text-foreground/40" />
                    )}
                  </div>
                </div>
                {/* full stack row + note */}
                <div className="container mx-auto pb-6 md:pb-8 -mt-4 md:pl-[8.33%]">
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="text-[10px] font-mono text-primary/80 border border-primary/30 px-2 py-1"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  {p.note && (
                    <div className="mt-3 font-mono text-[10px] md:text-xs text-muted-foreground/70">
                      {p.note}
                    </div>
                  )}
                </div>
              </Tag>
            );
          })}
        </div>
      </div>
    </section>
  );
};
