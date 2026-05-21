import { motion } from "motion/react";

const steps = [
  { n: "01", t: "Free Estimate", d: "Reach out — we visit, measure, and quote at no cost." },
  { n: "02", t: "Consultation", d: "We listen to your vision and recommend the best path." },
  { n: "03", t: "Planning", d: "Detailed scope, materials, permits and timeline mapped out." },
  { n: "04", t: "Scheduling", d: "Crews and deliveries coordinated to keep things moving." },
  { n: "05", t: "Execution", d: "Skilled craftsmen build with precision and care." },
  { n: "06", t: "Final Inspection", d: "Walkthrough, punch list, and your full approval." },
];

export function Process() {
  return (
    <section id="process" className="py-24 lg:py-32">
      <div className="container-x">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
            How We Work
          </div>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            A clear, premium process — from first call to final walkthrough
          </h2>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-8 hidden lg:block h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="grid lg:grid-cols-6 gap-10 lg:gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative"
              >
                <div className="relative z-10 grid h-16 w-16 place-items-center rounded-2xl gradient-brand text-white font-bold shadow-glow">
                  {s.n}
                </div>
                <div className="mt-5 text-lg font-semibold">{s.t}</div>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
