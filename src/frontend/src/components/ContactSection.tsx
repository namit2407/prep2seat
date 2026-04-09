import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Instagram } from "lucide-react";
import { motion } from "motion/react";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center gap-4 mb-16"
        >
          <div className="section-divider" />
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
            Ready to convert your NEET rank into your dream seat? Reach out to
            us on Instagram — we respond within 24 hours.
          </p>
        </motion.div>

        {/* Instagram contact card */}
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card
              className="h-full shadow-elevated border transition-smooth gradient-instagram-subtle border-instagram"
              data-ocid="contact-instagram"
            >
              <CardContent className="p-8 flex flex-col gap-5 h-full">
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
                  mentorship enrollment. We're active daily and respond fast.
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
        </div>

        {/* Instagram spotlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 max-w-2xl mx-auto"
        >
          <a
            href="https://instagram.com/prep2seat"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col sm:flex-row items-center gap-5 bg-card rounded-2xl shadow-elevated border border-border p-7 hover:shadow-gold transition-smooth"
            data-ocid="instagram-spotlight"
          >
            <div className="w-16 h-16 rounded-2xl gradient-instagram flex items-center justify-center shadow-elevated shrink-0">
              <Instagram size={30} className="text-white" />
            </div>
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
