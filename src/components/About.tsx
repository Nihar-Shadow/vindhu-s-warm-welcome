import { Heart, Sparkles, Users, Leaf } from "lucide-react";
import interiorImage from "@/assets/interior.jpg";

const features = [
  {
    icon: Sparkles,
    title: "Clean Environment",
    description: "We take pride in maintaining a spotless and hygienic space for our guests.",
  },
  {
    icon: Heart,
    title: "Polite Staff",
    description: "Our friendly team welcomes you like family and ensures a pleasant experience.",
  },
  {
    icon: Users,
    title: "Family Friendly",
    description: "A warm, comfortable atmosphere perfect for families and friends.",
  },
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    description: "We use only the freshest ingredients to create authentic South Indian flavors.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-warm-gradient">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img
                src={interiorImage}
                alt="Clean and cozy restaurant interior"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full -z-10" />
          </div>

          {/* Content */}
          <div className="animate-fade-in-up">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              About Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              A Neighborhood Restaurant That Feels Like Home
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              At Vindhu, we believe that good food brings people together. Our small, 
              family-run restaurant has been serving the Bhubaneswar community with love, 
              serving authentic South Indian dishes made from traditional recipes passed 
              down through generations.
            </p>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              Whether you're grabbing a quick breakfast dosa or enjoying a leisurely 
              meal with family, we promise you'll always find a clean space, friendly 
              faces, and food that tastes like home cooking.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-soft hover:shadow-card transition-shadow"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
