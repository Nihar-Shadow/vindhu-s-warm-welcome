import { Star, Quote, ExternalLink } from "lucide-react";

const reviews = [
  {
    quote: "Ambiance and behaviour of the staffs are also good. Clean place with tasty food!",
    author: "Local Resident",
    rating: 5,
  },
  {
    quote: "The staff was polite and the place was clean. Food was served hot and fresh.",
    author: "Regular Guest",
    rating: 5,
  },
  {
    quote: "Best food at best price possible. The dosas are crispy and sambhar is authentic!",
    author: "Office Worker",
    rating: 5,
  },
  {
    quote: "Family-friendly atmosphere. Kids loved the idlis. Will definitely come back!",
    author: "Family Diner",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 bg-warm-gradient">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Customer Reviews
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Guests Say
          </h2>
          
          {/* Overall Rating */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-warm-gold text-warm-gold" />
              ))}
            </div>
            <span className="font-display text-2xl font-bold text-foreground">5.0</span>
            <span className="text-muted-foreground">from 22 Google Reviews</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-2xl shadow-soft hover:shadow-card transition-shadow animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-primary/20" />
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-warm-gold text-warm-gold" />
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-foreground/90 text-lg mb-4 leading-relaxed">
                "{review.quote}"
              </p>

              {/* Author */}
              <p className="text-muted-foreground font-medium">
                — {review.author}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Text */}
        <div className="text-center mt-12 animate-fade-in">
          <p className="text-foreground font-medium mb-4">
            ⭐ Rated 5.0 by real customers on Google Maps
          </p>
          <a
            href="https://www.google.com/maps/place/Vindhu+Fast+Friendly+South+Indian"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
          >
            <ExternalLink className="w-4 h-4" />
            See all reviews on Google →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
