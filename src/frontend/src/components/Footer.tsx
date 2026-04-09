import { Instagram } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "prep2seat",
  );

  return (
    <footer className="bg-card border-t border-border">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center shadow-gold">
                <span className="text-white font-display font-bold text-lg leading-none">
                  P
                </span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-xl tracking-tight text-foreground">
                  Prep2seat
                </span>
                <span className="text-[9px] font-body tracking-[0.18em] uppercase font-medium text-accent">
                  From Rank To Seat
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Expert NEET UG counseling and mentorship helping aspirants secure
              their medical seat with confidence.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4 text-sm uppercase tracking-widest">
              Services
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="#services"
                  className="hover:text-primary transition-smooth"
                >
                  NEET UG Counseling
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-primary transition-smooth"
                >
                  Mentorship Program
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="hover:text-primary transition-smooth"
                >
                  Success Stories
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-primary transition-smooth"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4 text-sm uppercase tracking-widest">
              Connect
            </h4>
            <a
              href="https://instagram.com/prep2seat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-3 rounded-xl gradient-instagram-subtle border border-instagram text-foreground transition-smooth group"
              data-ocid="footer-instagram"
            >
              <Instagram
                size={18}
                className="text-instagram group-hover:scale-110 transition-smooth"
              />
              <span className="font-semibold text-sm">@prep2seat</span>
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>© {year} Prep2seat. All rights reserved.</span>
          <span>
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-smooth"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
