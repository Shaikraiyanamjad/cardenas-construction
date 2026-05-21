import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

const reviews = [
  {
    name: "Jessica M.",
    role: "Homeowner, Hackensack NJ",
    text: "Cardenas remodeled our kitchen and bathroom. The craftsmanship is on another level — clean, on time, and exactly what we envisioned.",
  },
  {
    name: "David R.",
    role: "Property Manager",
    text: "We use Cardenas Construction for all our turnover renovations. Reliable crews, fair pricing and they always finish strong.",
  },
  {
    name: "Maria L.",
    role: "Homeowner, Bergen County",
    text: "From the first estimate to the final walkthrough they were professional and respectful of our home. Highly recommend.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-[#d00000]">
      <div className="container-x">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-white">
            Testimonials
          </div>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Clients who trust the Cardenas name
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-3xl border border-border bg-white p-7 shadow-card hover:shadow-elegant transition-shadow"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-foreground" />
              <div className="flex gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 text-foreground/85 leading-relaxed">
                "{r.text}"
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-5">
                <div className="font-semibold">{r.name}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{r.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
