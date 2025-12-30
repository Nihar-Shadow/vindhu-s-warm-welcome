import { Phone, MapPin, Clock, Navigation, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/918847829160?text=Hi%20Vindhu!%20I%20want%20to%20enquire%20about%20your%20restaurant.", "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-warm-gradient">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Visit Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Come to Vindhu Today
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Located in Kendriya Vihar — just call or walk in for a warm meal!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in-up">
            {/* Phone Card */}
            <div className="bg-card p-6 rounded-2xl shadow-soft hover:shadow-card transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">Call Us</h3>
                  <a
                    href="tel:08847829160"
                    className="text-2xl font-display font-bold text-primary hover:underline"
                  >
                    088478 29160
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    Tap to call & book your table
                  </p>
                </div>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-card p-6 rounded-2xl shadow-soft hover:shadow-card transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">Address</h3>
                  <p className="text-foreground/80">
                    Kendriya Vihar,<br />
                    Badaraghunathpur, Bhubaneswar,<br />
                    Odisha 752054
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Near the main road — easy to find!
                  </p>
                </div>
              </div>
            </div>

            {/* Services Card */}
            <div className="bg-card p-6 rounded-2xl shadow-soft hover:shadow-card transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2">Services</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                      🍽️ Dine-in
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      🥡 Takeaway
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Walk-ins welcome • No delivery
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  onClick={() => window.open("tel:08847829160")}
                  className="flex-1"
                >
                  <Phone className="w-5 h-5" />
                  Call & Book a Table
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.open("https://maps.google.com/?q=Vindhu+Fast+Friendly+South+Indian+Bhubaneswar", "_blank")}
                  className="flex-1"
                >
                  <Navigation className="w-5 h-5" />
                  Visit Vindhu Today
                </Button>
              </div>
              <Button
                variant="outline"
                size="lg"
                onClick={openWhatsApp}
                className="w-full text-accent border-accent/30 hover:bg-accent/10 hover:text-accent"
              >
                <MessageCircle className="w-5 h-5" />
                Message on WhatsApp
              </Button>
            </div>
          </div>

          {/* Map */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="bg-card rounded-2xl overflow-hidden shadow-card h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.982376890463!2d85.80494731493342!3d20.35789798640883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19093c03cb7b0b%3A0x8a0e5f0e5a6f5b7c!2sKendriya%20Vihar%2C%20Bhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vindhu Restaurant Location in Kendriya Vihar Bhubaneswar"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
