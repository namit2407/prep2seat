import { Instagram } from "lucide-react";
import { motion } from "motion/react";

const footerLinks = [
  { label: "NEET UG Counseling", href: "#services" },
  { label: "Mentorship Program", href: "#services" },
  { label: "Success Stories", href: "#testimonials" },
  { label: "Contact Us", href: "#contact" },
];

const spring = { type: "spring" as const, stiffness: 260, damping: 22 };

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand — scale in */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ ...spring, delay: 0.05 }}
            className="flex flex-col gap-3"
          >
            <div className="flex items-center">
              <img
                src="/assets/logo.png"
                alt="Prep2seat logo"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Expert NEET UG counseling and mentorship helping aspirants secure
              their medical seat with confidence.
            </p>
          </motion.div>

          {/* Quick links — stagger fade from bottom */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="font-display font-semibold text-foreground mb-4 text-sm uppercase tracking-widest"
            >
              Services
            </motion.h4>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              {footerLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.35, delay: 0.15 + i * 0.07 }}
                >
                  <a
                    href={link.href}
                    className="hover:text-primary transition-smooth"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.2 }}
          >
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
          </motion.div>
        </div>

        {/* Copyright — fades in last */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground"
        >
          <span>© {year} Prep2seat. All rights reserved.</span>
        </motion.div>
      </div>
    </footer>
  );
}
