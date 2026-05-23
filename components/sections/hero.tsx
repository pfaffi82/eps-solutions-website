"use client";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const highlights = [
  "Odoo Ready Partner",
  "Kostenlose Erstberatung",
  "KMU-spezialisiert",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16" aria-label="Hero">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/30 rounded-full blur-3xl" />
      </div>

      <ContainerScroll
        titleComponent={
          <div className="space-y-6 px-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Odoo 18 Community Partner · Österreich
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight">
              Ihr Partner für{" "}
              <span className="text-primary">smarte</span>{" "}
              <br className="hidden md:block" />
              ERP-Lösungen
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Wir digitalisieren Ihre Geschäftsprozesse mit{" "}
              <strong className="text-foreground">Odoo</strong>, optimieren Abläufe mit{" "}
              <strong className="text-foreground">Lean & Six Sigma</strong> und stärken
              Ihre Marke mit modernem <strong className="text-foreground">Digital Marketing</strong>.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {highlights.map((h) => (
                <span key={h} className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  {h}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Button size="lg" asChild>
                <a href="#kontakt" className="group">
                  Jetzt Beratung anfragen
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-150" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#leistungen">Leistungen entdecken</a>
              </Button>
            </div>
          </div>
        }
      >
        <div className="relative w-full h-full rounded-xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1400&q=80"
            alt="E&P Solutions Team bei der Arbeit – modernes ERP-Dashboard"
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 768px) 100vw, 1400px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1c2433]/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="bg-card/90 backdrop-blur-sm border border-border rounded-xl p-4 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop",
                  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=40&h=40&fit=crop",
                ].map((src, i) => (
                  <Image
                    key={i}
                    src={src}
                    alt=""
                    width={32}
                    height={32}
                    className="rounded-full border-2 border-card object-cover"
                  />
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">50+ zufriedene Kunden</p>
                <p className="text-xs text-muted-foreground">aus Produktion, Handel & Dienstleistung</p>
              </div>
            </div>
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
}
