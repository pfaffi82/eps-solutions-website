"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const contactInfo = [
  { icon: Mail, label: "E-Mail", value: "office@epsolutions.at", href: "mailto:office@epsolutions.at" },
  { icon: Phone, label: "Telefon", value: "+43 732 237227 0", href: "tel:+4373222722270" },
  { icon: MapPin, label: "Standort", value: "Linz, Österreich", href: "https://maps.google.com/?q=Linz+Austria" },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1200);
  }

  return (
    <section id="kontakt" className="py-24 px-4 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
            Kontakt
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">
            Starten wir gemeinsam
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Kostenlose Erstberatung – wir analysieren Ihre Situation und zeigen Ihnen konkrete Möglichkeiten.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 group"
                  target={href.startsWith("https") ? "_blank" : undefined}
                  rel={href.startsWith("https") ? "noopener noreferrer" : undefined}
                >
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{label}</p>
                    <p className="font-medium text-foreground text-sm">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="p-5 rounded-xl bg-primary/10 border border-primary/20">
              <p className="font-semibold text-foreground mb-1">Erstberatung kostenlos</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Wir nehmen uns 60 Minuten Zeit, Ihr Unternehmen kennenzulernen und
                maßgeschneiderte Empfehlungen zu geben – ohne Verpflichtung.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-3"
          >
            <Card className="p-8">
              {sent ? (
                <div className="text-center py-8 space-y-3">
                  <div className="flex justify-center">
                    <CheckCircle className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Nachricht gesendet!</h3>
                  <p className="text-muted-foreground">Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
                  <Button variant="outline" onClick={() => setSent(false)}>Weitere Anfrage</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Name <span className="text-primary">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="Max Mustermann"
                        className="w-full h-10 px-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="company" className="text-sm font-medium text-foreground">
                        Unternehmen
                      </label>
                      <input
                        id="company"
                        type="text"
                        placeholder="Musterfirma GmbH"
                        className="w-full h-10 px-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      E-Mail <span className="text-primary">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="max@musterfirma.at"
                      className="w-full h-10 px-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="interest" className="text-sm font-medium text-foreground">
                      Interesse an
                    </label>
                    <select
                      id="interest"
                      className="w-full h-10 px-3 rounded-lg bg-input border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow cursor-pointer"
                    >
                      <option value="">Bitte wählen…</option>
                      <option>ERP / Odoo Einführung</option>
                      <option>Prozessoptimierung</option>
                      <option>Social Media Marketing</option>
                      <option>Web Design & Branding</option>
                      <option>Allgemeine Beratung</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Nachricht
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Beschreiben Sie kurz Ihr Anliegen oder Ihre aktuelle Situation…"
                      className="w-full px-3 py-2.5 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg" disabled={loading}>
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Wird gesendet…
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Kostenlose Beratung anfragen
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
