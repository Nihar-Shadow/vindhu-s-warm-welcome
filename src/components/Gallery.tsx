import heroImage from "@/assets/hero-food.jpg";
import dosaImage from "@/assets/dosa.jpg";
import idliImage from "@/assets/idli.jpg";
import thaliImage from "@/assets/thali.jpg";
import interiorImage from "@/assets/interior.jpg";

const galleryImages = [
  { src: heroImage, alt: "South Indian food spread with dosa and idli", span: "col-span-2 row-span-2" },
  { src: dosaImage, alt: "Crispy masala dosa with chutneys", span: "" },
  { src: idliImage, alt: "Soft idlis with sambhar", span: "" },
  { src: thaliImage, alt: "Complete South Indian thali meal", span: "" },
  { src: interiorImage, alt: "Clean restaurant interior", span: "" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Gallery
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            A Glimpse of Vindhu
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Fresh food, clean spaces, and warm hospitality await you
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative rounded-xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 group ${image.span} animate-scale-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
