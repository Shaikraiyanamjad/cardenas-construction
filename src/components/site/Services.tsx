import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import wood from "@/assets/svc-wood.jpg";
import carpet from "@/assets/svc-carpet.jpg";
import construction from "@/assets/svc-construction.jpg";
import paint from "@/assets/svc-paint.jpg";
import power from "@/assets/svc-power.jpg";
import sidewalk from "@/assets/svc-sidewalk.jpg";
import remodel from "@/assets/svc-remodel.jpg";

const services = [
  {
    title: "Wood Flooring",
    desc: "Hardwood, laminate and engineered floors installed to last.",
    img: wood,
  },
  {
    title: "Carpet Services",
    desc: "Plush, durable carpet installation for any room or office.",
    img: carpet,
  },
  {
    title: "New Construction",
    desc: "Full-scope new builds with strong, code-compliant structures.",
    img: construction,
  },
  {
    title: "Remodeling",
    desc: "Kitchens, bathrooms, basements — transformed beautifully.",
    img: remodel,
  },
  {
    title: "Painting",
    desc: "Interior & exterior painting with flawless finish quality.",
    img: paint,
  },
  {
    title: "Power Washing",
    desc: "Restore siding, decks, and driveways to a like-new look.",
    img: power,
  },
  {
    title: "Sidewalks & Decks",
    desc: "Concrete sidewalks, walkways and outdoor decks built right.",
    img: sidewalk,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 gradient-brand">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
              What We Do
            </div>
            <h2 className="mt-3 text-4xl lg:text-5xl font-bold tracking-tight max-w-2xl text-white">
              Premium services for residential & commercial projects
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white"
          >
            Request a quote <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-3xl border border-border bg-white overflow-hidden shadow-card hover:shadow-elegant hover:-translate-y-1 hover:border-primary/40 transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-5 flex items-center justify-between">
                  <a
                    href="#contact"
                    className="text-sm font-semibold text-primary inline-flex items-center gap-1"
                  >
                    Learn more <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                  <span className="text-xs font-mono text-muted-foreground">0{i + 1}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
