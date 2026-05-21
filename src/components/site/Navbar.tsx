import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import logo from "@/assets/logo.png";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className={`transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}>
        <div className="container-x">
          <div
            className={`flex items-center justify-between rounded-2xl border border-border/70 px-4 lg:px-6 transition-all ${
              scrolled ? "bg-white shadow-card py-2" : "bg-white py-3"
            }`}
          >
            <a href="#home" className="flex items-center gap-2">
              <img src={logo} alt="Cardenas Construction LLC" className="h-14 lg:h-16 w-auto" />
            </a>
            <nav className="hidden lg:flex items-center gap-7">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm font-medium text-foreground/75 hover:text-foreground transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:2014500645"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-foreground"
              >
                <Phone className="h-4 w-4" /> (201) 450-0645
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-full gradient-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground shadow-glow hover:opacity-95 transition"
              >
                Free Estimate
              </a>
            </div>
            <button
              aria-label="Open menu"
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden inline-flex items-center justify-center rounded-full border border-border bg-white p-2"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden container-x"
          >
            <div className="mt-2 rounded-2xl border border-border bg-white shadow-elegant p-4">
              <div className="flex flex-col">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="py-3 border-b border-border/60 last:border-0 text-base font-medium"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-4 inline-flex justify-center rounded-full gradient-brand px-5 py-3 text-sm font-semibold text-brand-foreground"
                >
                  Free Estimate
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
