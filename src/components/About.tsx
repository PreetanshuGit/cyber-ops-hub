import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const lines = [
  { p: "$ whoami", out: "preetanshu_gupta" },
  { p: "$ cat interests.txt", out: "cybersecurity, CTF, web pentesting,\nnetwork analysis, Python scripting" },
  { p: "$ status", out: "actively_hunting_flags" },
  { p: "$ cat target.txt", out: "red_teaming, adversarial_ops" },
  { p: "$ cat education.txt", out: "B.Tech CSE · LPU · 2025–2029" },
  { p: "$ nmap --scan self", out: "ports open: curiosity, persistence, offense" },
];

const Typewriter = () => {
  const [step, setStep] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    if (step >= lines.length * 2) return;
    const idx = Math.floor(step / 2);
    const isOut = step % 2 === 1;
    const target = isOut ? lines[idx].out : lines[idx].p;
    let i = 0;
    setText("");
    const interval = setInterval(() => {
      i++;
      setText(target.slice(0, i));
      if (i >= target.length) {
        clearInterval(interval);
        setTimeout(() => {
          setStep((s) => s + 1);
        }, isOut ? 600 : 200);
      }
    }, isOut ? 18 : 45);
    return () => clearInterval(interval);
  }, [step]);

  return (
    <pre className="font-mono text-[13px] leading-relaxed text-terminal whitespace-pre-wrap">
      {lines.slice(0, Math.floor(step / 2)).map((l, i) => (
        <span key={i}>
          <span className="text-foreground/80">{l.p}</span>
          {"\n"}
          <span className="text-terminal">{`> ${l.out.replace(/\n/g, "\n> ")}`}</span>
          {"\n\n"}
        </span>
      ))}
      {step < lines.length * 2 && (
        <span>
          {step % 2 === 0 ? (
            <span className="text-foreground/80">{text}</span>
          ) : (
            <>
              <span className="text-foreground/80">{lines[Math.floor(step / 2)].p}</span>
              {"\n"}
              <span className="text-terminal">{`> ${text.replace(/\n/g, "\n> ")}`}</span>
            </>
          )}
        </span>
      )}
      <span className="blink text-terminal">█</span>
    </pre>
  );
};

const stats = [
  { n: "02", l: "Semesters Completed" },
  { n: "RED TEAM", l: "Career Target" },
  { n: "LPU", l: "Lovely Professional University" },
  { n: "UP", l: "Uttar Pradesh, India" },
];

export const About = () => {
  return (
    <section id="about" className="relative py-32 border-t border-border">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-primary font-mono text-xs tracking-widest mb-6">
            01 / ABOUT_ME
          </div>
          <h2 className="font-display text-5xl md:text-7xl leading-none mb-8">
            NOT JUST <br /> A STUDENT.
          </h2>
          <p className="font-mono text-sm md:text-base text-foreground/80 leading-relaxed max-w-3xl mb-12">
            1st-year B.Tech CS student with one target: Red Team. I don't just learn how systems work —
            I learn how they fail. CTFs are the training ground, but the endgame is adversarial thinking
            at a professional level. Offense is how I see the world.
          </p>

          {/* Full-width terminal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-surface border border-border rounded-lg overflow-hidden glow-primary mb-12"
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-background/60">
              <div className="h-3 w-3 rounded-full bg-destructive" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-terminal" />
              <div className="ml-3 font-mono text-[11px] text-muted-foreground">
                parallax@root: ~/identity
              </div>
            </div>
            <div className="p-6 md:p-8 bg-background min-h-[420px]">
              <Typewriter />
            </div>
          </motion.div>

          {/* 4-block stat grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background p-6"
              >
                <div className="font-display text-4xl md:text-5xl text-primary leading-none">{s.n}</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-3">
                  {s.l}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
