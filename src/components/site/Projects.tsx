import { motion } from "motion/react";
import { useState } from "react";
import { X } from "lucide-react";
import shower from "@/assets/work-shower.png";
import bath from "@/assets/work-bath.png";
import demo from "@/assets/work-demo.png";
import tile from "@/assets/work-tile.png";
import kitchen from "@/assets/work-kitchen.jpg";
import framing from "@/assets/work-framing.jpg";
import drywall from "@/assets/work-drywall.jpg";
import team from "@/assets/hero-team.png";

const items = [
  { src: shower, title: "Marble Walk-in Shower", tag: "Bathroom Remodel" },
  { src: kitchen, title: "Modern Kitchen Build", tag: "Kitchen Remodel" },
  { src: bath, title: "Subway Tile Bathroom", tag: "Bathroom" },
  { src: team, title: "On-Site With Our Crew", tag: "Team At Work" },
  { src: framing, title: "Basement Framing", tag: "New Construction" },
  { src: tile, title: "Custom Tile Work", tag: "Tile & Stone" },
  { src: drywall, title: "Drywall Finish", tag: "Interior" },
  { src: demo, title: "Full Gut Renovation", tag: "Demo & Build" },
];

export function Projects() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <section id="projects" className="py-24 lg:py-32 gradient-brand">
      <div className="container-x">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div className="max-w-xl">
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-white">
              Our Work
            </div>
            <h2 className="mt-3 text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Real projects, real craftsmanship
            </h2>
          </div>
          <p className="text-white max-w-sm">
            A look inside recent builds and remodels — every detail handled by the Cardenas team.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <motion.button
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              onClick={() => setActive(it.src)}
              className="group relative overflow-hidden rounded-2xl border border-border bg-white shadow-card aspect-[4/3]"
            >
              <img
                src={it.src}
                alt={it.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-left translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                <div className="text-xs text-white/80">{it.tag}</div>
                <div className="text-sm font-semibold text-white">{it.title}</div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {active && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[100] grid place-items-center bg-black/80 p-6 backdrop-blur-sm animate-in fade-in"
        >
          <button className="absolute top-6 right-6 rounded-full bg-white/10 p-2 text-white hover:bg-white/20">
            <X className="h-5 w-5" />
          </button>
          <img src={active} alt="" className="max-h-[85vh] max-w-full rounded-xl shadow-elegant" />
        </div>
      )}
    </section>
  );
}
