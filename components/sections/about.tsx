"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Target, Heart, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Ergebnisorientiert",
    description: "Klare Ziele, messbare Resultate. Wir fokussieren uns auf den echten Mehrwert für Ihr Unternehmen.",
  },
  {
    icon: Heart,
    title: "Persönliche Partnerschaft",
    description: "Direkte, persönliche Kommunikation – kein Ticketsystem, sondern echter Ansprechpartner.",
  },
  {
    icon: Lightbulb,
    title: "Innovative Lösungen",
    description: "Moderne Technologien kombiniert mit bewährten Methoden für nachhaltige Digitalisierung.",
  },
];

const industries = ["Produktion", "Handel", "Dienstleistung", "Non-Profit", "Startups", "Handwerk"];

export function About() {
  return (
    <section id="ueber-uns" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative order-2 lg:order-1"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80"
                  alt="E&P Solutions Team-Meeting"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] mt-8">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80"
                  alt="Kollaboration und Teamarbeit"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[85%] bg-card/95 backdrop-blur-sm border border-border rounded-xl p-4 shadow-lg">
              <p className="text-sm font-medium text-foreground mb-2">Branchen-Expertise</p>
              <div className="flex flex-wrap gap-1.5">
                {industries.map((ind) => (
                  <span key={ind} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground border border-border">
                    {ind}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="space-y-8 order-1 lg:order-2"
          >
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                Über uns
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight leading-tight">
                Ihr verlässlicher Partner für effiziente{" "}
                <span className="text-primary">Geschäftsprozesse</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                E&amp;P Solutions ist ein österreichisches Unternehmen mit Sitz in Linz, spezialisiert auf
                die Digitalisierung kleiner und mittlerer Unternehmen. Unser interdisziplinäres Team
                vereint Expertise in ERP, Prozessmanagement und digitalem Marketing.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Als Odoo Ready Partner kennen wir die Anforderungen heimischer Unternehmen und sprechen
                Ihre Sprache – sowohl fachlich als auch persönlich.
              </p>
            </div>

            <div className="space-y-4">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.08, ease: "easeOut" }}
                  className="flex gap-4 p-4 rounded-xl hover:bg-card transition-colors duration-200"
                >
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0 self-start">
                    <v.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">{v.title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
