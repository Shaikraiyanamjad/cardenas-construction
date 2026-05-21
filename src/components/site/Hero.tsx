import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

import heroImg from "@/assets/work-kitchen.jpg";
import teamImg from "@/assets/hero-team.png";

const SLIDES = [
  {
    image: heroImg,
    tagline: "Residential & Commercial Excellence",
  },
  {
    image: teamImg,
    tagline: "Quality Craftsmanship Since 2009",
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pt-28 sm:pt-32 lg:pt-36 gradient-brand"
    >
      <div className="mx-auto grid min-h-[calc(100vh-120px)] max-w-7xl grid-cols-1 items-center gap-14 px-4 pb-16 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">

        {/* LEFT CONTENT */}
        <div className="relative z-20 order-2 lg:order-1">

          {/* TAG */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-100 px-4 py-2"
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#d00000] sm:text-xs">
              {SLIDES[currentSlide].tagline}
            </span>
          </motion.div>

          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-6 max-w-2xl text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Premium Construction Services Built With Precision
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 max-w-xl text-base leading-8 text-white sm:text-lg"
          >
            From luxury renovations to commercial construction, we deliver
            exceptional craftsmanship, trusted expertise, and reliable results
            across New Jersey.
          </motion.p>

          {/* TRUST BADGE */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <div className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 shadow-sm">
              <ShieldCheck className="h-4 w-4 text-[#d00000]" />
              <span className="text-sm font-semibold text-neutral-700">
                Licensed & Insured NJ Contractor
              </span>
            </div>
          </motion.div>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#contact"
              className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[#d00000] px-8 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#b80000]"
            >
              Get Free Estimate
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="#projects"
              className="inline-flex h-14 items-center justify-center rounded-full border border-neutral-300 bg-white px-8 text-sm font-bold text-neutral-800 transition-all duration-300 hover:border-neutral-900 hover:bg-neutral-100"
            >
              View Projects
            </a>
          </motion.div>

          {/* DOTS */}
          <div className="mt-10 flex items-center gap-3">
            {SLIDES.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "w-10 bg-[#d00000]"
                    : "w-2 bg-neutral-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative order-1 flex justify-center lg:order-2 lg:justify-end">

          <div className="relative w-full max-w-[640px]">

            {/* IMAGE (RECTANGULAR FIX) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.03 }}
                transition={{ duration: 0.8 }}
                className="overflow-hidden rounded-[32px] border border-neutral-200 bg-neutral-100 shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
              >
                <img
                  src={SLIDES[currentSlide].image}
                  alt="Construction Project"
                  className="
                    w-full
                    object-cover
                    aspect-[16/10]
                    sm:aspect-[16/9]
                    lg:aspect-[16/9]
                  "
                />
              </motion.div>
            </AnimatePresence>

          </div>
        </div>
      </div>
    </section>
  );
}