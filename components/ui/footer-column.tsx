import { Linkedin, Mail, MapPin, Phone, Zap } from "lucide-react";

const data = {
  linkedinLink: "https://www.linkedin.com/company/epsolutions-at",
  services: {
    erp: "#leistungen",
    process: "#leistungen",
    marketing: "#leistungen",
    webdesign: "#leistungen",
  },
  about: {
    company: "#ueber-uns",
    odoo: "#odoo",
    portal: "https://portal.epsolutions.at",
    careers: "#kontakt",
  },
  help: {
    consultation: "#kontakt",
    support: "mailto:office@epsolutions.at",
    contact: "#kontakt",
  },
  contact: {
    email: "office@epsolutions.at",
    phone: "+43 732 237227 0",
    address: "Linz, Oberösterreich, Österreich",
  },
  company: {
    name: "E&P Solutions",
    description:
      "Ihr Odoo-Partner in Österreich. Wir modernisieren Geschäftsprozesse mit maßgeschneiderten ERP-Lösungen, Prozessmanagement und digitalem Marketing für KMU.",
  },
};

const serviceLinks = [
  { text: "ERP & Odoo", href: data.services.erp },
  { text: "Prozessmanagement", href: data.services.process },
  { text: "Social Media Marketing", href: data.services.marketing },
  { text: "Web Design & Branding", href: data.services.webdesign },
];

const aboutLinks = [
  { text: "Über uns", href: data.about.company },
  { text: "Odoo Partner", href: data.about.odoo },
  { text: "Kundenportal", href: data.about.portal },
  { text: "Karriere", href: data.about.careers },
];

const helpLinks = [
  { text: "Erstberatung (kostenlos)", href: data.help.consultation, badge: true },
  { text: "Support", href: data.help.support },
  { text: "Kontakt", href: data.help.contact },
];

const contactInfo = [
  { icon: Mail, text: data.contact.email, href: `mailto:${data.contact.email}` },
  { icon: Phone, text: data.contact.phone, href: `tel:${data.contact.phone.replace(/\s/g, "")}` },
  { icon: MapPin, text: data.contact.address, href: "https://maps.google.com/?q=Linz+Austria", isAddress: true },
];

export default function FooterColumn() {
  return (
    <footer className="bg-secondary/40 dark:bg-secondary/20 mt-16 w-full rounded-t-2xl border-t border-border">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-primary-foreground shadow-sm">
                <Zap className="w-4 h-4" />
              </span>
              <span className="text-xl font-semibold text-foreground">
                {data.company.name}
              </span>
            </div>

            <p className="text-foreground/60 mt-5 max-w-xs text-sm leading-relaxed">
              {data.company.description}
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href={data.linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors duration-150"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${data.contact.email}`}
                className="text-primary hover:text-primary/80 transition-colors duration-150"
                aria-label="E-Mail"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              Odoo Ready Partner
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-2">
            <div>
              <p className="text-sm font-semibold text-foreground mb-5">Leistungen</p>
              <ul className="space-y-3">
                {serviceLinks.map(({ text, href }) => (
                  <li key={text}>
                    <a href={href} className="text-sm text-foreground/60 hover:text-foreground transition-colors duration-150">
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold text-foreground mb-5">Unternehmen</p>
              <ul className="space-y-3">
                {aboutLinks.map(({ text, href }) => (
                  <li key={text}>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm text-foreground/60 hover:text-foreground transition-colors duration-150"
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold text-foreground mb-5">Kontakt</p>
              <ul className="space-y-3">
                {contactInfo.map(({ icon: Icon, text, href, isAddress }) => (
                  <li key={text}>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-start gap-2 text-sm text-foreground/60 hover:text-foreground transition-colors duration-150"
                    >
                      <Icon className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {isAddress ? (
                        <address className="not-italic">{text}</address>
                      ) : (
                        <span>{text}</span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-5 space-y-2">
                {helpLinks.map(({ text, href, badge }) => (
                  <a
                    key={text}
                    href={href}
                    className={`flex items-center gap-2 text-sm transition-colors duration-150 ${
                      badge
                        ? "text-primary font-medium hover:text-primary/80"
                        : "text-foreground/60 hover:text-foreground"
                    }`}
                  >
                    {badge && (
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                      </span>
                    )}
                    {text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-foreground/50">
            © {new Date().getFullYear()} E&amp;P Solutions. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-4">
            <a href="/impressum" className="text-xs text-foreground/50 hover:text-foreground transition-colors duration-150">Impressum</a>
            <a href="/datenschutz" className="text-xs text-foreground/50 hover:text-foreground transition-colors duration-150">Datenschutz</a>
            <a href="/agb" className="text-xs text-foreground/50 hover:text-foreground transition-colors duration-150">AGB</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
