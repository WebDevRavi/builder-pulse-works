import { Github, Instagram, Linkedin, Youtube } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t py-10">
      <div className="container flex flex-col items-center justify-between gap-6 md:flex-row">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Ravi Solanki</p>
        <nav className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <a href="https://www.instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer"><Instagram className="h-5 w-5"/></a>
          <a href="https://www.youtube.com" aria-label="YouTube" target="_blank" rel="noreferrer"><Youtube className="h-5 w-5"/></a>
          <a href="https://github.com" aria-label="GitHub" target="_blank" rel="noreferrer"><Github className="h-5 w-5"/></a>
          <a href="https://www.linkedin.com" aria-label="LinkedIn" target="_blank" rel="noreferrer"><Linkedin className="h-5 w-5"/></a>
        </div>
      </div>
    </footer>
  );
}
