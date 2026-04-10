import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Service } from "@/types";
import {
  CheckCircle,
  GraduationCap,
  Instagram,
  MessageCircle,
  Sparkles,
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

const mentorshipPlans = [
  {
    label: "1-Year Program",
    price: "₹8,000",
    badge: "Popular",
    highlight: false,
  },
  {
    label: "2-Year Program",
    price: "₹13,000",
    badge: "Best Value",
    highlight: true,
  },
];

const spring = { type: "spring" as const, stiffness: 260, damping: 22 };

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
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
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
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ ...spring, delay: index * 0.15 }}
            >
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="h-full"
              >
                <Card className="h-full shadow-elevated border-border hover:shadow-gold transition-smooth group">
                  <CardContent className="p-8 flex flex-col gap-6 h-full">
                    {/* Icon + title */}
                    <div className="flex items-start gap-4">
                      <motion.div
                        className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center text-white shadow-subtle group-hover:shadow-gold transition-smooth shrink-0"
                        whileHover={{ rotate: 8, scale: 1.08 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 15,
                        }}
                      >
                        {iconMap[service.icon]}
                      </motion.div>
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
                      {service.features.map((feat, fi) => (
                        <motion.li
                          key={feat}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, amount: 0.1 }}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.15 + fi * 0.06,
                          }}
                          className="flex items-start gap-2.5 text-sm text-foreground"
                        >
                          <CheckCircle
                            size={16}
                            className="text-accent mt-0.5 shrink-0"
                            strokeWidth={2}
                          />
                          <span>{feat}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Pricing — only for mentorship */}
                    {service.id === "mentorship" && (
                      <div className="rounded-xl border border-accent/20 bg-accent/5 p-4 flex flex-col gap-3">
                        <div className="flex items-center gap-2 mb-0.5">
                          <Sparkles
                            size={14}
                            className="text-accent shrink-0"
                          />
                          <p className="text-xs font-bold uppercase tracking-widest text-accent">
                            Mentorship Pricing
                          </p>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          {mentorshipPlans.map((plan, pi) => (
                            <motion.div
                              key={plan.label}
                              initial={{ opacity: 0, scale: 0.9 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true, amount: 0.1 }}
                              transition={{
                                ...spring,
                                delay: 0.25 + pi * 0.12,
                              }}
                              className={`relative rounded-lg p-3 flex flex-col gap-1 border transition-smooth animate-pulse-gold ${
                                plan.highlight
                                  ? "gradient-primary border-primary/30 shadow-subtle"
                                  : "bg-card border-border"
                              }`}
                            >
                              <Badge
                                variant="secondary"
                                className={`self-start text-[10px] font-bold px-1.5 py-0 mb-1 ${
                                  plan.highlight
                                    ? "bg-white/20 text-white border-0"
                                    : "bg-accent/10 text-accent border-0"
                                }`}
                              >
                                {plan.badge}
                              </Badge>
                              <p
                                className={`font-display font-extrabold text-xl leading-none ${
                                  plan.highlight
                                    ? "text-white"
                                    : "text-foreground"
                                }`}
                              >
                                {plan.price}
                              </p>
                              <p
                                className={`text-xs font-medium leading-tight ${
                                  plan.highlight
                                    ? "text-white/80"
                                    : "text-muted-foreground"
                                }`}
                              >
                                {plan.label}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          Personalised guidance for your entire NEET journey —
                          study plans, doubt sessions &amp; exam strategy
                          included.
                        </p>
                      </div>
                    )}

                    {/* CTA */}
                    <div className="relative mt-2">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.15 + 0.3,
                        }}
                      >
                        <Button
                          variant="outline"
                          className="w-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-smooth font-semibold"
                          onClick={() => handleLearnMore(service.id)}
                          data-ocid={`service-cta-${service.id}`}
                        >
                          Learn More
                        </Button>
                      </motion.div>
                      {openPopover === service.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 6, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute bottom-full mb-2 left-0 right-0 z-20 bg-card border border-border rounded-xl shadow-elevated p-3 flex flex-col gap-2"
                        >
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
                            href="https://wa.me/916378489833?text=Heyy%0AI%20saw%20Prep2Seat%2C%20can%20you%20guide%20me%3F"
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
                        </motion.div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
