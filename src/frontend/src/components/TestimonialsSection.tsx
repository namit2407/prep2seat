import { Card, CardContent } from "@/components/ui/card";
import type { Testimonial } from "@/types";
import { Quote, Star } from "lucide-react";
import { motion } from "motion/react";

const testimonials: Testimonial[] = [
  {
    id: "nikhil",
    name: "Nikhil Seervi",
    rank: "AIR 1236",
    college: "MBBS — Government Medical College",
    quote:
      "Prep2seat completely transformed my counseling experience. Their rank-to-seat strategy was precise and I was able to secure a government medical college seat I never thought possible. The personal attention was incredible — they treated my success like their own.",
    initials: "NS",
  },
  {
    id: "priyanshu",
    name: "Priyanshu Budania",
    rank: "AIR 2003",
    college: "MBBS — State Medical University",
    quote:
      "The mentorship program at Prep2seat gave me the structure I needed during preparation. My mentor had been through the same process and guided me with real insights. After qualifying, the counseling support made sure I converted my rank into the best possible seat.",
    initials: "PB",
  },
];

const spring = { type: "spring" as const, stiffness: 260, damping: 22 };

function AnimatedStars() {
  return (
    <div className="flex gap-0.5">
      {["s1", "s2", "s3", "s4", "s5"].map((k, i) => (
        <motion.span
          key={k}
          initial={{ opacity: 0, scale: 0, rotate: -20 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 14,
            delay: i * 0.07,
          }}
        >
          <Star size={13} className="text-accent fill-current" />
        </motion.span>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-background">
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
            Student Success Stories
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
            Real students, real results. Hear from those who turned their NEET
            rank into their dream medical seat.
          </p>
        </motion.div>

        {/* Testimonial cards — alternating left/right slide */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ ...spring, delay: index * 0.15 }}
            >
              <Card
                className="h-full shadow-elevated border-border hover:shadow-gold transition-smooth relative overflow-hidden group"
                data-ocid={`testimonial-${t.id}`}
              >
                {/* Decorative quote — rotates on hover */}
                <motion.div
                  className="absolute top-4 right-5 text-accent/10 pointer-events-none"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  aria-hidden="true"
                >
                  <Quote size={80} strokeWidth={1} />
                </motion.div>

                <CardContent className="p-8 flex flex-col gap-5 relative z-10">
                  {/* Logo */}
                  <img
                    src="/assets/logo.png"
                    alt="Prep2seat"
                    className="h-10 object-contain object-left"
                  />

                  {/* Stars — animate in one by one */}
                  <AnimatedStars />

                  {/* Quote */}
                  <blockquote className="text-foreground text-[15px] leading-relaxed font-body italic flex-1">
                    "{t.quote}"
                  </blockquote>

                  {/* Divider */}
                  <div className="h-px bg-border" />

                  {/* Attribution */}
                  <div className="flex items-center gap-3">
                    <motion.div
                      className="w-11 h-11 rounded-full gradient-primary flex items-center justify-center shadow-subtle shrink-0"
                      whileHover={{ scale: 1.08 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 15,
                      }}
                    >
                      <span className="text-white font-display font-bold text-sm">
                        {t.initials}
                      </span>
                    </motion.div>
                    <div className="min-w-0">
                      <p className="font-display font-bold text-foreground leading-tight">
                        {t.name}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {t.college}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust band */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ ...spring, delay: 0.25 }}
          className="mt-14 rounded-2xl gradient-primary p-8 text-center flex flex-col gap-3"
        >
          <p className="font-display font-bold text-2xl text-white">
            Join 500+ students who secured their dream medical seat
          </p>
          <p className="text-white/75 text-sm max-w-md mx-auto">
            From AIR 1 to AIR 10,000 — every rank can be converted into the
            right seat with expert counseling.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
