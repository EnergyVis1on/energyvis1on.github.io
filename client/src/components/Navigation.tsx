import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/challenge", label: "The Challenge" },
    { href: "/solutions", label: "STEM Solutions" },
    { href: "/take-action", label: "Take Action" },
    { href: "/about", label: "About Us" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3 hover-elevate rounded-md px-3 py-2 -ml-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-2xl font-bold text-primary font-serif">7</span>
            </div>
            <span className="font-serif font-bold text-lg hidden sm:block">SDG 7</span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <button
                  data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors hover-elevate ${
                    location === item.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </button>
              </Link>
            ))}
          </div>

          <Link href="/take-action" className="hidden md:block">
            <Button data-testid="button-take-action-nav" size="default">
              Take Action
            </Button>
          </Link>

          <button
            data-testid="button-mobile-menu"
            className="md:hidden p-2 hover-elevate rounded-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <button
                  data-testid={`link-mobile-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`block w-full text-left px-4 py-3 rounded-md text-sm font-medium hover-elevate ${
                    location === item.href
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </button>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
