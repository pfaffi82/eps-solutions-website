"use client";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Zap } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Odoo", href: "#odoo" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Kontakt", href: "#kontakt" },
];

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="/" className="flex items-center gap-2 group" aria-label="E&P Solutions Home">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-primary-foreground shadow-sm group-hover:scale-105 transition-transform duration-200">
            <Zap className="w-4 h-4" />
          </span>
          <span className="font-semibold text-foreground text-lg tracking-tight">
            E<span className="text-primary">&amp;</span>P Solutions
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-secondary transition-all duration-150 cursor-pointer"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Theme wechseln"
            className="p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-all duration-150 cursor-pointer"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <Button asChild size="sm" className="hidden md:inline-flex">
            <a href="#kontakt">Beratung anfragen</a>
          </Button>
          <button
            className="md:hidden p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-all duration-150 cursor-pointer"
            onClick={() => setOpen(!open)}
            aria-label="Menü öffnen"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border px-4 pb-4 space-y-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-all duration-150"
            >
              {l.label}
            </a>
          ))}
          <div className="pt-2">
            <Button asChild className="w-full">
              <a href="#kontakt" onClick={() => setOpen(false)}>Beratung anfragen</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
