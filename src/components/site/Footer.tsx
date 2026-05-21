import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border gradient-brand">
      <div className="container-x py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <img src={logo} alt="Cardenas Construction LLC" className="h-20 w-auto" />
            <p className="mt-5 max-w-sm text-sm text-white leading-relaxed">
              Premium residential and commercial construction services across New Jersey. Built on
              craftsmanship, run on trust.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-full border border-border bg-white hover:gradient-brand hover:text-white transition"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-white">Company</div>
            <ul className="mt-4 space-y-2.5 text-sm text-white">
              {["About", "Services", "Projects", "Process", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="hover:text-foreground transition">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-white">Contact</div>
            <ul className="mt-4 space-y-2.5 text-sm text-white">
              <li className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5" /> (201) 450-0645
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5" /> (201) 790-8029
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5" />
                contact@cardenasconstructiollc.com
              </li>
              <li>Hackensack, NJ 07601</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white">
          <div>© {new Date().getFullYear()} Cardenas Construction LLC. All rights reserved.</div>
          <div>Licensed & Insured • Residential & Commercial • Free Estimates</div>
        </div>
      </div>
    </footer>
  );
}
