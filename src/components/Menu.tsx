import { useRef, useState, useEffect } from "react";

const menuData = [
  {
    id: "idli",
    title: "Idli",
    emoji: "🫓",
    items: [
      { name: "Idli", price: "₹40" },
      { name: "Ghee Idli", price: "₹60" },
      { name: "Ghee Karam Idli", price: "₹65" },
      { name: "Tawa Idli", price: "₹80" },
    ],
  },
  {
    id: "vada",
    title: "Vada",
    emoji: "🍩",
    items: [
      { name: "Vada", price: "₹40" },
      { name: "Sambar Vada", price: "₹50" },
      { name: "Dahi Vada", price: "₹40" },
    ],
  },
  {
    id: "poori",
    title: "Poori",
    emoji: "🍞",
    items: [{ name: "Poori", price: "₹50" }],
  },
  {
    id: "upma",
    title: "Upma",
    emoji: "🍲",
    items: [{ name: "Upma", price: "₹40" }],
  },
  {
    id: "beverages",
    title: "Beverages",
    emoji: "☕",
    items: [
      { name: "Tea", price: "₹20" },
      { name: "Coffee", price: "₹30" },
    ],
  },
  {
    id: "dosa",
    title: "Dosa",
    emoji: "🥞",
    items: [
      { name: "Set Dosa", price: "₹50" },
      { name: "Plain Dosa", price: "₹35" },
      { name: "Masala Dosa", price: "₹50" },
      { name: "Onion Dosa", price: "₹50" },
      { name: "Onion Masala Dosa", price: "₹60" },
      { name: "Butter Dosa", price: "₹60" },
      { name: "Butter Masala Dosa", price: "₹70" },
      { name: "Cheese Dosa", price: "₹65" },
      { name: "Cheese Masala Dosa", price: "₹70" },
      { name: "Paneer Dosa", price: "₹80" },
      { name: "Ghee Karam Dosa", price: "₹70" },
      { name: "Ghee Karam Masala Dosa", price: "₹80" },
      { name: "Pizza Dosa", price: "₹120" },
      { name: "Egg Dosa", price: "₹60" },
    ],
  },
  {
    id: "combos",
    title: "Vindhu Combos",
    emoji: "🍱",
    items: [
      { name: "Veg Meal", price: "₹70" },
      { name: "Non-Veg Meal", price: "₹120" },
      { name: "Egg Meal", price: "₹100" },
      { name: "South Indian Special Veg", price: "₹150" },
      { name: "South Indian Special Non-Veg", price: "₹250" },
      { name: "Paratha Paneer Masala", price: "₹120" },
      { name: "Paratha Bhurji", price: "₹100" },
      { name: "Paratha Chicken Masala", price: "₹120" },
    ],
  },
  {
    id: "chinese",
    title: "Chinese",
    emoji: "🥡",
    items: [
      { name: "Chilly Paneer", price: "₹140" },
      { name: "Chilly Mushroom", price: "₹140" },
      { name: "Mushroom 65", price: "₹140" },
      { name: "Paneer 65", price: "₹140" },
      { name: "Gobi Manchurian", price: "₹100" },
      { name: "Chilly Chicken", price: "₹140" },
      { name: "Chicken 65", price: "₹140" },
    ],
  },
  {
    id: "rice-noodles",
    title: "Rice & Noodles",
    emoji: "🍜",
    items: [
      { name: "Veg Fried Rice", price: "₹60" },
      { name: "Paneer Fried Rice", price: "₹80" },
      { name: "Egg Chicken Fried Rice", price: "₹100" },
      { name: "Veg Noodles", price: "₹50" },
      { name: "Paneer Noodles", price: "₹80" },
      { name: "Egg Chicken Noodles", price: "₹90" },
      { name: "Special Noodles (Non-Veg)", price: "₹140" },
    ],
  },
  {
    id: "indian",
    title: "Indian",
    emoji: "🍛",
    items: [
      { name: "Dal Makhni", price: "₹100" },
      { name: "Paneer Masala", price: "₹120" },
      { name: "Paneer Butter Masala", price: "₹150" },
      { name: "Mushroom Masala", price: "₹120" },
      { name: "Mushroom Butter Masala", price: "₹150" },
      { name: "Chicken Masala", price: "₹120" },
      { name: "Chicken Butter Masala", price: "₹150" },
      { name: "Chicken Kassa", price: "₹150" },
      { name: "Chicken Hyderabadi", price: "₹150" },
      { name: "Mutton Masala", price: "₹250" },
      { name: "Mutton Kassa", price: "₹250" },
    ],
  },
  {
    id: "biryani",
    title: "Biryani",
    emoji: "🍗",
    items: [
      { name: "Veg Biryani", price: "₹200" },
      { name: "Chicken Biryani (Half / Full)", price: "₹120 / ₹220" },
      { name: "Mutton Biryani (Half / Full)", price: "₹250 / ₹450" },
      { name: "Vindhu Special Chicken Biryani", price: "₹250" },
      { name: "Vindhu Special Mutton Biryani", price: "₹300" },
    ],
  },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(menuData[0].id);
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const navRef = useRef<HTMLDivElement>(null);

  const scrollToCategory = (id: string) => {
    const element = sectionRefs.current[id];
    if (element) {
      const headerOffset = 160; // Account for fixed header + sticky nav
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const category of menuData) {
        const element = sectionRefs.current[category.id];
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveCategory(category.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="menu" className="py-16 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 animate-fade-in">
          <span className="inline-block px-4 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Our Menu
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Delicious Food, Honest Prices
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Fresh, authentic dishes made with love — all priced between ₹20 to ₹450
          </p>
        </div>

        {/* Sticky Category Navigation */}
        <div 
          ref={navRef}
          className="sticky top-16 md:top-20 z-40 bg-background/95 backdrop-blur-sm -mx-4 px-4 py-3 mb-8 border-b border-border shadow-sm"
        >
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
            {menuData.map((category) => (
              <button
                key={category.id}
                onClick={() => scrollToCategory(category.id)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-card text-foreground/70 hover:bg-primary/10 hover:text-primary"
                }`}
              >
                <span>{category.emoji}</span>
                <span>{category.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuData.map((category) => (
            <div
              key={category.id}
              id={`menu-${category.id}`}
              ref={(el) => (sectionRefs.current[category.id] = el)}
              className="bg-card rounded-2xl p-5 shadow-soft hover:shadow-card transition-shadow duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
                <span className="text-2xl">{category.emoji}</span>
                <h3 className="font-display text-lg font-bold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Items List */}
              <ul className="space-y-2.5">
                {category.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex justify-between items-start gap-3"
                  >
                    <span className="text-foreground/90 leading-snug">
                      {item.name}
                    </span>
                    <span className="text-primary font-semibold whitespace-nowrap">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <p className="text-center text-muted-foreground mt-10 text-sm">
          📞 Call us at <a href="tel:08847829160" className="text-primary font-medium hover:underline">088478 29160</a> for daily specials
        </p>
      </div>
    </section>
  );
};

export default Menu;
