import { Star, Phone, MapPin, UtensilsCrossed, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-food.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 bg-hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary" />
        <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-accent" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-primary" />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            {/* Rating Badge */}
            <div className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-soft mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-warm-gold text-warm-gold" />
                ))}
              </div>
              <span className="font-semibold text-foreground">5.0</span>
              <span className="text-muted-foreground text-sm">(22 Reviews)</span>
            </div>

            {/* Heading */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Delicious South Indian Food at the{" "}
              <span className="text-primary">Best Price</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Authentic home-style cooking in a clean, welcoming environment. 
              Join our family for a taste of tradition.
            </p>

            {/* Service Icons */}
            <div className="flex items-center justify-center lg:justify-start gap-6 mb-8">
              <div className="flex items-center gap-2 text-foreground/80">
                <div className="p-2 bg-accent/10 rounded-full">
                  <UtensilsCrossed className="w-5 h-5 text-accent" />
                </div>
                <span className="font-medium">Dine-in</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/80">
                <div className="p-2 bg-primary/10 rounded-full">
                  <ShoppingBag className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium">Takeaway</span>
              </div>
            </div>

            {/* Price Range */}
            <p className="text-muted-foreground mb-8">
              <span className="font-semibold text-accent">₹1–200</span> per person
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button
                size="lg"
                onClick={() => window.open("tel:08847829160")}
                className="w-full sm:w-auto"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open("https://maps.google.com/?q=Vindhu+Fast+Friendly+South+Indian+Bhubaneswar", "_blank")}
                className="w-full sm:w-auto"
              >
                <MapPin className="w-5 h-5" />
                Get Directions
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img
                src={heroImage}
                alt="Delicious South Indian food spread with dosa, idli, sambhar and chutney"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-4 -left-4 md:-left-8 bg-card p-4 rounded-xl shadow-card animate-float">
              <p className="font-display text-lg font-bold text-primary">Open Now</p>
              <p className="text-sm text-muted-foreground">Serving fresh & hot!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
