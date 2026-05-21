import { motion } from "motion/react";
import { Users, Clock, Gem, ShieldCheck, Handshake, Sparkles, Wrench, Smile } from "lucide-react";

const items = [
  { icon: Users, title: "Experienced Team", desc: "Skilled crews with 15+ years on the tools." },
  { icon: Clock, title: "Timely Completion", desc: "Realistic timelines we actually deliver on." },
  { icon: Gem, title: "Quality Materials", desc: "Trusted suppliers — built to last." },
  { icon: ShieldCheck, title: "Safety Standards", desc: "OSHA-aligned practices on every job." },
  { icon: Handshake, title: "Reliable Service", desc: "Clear communication, honest pricing." },
  { icon: Sparkles, title: "Attention to Detail", desc: "Premium finish quality, every time." },
  { icon: Wrench, title: "Modern Equipment", desc: "Professional tools for cleaner results." },
  { icon: Smile, title: "Customer Satisfaction", desc: "We're not done until you're delighted." },
];

export function WhyUs() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
            Why Cardenas
          </div>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            Built on trust. Delivered with precision.
          </h2>
          <p className="mt-4 text-muted-foreground">
            We've earned our reputation one project at a time — with craftsmanship, accountability,
            and care for the people we work for.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              className="group rounded-2xl border border-border bg-white p-6 shadow-card hover:border-primary/40 hover:shadow-elegant transition-all"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[color:var(--surface)] group-hover:gradient-brand transition-colors">
                <it.icon className="h-5 w-5 text-foreground group-hover:text-white transition-colors" />
              </div>
              <div className="mt-5 text-base font-semibold">{it.title}</div>
              <p className="mt-1.5 text-sm text-muted-foreground">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
