import { motion } from "motion/react";
import { Check } from "lucide-react";
import kitchen from "@/assets/work-kitchen.jpg";
import drywall from "@/assets/work-drywall.jpg";

const points = [
  "Structured, transparent work process",
  "Efficient project management",
  "Durable, code-compliant craftsmanship",
  "Rigorous safety standards on every job",
  "Modern tools & proven techniques",
  "Clear communication start to finish",
];

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="grid grid-cols-2 gap-4">
            <img
              src={kitchen}
              alt="Kitchen remodel"
              className="rounded-2xl shadow-card object-cover h-72 w-full"
              loading="lazy"
            />
            <img
              src={drywall}
              alt="Drywall installation"
              className="rounded-2xl shadow-card object-cover h-72 w-full mt-12"
              loading="lazy"
            />
          </div>
          <div className="absolute -left-4 -bottom-4 rounded-2xl border border-border bg-white px-5 py-4 shadow-elegant">
            <div className="text-4xl font-bold gradient-brand bg-clip-text text-transparent">
              15+
            </div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">
              Years of experience
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
            About Cardenas
          </div>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            Trusted home improvement contractor in New Jersey
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Cardenas Construction LLC is a family-built company delivering premium residential and
            commercial construction. From new builds to detailed remodels, we combine precision
            craftsmanship with dependable project management to bring your vision to life.
          </p>
          <ul className="mt-8 grid sm:grid-cols-2 gap-3">
            {points.map((p, i) => (
              <motion.li
                key={p}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-start gap-2.5 text-sm"
              >
                <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full gradient-brand">
                  <Check className="h-3 w-3 text-white" />
                </span>
                <span className="text-foreground/85">{p}</span>
              </motion.li>
            ))}
          </ul>
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              { k: "500+", v: "Projects Completed" },
              { k: "98%", v: "Repeat Clients" },
              { k: "24h", v: "Response Time" },
            ].map((s) => (
              <div key={s.v}>
                <div className="text-2xl font-bold">{s.k}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
