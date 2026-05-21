import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function Contact() {
  return (
    /* Responsive outer section padding */
    <section id="contact" className="py-12 sm:py-20 lg:py-32 bg-neutral-50">
      <div className="container-x mx-auto px-4 max-w-7xl">
        {/* Responsive grid container switches layout at 1024px breakpoint */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* --- LEFT PANEL: CONTACT INFO & MAP --- */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#d00000]">
              Get In Touch
            </div>
            <h2 className="mt-2 text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-900 text-balance">
              Let's build something you'll love
            </h2>
            <p className="mt-3 sm:mt-5 text-xs sm:text-base text-neutral-600 max-w-md leading-relaxed">
              Tell us about your project. We'll respond within 24 hours with a free, no-pressure estimate.
            </p>

            {/* Information Cards Stack */}
            <div className="mt-6 sm:mt-10 grid grid-cols-1 gap-3 sm:gap-4">
              {[
                {
                  icon: Phone,
                  label: "Call us",
                  value: "(201) 450-0645 • (201) 790-8029",
                  href: "tel:2014500645",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "contact@cardenasconstructiollc.com",
                  href: "mailto:contact@cardenasconstructiollc.com",
                },
                { icon: MapPin, label: "Location", value: "Hackensack, NJ 07601", href: "#" },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  /* 
                    RESPONSIVE FIX: Stack icon above text on tiny screens (flex-col), 
                    switch to horizontal (sm:flex-row) at 640px.
                  */
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 rounded-xl sm:rounded-2xl border border-neutral-200 bg-white p-3 sm:p-4 shadow-sm transition-all hover:border-[#d00000] hover:shadow-md"
                >
                  <div className="grid h-10 w-10 sm:h-12 sm:w-12 shrink-0 place-items-center rounded-lg sm:rounded-xl bg-[#d00000] text-white">
                    <c.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div className="min-w-0 break-all sm:break-normal">
                    <div className="text-[10px] sm:text-xs font-semibold text-neutral-500 uppercase tracking-wider">{c.label}</div>
                    <div className="text-sm sm:text-base font-bold text-neutral-800 mt-0.5">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Responsive Map Box */}
            <div className="mt-6 sm:mt-8 overflow-hidden rounded-xl sm:rounded-2xl border border-neutral-200 shadow-sm">
              <div className="relative h-[180px] sm:h-[260px] lg:h-64 w-full">
                <iframe
                  title="Cardenas Construction Location"
                  src="https://www.google.com/maps?q=Hackensack,NJ&output=embed"
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          {/* --- RIGHT PANEL: INTERACTIVE INTAKE FORM --- */}
          <motion.form
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = "mailto:contact@cardenasconstructiollc.com";
            }}
            className="w-full rounded-2xl sm:rounded-3xl border border-neutral-200 bg-white p-5 sm:p-8 lg:p-10 shadow-sm"
          >
            {/* Input Grid: Stacks on mobile, splits into 2 columns at 640px breakpoint */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <Field label="Full name" id="name" type="text" required />
              <Field label="Phone" id="phone" type="tel" required />
            </div>
            <div className="mt-4 sm:mt-5">
              <Field label="Email" id="email" type="email" required />
            </div>
            <div className="mt-4 sm:mt-5">
              <Field label="Service interested in" id="service" type="text" />
            </div>
            <div className="mt-4 sm:mt-5">
              <label
                htmlFor="message"
                className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-neutral-500"
              >
                Project details
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1.5 w-full rounded-lg sm:rounded-xl border border-neutral-300 bg-white px-3 sm:px-4 py-2.5 sm:py-3 text-sm outline-none focus:border-[#d00000] focus:ring-4 focus:ring-[#d00000]/10 transition placeholder-neutral-400"
                placeholder="Tell us a bit about what you're planning..."
              />
            </div>
            <button
              type="submit"
              className="mt-6 sm:mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#d00000] px-5 sm:px-6 py-3.5 sm:py-4 text-sm font-bold text-white shadow-md transition transform hover:opacity-95 active:scale-[0.99]"
            >
              Send Message <Send className="h-4 w-4" />
            </button>
            <p className="mt-3.5 text-center text-[10px] sm:text-xs text-neutral-500">
              By submitting you agree to be contacted about your project.
            </p>
          </motion.form>

        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  type,
  required,
}: {
  label: string;
  id: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div className="w-full">
      <label
        htmlFor={id}
        className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-neutral-500"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-lg sm:rounded-xl border border-neutral-300 bg-white px-3 sm:px-4 py-2.5 sm:py-3 text-sm outline-none focus:border-[#d00000] focus:ring-4 focus:ring-[#d00000]/10 transition"
      />
    </div>
  );
}