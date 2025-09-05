import ThemeToggle from "./ThemeToggle";
import { Button } from "@/components/ui/button";

const nav = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Portfolio" },
  { href: "#featured", label: "Featured" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
      <div className="container flex h-16 items-center justify-between">
        <a href="#home" className="font-heading text-xl font-extrabold tracking-tight">
          Ravi Solanki
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild className="hidden sm:inline-flex">
            <a href="#projects">View My Work</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
