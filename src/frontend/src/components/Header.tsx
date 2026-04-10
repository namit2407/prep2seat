import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const spring = { type: "spring" as const, stiffness: 300, damping: 22 };

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...spring, delay: 0.05 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled
          ? "bg-card border-b border-border shadow-subtle"
          : "bg-transparent"
      }`}
      data-ocid="nav"
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo — scales in */}
          <motion.button
            type="button"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...spring, delay: 0.12 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5 group"
            aria-label="Prep2seat home"
          >
            <img
              src="/assets/logo.png"
              alt="Prep2seat logo"
              className="h-10 w-auto object-contain"
            />
          </motion.button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <motion.button
                type="button"
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.18 + i * 0.07 }}
                onClick={() => handleNav(link.href)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-smooth hover:bg-primary/10 hover:text-primary ${
                  scrolled
                    ? "text-foreground"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </motion.button>
            ))}
            <motion.a
              href="https://instagram.com/prep2seat"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring" as const,
                stiffness: 380,
                damping: 16,
                delay: 0.4,
              }}
              data-ocid="nav-cta"
            >
              <Button
                size="sm"
                className="gradient-accent text-accent-foreground border-0 shadow-gold font-semibold hover:opacity-90 transition-smooth"
              >
                @prep2seat
              </Button>
            </motion.a>
          </nav>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className={`md:hidden p-2 rounded-md transition-smooth ${
              scrolled
                ? "text-foreground hover:bg-muted"
                : "text-white hover:bg-white/10"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="md:hidden bg-card border-b border-border shadow-elevated"
        >
          <nav className="container px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <motion.button
                type="button"
                key={link.href}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => handleNav(link.href)}
                className="w-full text-left px-4 py-3 rounded-md text-sm font-medium text-foreground hover:bg-muted transition-smooth"
              >
                {link.label}
              </motion.button>
            ))}
            <a
              href="https://instagram.com/prep2seat"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2"
            >
              <Button className="w-full gradient-accent text-accent-foreground border-0 font-semibold">
                Follow @prep2seat
              </Button>
            </a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
