import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Instagram, MessageCircle } from "lucide-react";
import { motion } from "motion/react";

const spring = { type: "spring" as const, stiffness: 280, damping: 22 };

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col items-center text-center gap-4 mb-16"
        >
          <motion.div
            className="section-divider"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 48, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          />
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
            Ready to convert your NEET rank into your dream seat? Reach out to
            us on Instagram or WhatsApp — we respond within 24 hours.
          </p>
        </motion.div>

        {/* Contact cards — Instagram from left, WhatsApp from right */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* Instagram card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ ...spring, delay: 0.1 }}
          >
            <motion.div
              whileHover={{ scale: 1.025 }}
              transition={{ type: "spring", stiffness: 380, damping: 18 }}
              className="h-full"
            >
              <Card
                className="h-full shadow-elevated border transition-smooth gradient-instagram-subtle border-instagram hover:shadow-gold-glow"
                data-ocid="contact-instagram"
              >
                <CardContent className="p-7 flex flex-col gap-5 h-full">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-card flex items-center justify-center shadow-subtle">
                      <Instagram size={22} className="text-instagram" />
                    </div>
                    <div>
                      <p className="font-display font-bold text-lg text-foreground leading-tight">
                        Instagram
                      </p>
                      <p className="font-semibold text-sm text-primary">
                        @prep2seat
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    DM us on Instagram for quick queries, counseling info, and
                    mentorship enrollment. We're active daily.
                  </p>
                  <a
                    href="https://instagram.com/prep2seat"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      className="w-full gradient-primary text-primary-foreground border-0 font-semibold hover:opacity-90 transition-smooth"
                      data-ocid="contact-cta-instagram"
                    >
                      Message on Instagram
                      <ExternalLink size={14} className="ml-2" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* WhatsApp card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ ...spring, delay: 0.18 }}
          >
            <motion.div
              whileHover={{ scale: 1.025 }}
              transition={{ type: "spring", stiffness: 380, damping: 18 }}
              className="h-full"
            >
              <Card
                className="h-full shadow-elevated border transition-smooth hover:shadow-gold-glow"
                style={{
                  borderColor: "rgba(37,211,102,0.35)",
                  background: "rgba(37,211,102,0.04)",
                }}
                data-ocid="contact-whatsapp"
              >
                <CardContent className="p-7 flex flex-col gap-5 h-full">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-card flex items-center justify-center shadow-subtle">
                      <MessageCircle size={22} style={{ color: "#25D366" }} />
                    </div>
                    <div>
                      <p className="font-display font-bold text-lg text-foreground leading-tight">
                        WhatsApp
                      </p>
                      <p
                        className="font-semibold text-sm"
                        style={{ color: "#25D366" }}
                      >
                        +91 6378489833
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    Chat with us directly on WhatsApp for mentorship enrollment,
                    counseling queries, and program details.
                  </p>
                  <a
                    href="https://wa.me/916378489833"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      className="w-full font-semibold text-white border-0 hover:opacity-90 transition-smooth"
                      style={{ background: "#25D366" }}
                      data-ocid="contact-cta-whatsapp"
                    >
                      Chat on WhatsApp
                      <ExternalLink size={14} className="ml-2" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* Instagram spotlight — zoom + fade */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ ...spring, delay: 0.22 }}
          className="mt-14 max-w-2xl mx-auto"
        >
          <a
            href="https://instagram.com/prep2seat"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col sm:flex-row items-center gap-5 bg-card rounded-2xl shadow-elevated border border-border p-7 hover:shadow-gold transition-smooth"
            data-ocid="instagram-spotlight"
          >
            <motion.div
              className="w-16 h-16 rounded-2xl gradient-instagram flex items-center justify-center shadow-elevated shrink-0"
              whileHover={{ rotate: 8, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 14 }}
            >
              <Instagram size={30} className="text-white" />
            </motion.div>
            <div className="flex-1 text-center sm:text-left">
              <p className="font-display font-bold text-2xl text-foreground">
                @prep2seat
              </p>
              <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                Follow us on Instagram for daily NEET tips, counseling updates,
                college info and success stories.
              </p>
            </div>
            <div className="shrink-0">
              <span className="inline-flex items-center gap-2 gradient-instagram text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-subtle group-hover:shadow-elevated transition-smooth">
                Follow Now
                <ExternalLink size={14} />
              </span>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
