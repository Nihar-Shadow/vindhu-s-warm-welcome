import { Heart, Sparkles, Users, Leaf, Clock, IndianRupee } from "lucide-react";
import interiorImage from "@/assets/interior.jpg";

const whyLocalsChoose = [
  {
    icon: Sparkles,
    title: "Clean Kitchen",
    description: "We keep our kitchen spotless. Come see for yourself.",
  },
  {
    icon: Heart,
    title: "Polite Staff",
    description: "Our team treats every guest like family.",
  },
  {
    icon: IndianRupee,
    title: "₹35–200 Meals",
    description: "Good food doesn't have to be expensive.",
  },
  {
    icon: Clock,
    title: "Quick Service",
    description: "Hot food served fast. No long waits.",
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
                alt="Clean interior of Vindhu restaurant in Kendriya Vihar Bhubaneswar"
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
              Why Locals Choose Vindhu
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              We're not fancy. We're just a small restaurant in Kendriya Vihar that 
              serves honest South Indian food at honest prices. Families, students, 
              office workers — everyone's welcome here.
            </p>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              Our regulars come for the crispy dosas, stay for the homestyle meals, 
              and keep coming back because the food tastes like it's made at home. 
              No shortcuts, no compromise.
            </p>

            {/* Why Locals Choose Us Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {whyLocalsChoose.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-3 p-4 bg-card rounded-xl shadow-soft hover:shadow-card transition-shadow"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-2.5 bg-primary/10 rounded-lg flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-0.5">{feature.title}</h3>
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
