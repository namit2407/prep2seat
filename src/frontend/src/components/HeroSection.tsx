import { Button } from "@/components/ui/button";
import { ArrowDown, Star } from "lucide-react";
import { motion } from "motion/react";

const spring = { type: "spring" as const, stiffness: 280, damping: 22 };
const springBouncy = { type: "spring" as const, stiffness: 380, damping: 18 };

export function HeroSection() {
  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden gradient-hero">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-students.dim_1200x800.jpg')",
        }}
        aria-hidden="true"
      />
      {/* Decorative shapes */}
      <motion.div
        className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-accent/10 blur-3xl"
        animate={{ scale: [1, 1.12, 1], opacity: [0.6, 1, 0.6] }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-secondary/20 blur-3xl"
        animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{
          duration: 9,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1.5,
        }}
        aria-hidden="true"
      />

      <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10 pt-24 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left: Text */}
          <div className="flex flex-col gap-6">
            {/* Badge — slides in from left with bounce */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ...springBouncy, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 w-fit"
            >
              <Star size={13} className="text-accent fill-current" />
              <span className="text-white/90 text-xs font-semibold tracking-wide uppercase">
                NEET UG Expert Guidance
              </span>
            </motion.div>

            {/* Headline — dramatic entrance: scale + translateY + opacity */}
            <motion.h1
              id="jokvl9"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ ...spring, delay: 0.22 }}
              className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tight text-balance"
            >
              From{" "}
              <span className="animate-shimmer relative">
                Rank
                <span
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent/50 rounded-full"
                  aria-hidden="true"
                />
              </span>{" "}
              <br className="hidden sm:block" />
              To{" "}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...spring, delay: 0.44 }}
                className="animate-shimmer inline-block"
              >
                Seat
              </motion.span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.38,
              }}
              className="text-white/80 text-lg sm:text-xl max-w-md leading-relaxed font-body"
            >
              Expert guidance and personalized mentorship to help NEET UG
              aspirants secure their dream medical seat.
            </motion.p>

            {/* Stats row — each stat staggers in */}
            <div className="flex flex-wrap gap-6">
              {[
                { value: "500+", label: "Students Guided" },
                { value: "95%", label: "Success Rate" },
                { value: "50+", label: "Top Colleges" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...spring, delay: 0.52 + i * 0.1 }}
                  className="flex flex-col"
                >
                  <span className="font-display font-bold text-2xl text-accent">
                    {stat.value}
                  </span>
                  <span className="text-white/70 text-xs font-medium">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTAs — slide in from bottom with scale bounce */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springBouncy, delay: 0.72 }}
              className="flex flex-wrap gap-3 pt-2"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  size="lg"
                  onClick={scrollToServices}
                  className="gradient-accent text-accent-foreground border-0 shadow-gold font-semibold text-base px-7 hover:opacity-90 transition-smooth"
                  data-ocid="hero-cta-services"
                >
                  Explore Services
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  onClick={scrollToContact}
                  className="border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 font-semibold text-base px-7 transition-smooth"
                  data-ocid="hero-cta-contact"
                >
                  Get In Touch
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Image card — springs in from right */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ ...spring, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elevated border border-white/15">
              <img
                src="/assets/generated/hero-students.dim_1200x800.jpg"
                alt="Medical students celebrating NEET success"
                className="w-full h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...spring, delay: 0.8 }}
                className="absolute bottom-5 left-5 right-5 bg-card/90 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-elevated"
              >
                <p className="font-display font-semibold text-foreground text-sm">
                  "Prep2seat helped me convert my NEET rank into my dream seat.
                  The counseling was exceptional!"
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-7 h-7 rounded-full gradient-primary flex items-center justify-center">
                    <span className="text-white text-xs font-bold">N</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground">
                      Nikhil Seervi
                    </p>
                    <p className="text-xs text-muted-foreground">
                      NEET UG 2024
                    </p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {["s1", "s2", "s3", "s4", "s5"].map((k, i) => (
                      <motion.span
                        key={k}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: 1.0 + i * 0.07,
                          type: "spring",
                          stiffness: 400,
                          damping: 15,
                        }}
                      >
                        <Star size={10} className="text-accent fill-current" />
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator — gentle pulsing bounce */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/50 text-xs font-medium tracking-widest uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <ArrowDown size={16} className="text-white/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
