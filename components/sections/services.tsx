"use client";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings2, BarChart3, Megaphone, Globe, ArrowRight, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Settings2,
    title: "ERP & Odoo",
    badge: "Odoo Ready Partner",
    description:
      "Maßgeschneiderte Odoo-Implementierung, Erweiterungen und Support für Ihr Unternehmen. Von der Einführung bis zur laufenden Betreuung.",
    features: ["Odoo 18 Community & Enterprise", "Einführung & Migration", "Schulungen & Support", "Individuelle Anpassungen"],
    href: "#kontakt",
  },
  {
    icon: BarChart3,
    title: "Prozessmanagement",
    badge: "Lean · Six Sigma",
    description:
      "Analyse und Optimierung Ihrer Geschäftsprozesse mit bewährten Methoden. Wir identifizieren Potenziale und setzen Verbesserungen nachhaltig um.",
    features: ["Prozessanalyse & -mapping", "Lean Management", "Six Sigma Methodik", "KPI-Dashboards & Reporting"],
    href: "#kontakt",
  },
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    badge: "Digital First",
    description:
      "Individuelle Marketingkampagnen abgestimmt auf Ihre Geschäftsziele. Reichweite aufbauen, Leads generieren, Marke stärken.",
    features: ["Strategieentwicklung", "Content Creation", "Community Management", "Performance-Analyse"],
    href: "#kontakt",
  },
  {
    icon: Globe,
    title: "Web Design & Branding",
    badge: "Odoo-basiert",
    description:
      "Professionelle Webseiten auf Basis von Odoo 18 – performant, modern und eng mit Ihrem ERP-System verknüpft.",
    features: ["Odoo Website Builder", "Corporate Design", "SEO-Optimierung", "Responsive & barrierefrei"],
    href: "#kontakt",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export function Services() {
  return (
    <section id="leistungen" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
            Unsere Leistungen
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">
            Alles aus einer Hand
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Von der ERP-Einführung über Prozessoptimierung bis hin zu digitalem Marketing –
            wir begleiten Ihr Unternehmen ganzheitlich auf dem Weg zur Digitalisierung.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={cardVariants}>
              <Card className="h-full hover:shadow-md transition-shadow duration-300 group bg-card">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <service.icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-accent text-accent-foreground border border-border">
                      {service.badge}
                    </span>
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" size="sm" asChild className="group/btn">
                    <a href={service.href}>
                      Mehr erfahren
                      <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform duration-150" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
