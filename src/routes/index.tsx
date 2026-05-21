import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Projects } from "@/components/site/Projects";
import { Process } from "@/components/site/Process";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cardenas Construction LLC | Premium NJ Home Improvement Contractor" },
      {
        name: "description",
        content:
          "Cardenas Construction LLC — premium residential and commercial construction, remodeling, flooring, painting and exterior services in Hackensack, NJ. Free estimates.",
      },
      { property: "og:title", content: "Cardenas Construction LLC | Premium NJ Contractor" },
      {
        property: "og:description",
        content:
          "Residential & commercial construction and remodeling in New Jersey. Free estimates.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@600;700;800&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GeneralContractor",
          name: "Cardenas Construction LLC",
          telephone: ["(201) 450-0645", "(201) 790-8029"],
          email: "contact@cardenasconstructiollc.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Hackensack",
            addressRegion: "NJ",
            postalCode: "07601",
            addressCountry: "US",
          },
          areaServed: "New Jersey",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Projects />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
