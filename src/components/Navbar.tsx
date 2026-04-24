import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import navbarAvatar from "@/assets/avatar.jpg";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "ctf", label: "CTF" },
  { id: "certs", label: "Certs" },
  { id: "contact", label: "Contact" },
];

export const Navbar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1000);
    const onScroll = () => {
      if (window.scrollY > 60) setVisible(true);
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 right-0 z-50 border-b border-border"
          style={{
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            background: "rgba(8,8,8,0.85)",
          }}
        >
          <div className="container mx-auto flex items-center justify-between py-3">
            <HoverCard openDelay={0} closeDelay={0}>
              <HoverCardTrigger asChild>
                <div className="avatar-ring-hover h-[42px] w-[42px] overflow-hidden rounded-full">
                  <img
                    src={navbarAvatar}
                    alt="Preetanshu Gupta avatar"
                    className="h-full w-full object-cover"
                    style={{ filter: "brightness(2.0) contrast(1.2) saturate(1.5)" }}
                    loading="eager"
                    fetchPriority="high"
                  />
                </div>
              </HoverCardTrigger>
              <HoverCardContent
                side="bottom"
                sideOffset={12}
                className="w-auto rounded-lg border border-border bg-surface p-3 text-foreground duration-200"
              >
                <div className="flex flex-col items-center gap-3">
                  <img
                    src={navbarAvatar}
                    alt="ParallaX avatar"
                    className="h-[120px] w-[120px] rounded-full object-cover"
                  />
                  <div className="flex flex-col items-center gap-1 text-center">
                    <div className="font-mono text-[11px] text-muted-foreground">// the building was a vulnerability</div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
            <div className="hidden md:flex items-center gap-6 text-xs uppercase tracking-[0.2em] font-label">
              {links.map((l) => (
                <Link
                  key={l.id}
                  to={l.id}
                  smooth
                  duration={600}
                  offset={-60}
                  className="cursor-none text-foreground/80 hover:text-primary transition-colors relative group"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all group-hover:w-full" />
                </Link>
              ))}
            </div>
            <div className="md:hidden text-[10px] font-mono text-secondary">[ MENU ]</div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};
