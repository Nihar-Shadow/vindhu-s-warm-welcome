import dosaImage from "@/assets/dosa.jpg";
import idliImage from "@/assets/idli.jpg";
import thaliImage from "@/assets/thali.jpg";

const menuCategories = [
  {
    title: "South Indian Classics",
    description: "Traditional favorites made fresh daily",
    image: dosaImage,
    items: ["Masala Dosa", "Plain Dosa", "Set Dosa", "Rava Dosa", "Podi Dosa", "Onion Dosa"],
    color: "primary",
  },
  {
    title: "Idli & Vada",
    description: "Soft, steamed goodness with chutneys",
    image: idliImage,
    items: ["Idli (2 pcs)", "Idli (4 pcs)", "Medu Vada", "Idli Vada Combo", "Sambar Vada", "Curd Vada"],
    color: "accent",
  },
  {
    title: "Meals & Thali",
    description: "Complete, satisfying meals",
    image: thaliImage,
    items: ["South Indian Thali", "Mini Meals", "Rice & Sambar", "Curd Rice", "Lemon Rice", "Bisi Bele Bath"],
    color: "primary",
  },
];

const chineseItems = ["Veg Noodles", "Fried Rice", "Manchurian", "Gobi Manchurian", "Chilli Paneer", "Spring Rolls"];

const Menu = () => {
  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Our Menu
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Authentic Flavors, Honest Prices
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From crispy dosas to comforting thalis, every dish is made with love. 
            All items priced between <span className="font-semibold text-primary">₹1–200</span>.
          </p>
        </div>

        {/* Menu Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {menuCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-display text-xl font-bold text-card">{category.title}</h3>
                  <p className="text-card/80 text-sm">{category.description}</p>
                </div>
              </div>

              {/* Items List */}
              <div className="p-6">
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-foreground/80">
                      <span className={`w-2 h-2 rounded-full ${category.color === "primary" ? "bg-primary" : "bg-accent"}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Chinese Section */}
        <div className="bg-card rounded-2xl p-8 shadow-soft animate-fade-in">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                Indo-Chinese Corner
              </h3>
              <p className="text-muted-foreground">
                Popular Chinese-style dishes with an Indian twist
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {chineseItems.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 bg-secondary rounded-full text-sm font-medium text-secondary-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Note */}
        <p className="text-center text-muted-foreground mt-8">
          📞 Call us for the complete menu and daily specials
        </p>
      </div>
    </section>
  );
};

export default Menu;
