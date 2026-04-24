import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { LINKS } from "@/config/links";

const links = [
  { icon: Github, label: "GitHub", value: "github.com/PreetanshuGit", href: LINKS.github },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/preetanshugupta18", href: LINKS.linkedin },
  { icon: Mail, label: "Email", value: "preetanshu.gupta18@gmail.com", href: LINKS.email },
  { icon: MessageCircle, label: "Discord", value: "@_celestial__18", href: LINKS.discord },
];

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) {
      toast.error("All fields required.", { description: "> connection_aborted" });
      return;
    }
    toast.success("Message transmitted.", { description: "> awaiting_response..." });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-32 border-t border-border">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-primary font-mono text-xs tracking-widest mb-4">
            06 / ESTABLISH_CONNECTION
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-6xl md:text-8xl leading-none mb-6">
              LET'S <br /> TALK.
            </h2>
            <p className="font-mono text-sm text-muted-foreground max-w-md mb-12">
              Whether it's CTFs, collabs, or just talking infosec — I'm here.
            </p>

            <ul className="space-y-4">
              {links.map((l, i) => {
                const Icon = l.icon;

                return (
                <li key={i}>
                  <a
                    href={l.href}
                    target={l.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 font-mono text-sm md:text-base text-foreground/80"
                  >
                    <Icon size={16} className="shrink-0 text-current" />
                    <span className="text-primary transition-colors duration-200 group-hover:text-[#ff4d00]">
                      →
                    </span>
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-1 group-hover:text-primary">
                      {l.label}
                    </span>
                  </a>
                </li>
                );
              })}
            </ul>

            {/* Terminal status block */}
            <div
              className="mt-10 rounded-md border p-3 px-4 font-mono text-xs leading-relaxed md:text-sm"
              style={{ backgroundColor: "#0a0a0a", borderColor: "#1f1f1f" }}
            >
              <div className="flex items-center gap-2">
                <span
                  className="inline-block h-2 w-2 rounded-full animate-pulse"
                  style={{ backgroundColor: "#00ffe0" }}
                />
                <span style={{ color: "#00ffe0" }}>&gt; STATUS:</span>
                <span className="text-white">OPEN TO OPPORTUNITIES</span>
              </div>
              <div>
                <span style={{ color: "#00ffe0" }}>&gt; TYPE:</span>{" "}
                <span className="text-white">INTERNSHIP · COLLAB · CTF TEAMS</span>
              </div>
              <div>
                <span style={{ color: "#00ffe0" }}>&gt; RESPONSE:</span>{" "}
                <span className="text-white">~24 HRS</span>
              </div>
            </div>

            {/* Resume download button */}
            <a
              href="/src/assets/resume.pdf"
              download
              className="mt-4 inline-flex items-center gap-2 border bg-transparent px-4 py-2 font-mono text-xs md:text-sm transition-colors duration-200 hover:bg-[rgba(255,77,0,0.15)]"
              style={{ borderColor: "#ff4d00", color: "#ff4d00" }}
            >
              ⬇ download_resume.pdf
            </a>
          </motion.div>

          {/* Right — form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={submit}
            className="space-y-8 lg:pt-8"
          >
            {(["name", "email", "message"] as const).map((field) => (
              <div key={field}>
                <label className="block font-mono text-xs text-secondary mb-2">
                  &gt; {field}:
                </label>
                {field === "message" ? (
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    className="terminal-input w-full font-mono text-sm text-foreground py-2 resize-none"
                    placeholder="initiate transmission..."
                  />
                ) : (
                  <input
                    type={field === "email" ? "email" : "text"}
                    value={form[field]}
                    onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                    className="terminal-input w-full font-mono text-sm text-foreground py-2"
                    placeholder={field === "email" ? "user@host.tld" : "identify yourself"}
                  />
                )}
              </div>
            ))}

            <button
              type="submit"
              className="glitch-hover w-full bg-primary text-primary-foreground font-display text-xl tracking-widest py-4 hover:scale-[0.98] transition-transform glow-primary"
            >
              SEND_MESSAGE.EXE
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
