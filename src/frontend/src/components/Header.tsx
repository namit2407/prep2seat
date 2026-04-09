import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled
          ? "bg-card border-b border-border shadow-subtle"
          : "bg-transparent"
      }`}
      data-ocid="nav"
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5 group"
            aria-label="Prep2seat home"
          >
            <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center shadow-gold">
              <span className="text-white font-display font-bold text-lg leading-none">
                P
              </span>
            </div>
            <div className="flex flex-col leading-none">
              <span
                className={`font-display font-bold text-xl tracking-tight transition-smooth ${
                  scrolled ? "text-foreground" : "text-white"
                }`}
              >
                Prep2seat
              </span>
              <span
                className={`text-[9px] font-body tracking-[0.18em] uppercase font-medium transition-smooth ${
                  scrolled ? "text-accent" : "text-accent"
                }`}
              >
                From Rank To Seat
              </span>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-smooth hover:bg-primary/10 hover:text-primary ${
                  scrolled
                    ? "text-foreground"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://instagram.com/prep2seat"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3"
              data-ocid="nav-cta"
            >
              <Button
                size="sm"
                className="gradient-accent text-accent-foreground border-0 shadow-gold font-semibold hover:opacity-90 transition-smooth"
              >
                @prep2seat
              </Button>
            </a>
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
        <div className="md:hidden bg-card border-b border-border shadow-elevated">
          <nav className="container px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="w-full text-left px-4 py-3 rounded-md text-sm font-medium text-foreground hover:bg-muted transition-smooth"
              >
                {link.label}
              </button>
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
        </div>
      )}
    </header>
  );
}
