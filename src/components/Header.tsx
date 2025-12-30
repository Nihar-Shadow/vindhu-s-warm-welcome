import { useState } from "react";
import { Phone, MapPin, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#menu", label: "Menu" },
    { href: "#reviews", label: "Reviews" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="font-display text-lg md:text-xl font-bold text-primary">
              Vindhu
              <span className="block text-xs md:text-sm font-body font-normal text-muted-foreground">
                Fast Friendly South Indian
              </span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-lg hover:bg-primary/5"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open("https://maps.google.com/?q=Vindhu+Fast+Friendly+South+Indian+Bhubaneswar", "_blank")}
            >
              <MapPin className="w-4 h-4" />
              Directions
            </Button>
            <Button
              size="sm"
              onClick={() => window.open("tel:08847829160")}
            >
              <Phone className="w-4 h-4" />
              Call Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="px-4 py-3 text-left text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>
            <div className="flex gap-3 mt-4 pt-4 border-t border-border">
              <Button
                variant="outline"
                size="sm"
                className="flex-1"
                onClick={() => window.open("https://maps.google.com/?q=Vindhu+Fast+Friendly+South+Indian+Bhubaneswar", "_blank")}
              >
                <MapPin className="w-4 h-4" />
                Directions
              </Button>
              <Button
                size="sm"
                className="flex-1"
                onClick={() => window.open("tel:08847829160")}
              >
                <Phone className="w-4 h-4" />
                Call Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
