"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Package, Users, ShoppingCart, FileText, Warehouse, TrendingUp } from "lucide-react";

const modules = [
  { icon: Package, label: "Fertigung" },
  { icon: ShoppingCart, label: "Verkauf" },
  { icon: Users, label: "CRM" },
  { icon: FileText, label: "Buchhaltung" },
  { icon: Warehouse, label: "Lager" },
  { icon: TrendingUp, label: "Marketing" },
];

const stats = [
  { value: "18", label: "Odoo Version" },
  { value: "50+", label: "Module verfügbar" },
  { value: "100%", label: "Open Source" },
  { value: "AT", label: "Lokalisierung" },
];

export function OdooSection() {
  return (
    <section id="odoo" className="py-24 px-4 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-6"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
              Odoo ERP
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight leading-tight">
              Die führende <span className="text-primary">Open-Source</span> ERP-Plattform
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Als zertifizierter Odoo Ready Partner begleiten wir Sie von der Erstanalyse über
              die Implementierung bis hin zur laufenden Betreuung. Odoo 18 vereint alle
              Unternehmensprozesse in einer intuitiven Plattform.
            </p>

            <div className="grid grid-cols-3 gap-3">
              {modules.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-2 p-3 rounded-xl bg-secondary border border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 cursor-default"
                >
                  <Icon className="w-5 h-5 text-primary" />
                  <span className="text-xs font-medium text-foreground">{label}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-4 gap-4 pt-2">
              {stats.map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="text-2xl font-bold text-primary">{value}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                alt="Odoo ERP Dashboard – Analyse und Übersicht"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
            </div>

            <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl p-4 shadow-lg">
              <p className="text-xs text-muted-foreground">Implementierungszeit</p>
              <p className="text-2xl font-bold text-foreground">4–12 Wo.</p>
              <p className="text-xs text-primary font-medium">je nach Projektgröße</p>
            </div>

            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-xl p-4 shadow-lg">
              <p className="text-xs opacity-80">Kundenzufriedenheit</p>
              <p className="text-2xl font-bold">98%</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
