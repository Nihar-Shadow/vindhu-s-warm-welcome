import { Heart, Phone, MapPin, MessageCircle } from "lucide-react";

const Footer = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/918847829160?text=Hi%20Vindhu!%20I%20want%20to%20enquire%20about%20your%20restaurant.", "_blank");
  };

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl font-bold text-primary mb-2">
              Vindhu
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Fast Friendly South Indian
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Simple food, clean place, honest prices — that's what we're known for 
              in Kendriya Vihar. Come eat with us!
            </p>
          </div>

          {/* Quick Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="tel:08847829160"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                088478 29160
              </a>
              <button
                onClick={openWhatsApp}
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </button>
              <div className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  Kendriya Vihar, Badaraghunathpur,<br />
                  Bhubaneswar, Odisha 752054
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">What We Offer</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>🍽️ Dine-in Available</li>
              <li>🥡 Takeaway Available</li>
              <li>👨‍👩‍👧‍👦 Family Friendly</li>
              <li>💰 ₹35–200 per person</li>
              <li>⭐ 5.0 rated on Google</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Vindhu Fast Friendly South Indian. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-primary fill-primary" /> in Bhubaneswar
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
