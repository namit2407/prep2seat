import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Service } from "@/types";
import {
  CheckCircle,
  GraduationCap,
  Instagram,
  MessageCircle,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const services: Service[] = [
  {
    id: "counseling",
    title: "NEET UG Counseling",
    description:
      "Personalized seat-allotment strategy built around your rank, category, and college preferences. Navigate every round of MCC & state counseling with confidence.",
    features: [
      "Personalized college selection strategy",
      "Rank analysis & seat prediction",
      "Choice filling guidance (MCC & state)",
      "Round-by-round counseling support",
      "Document verification assistance",
    ],
    icon: "graduation",
  },
  {
    id: "mentorship",
    title: "Mentorship Program",
    description:
      "Structured 1-on-1 mentorship for NEET UG aspirants still preparing. Learn from those who've already secured top medical seats.",
    features: [
      "One-on-one mentor sessions",
      "Personalised study plans",
      "Progress tracking & doubt sessions",
      "Motivation & stress management",
      "NEET exam strategy workshops",
    ],
    icon: "users",
  },
];

const iconMap: Record<string, React.ReactNode> = {
  graduation: <GraduationCap size={28} strokeWidth={1.5} />,
  users: <Users size={28} strokeWidth={1.5} />,
};

export function ServicesSection() {
  const [openPopover, setOpenPopover] = useState<string | null>(null);

  const handleLearnMore = (serviceId: string) => {
    setOpenPopover(openPopover === serviceId ? null : serviceId);
  };

  return (
    <section id="services" className="py-24 bg-muted/30">
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
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
            Tailored solutions for every stage of your NEET journey — from
            preparation to final seat allotment.
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card className="h-full shadow-elevated border-border hover:shadow-gold transition-smooth group">
                <CardContent className="p-8 flex flex-col gap-6 h-full">
                  {/* Icon + title */}
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center text-white shadow-subtle group-hover:shadow-gold transition-smooth shrink-0">
                      {iconMap[service.icon]}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-2xl text-foreground leading-tight">
                        {service.title}
                      </h3>
                      <div className="w-10 h-0.5 bg-accent/50 rounded-full mt-2" />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed text-[15px]">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="flex flex-col gap-2.5 flex-1">
                    {service.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-start gap-2.5 text-sm text-foreground"
                      >
                        <CheckCircle
                          size={16}
                          className="text-accent mt-0.5 shrink-0"
                          strokeWidth={2}
                        />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="relative mt-2">
                    <Button
                      variant="outline"
                      className="w-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-smooth font-semibold"
                      onClick={() => handleLearnMore(service.id)}
                      data-ocid={`service-cta-${service.id}`}
                    >
                      Learn More
                    </Button>
                    {openPopover === service.id && (
                      <div className="absolute bottom-full mb-2 left-0 right-0 z-20 bg-card border border-border rounded-xl shadow-elevated p-3 flex flex-col gap-2">
                        <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide px-1 pb-1">
                          Get in touch
                        </p>
                        <a
                          href="https://www.instagram.com/prep2seat"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-muted transition-smooth text-foreground text-sm font-medium"
                          data-ocid="contact-instagram"
                        >
                          <Instagram
                            size={16}
                            className="text-accent shrink-0"
                          />
                          Contact on Instagram
                        </a>
                        <a
                          href="https://wa.me/916378489833"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-muted transition-smooth text-foreground text-sm font-medium"
                          data-ocid="contact-whatsapp"
                        >
                          <MessageCircle
                            size={16}
                            className="text-accent shrink-0"
                          />
                          Contact on WhatsApp
                        </a>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
