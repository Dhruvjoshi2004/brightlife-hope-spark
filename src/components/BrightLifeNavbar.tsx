import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const BrightLifeNavbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: "#about", label: "About" },
    { href: "#impact", label: "Impact" },
    { href: "#projects", label: "Projects" },
    { href: "#gallery", label: "Gallery" },
    { href: "#donate", label: "Donate" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container-main h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-xl rotate-3 flex items-center justify-center">
            <div className="w-5 h-5 bg-yellow-300 rounded-full" />
          </div>
          <span className="font-display font-bold text-xl text-foreground">BrightLife</span>
        </div>

        <div className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-primary transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        <a href="#donate" className="hidden md:block btn-donate">Donate Now</a>

        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-card border-b border-border overflow-hidden"
          >
            <div className="container-main py-4 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a href="#donate" className="btn-donate text-center" onClick={() => setMobileOpen(false)}>
                Donate Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default BrightLifeNavbar;
