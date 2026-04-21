export const Footer = () => {
  return (
    <footer className="border-t border-border py-6">
      <div className="container mx-auto flex items-center justify-center relative">
        <p className="font-mono text-[11px] text-muted-foreground tracking-widest text-center">
          PREETANSHU GUPTA — ParallaX © 2025 — [ ALL SYSTEMS OPERATIONAL ]
        </p>
        <span className="absolute right-6 h-2 w-2 rounded-full bg-primary blink" style={{ boxShadow: "0 0 8px hsl(var(--primary))" }} />
      </div>
    </footer>
  );
};
