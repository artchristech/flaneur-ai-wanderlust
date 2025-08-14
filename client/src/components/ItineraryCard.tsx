import { Clock, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ItineraryCardProps {
  id: string;
  title: string;
  destination: string;
  duration: string;
  highlights: string[];
  imageUrl: string;
  rating: number;
  price: string;
}

export function ItineraryCard({
  title,
  destination,
  duration,
  highlights,
  imageUrl,
  rating,
  price,
}: ItineraryCardProps) {
  return (
    <article className="group relative bg-card rounded-lg shadow-card hover:shadow-card-hover transition-smooth overflow-hidden border border-border h-full flex flex-col">
      <div className="relative aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/3] overflow-hidden">
        <img
          src={imageUrl}
          alt={`${destination} day trip experience`}
          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
        />
        <div className="absolute top-3 right-3">
          <div className="bg-card/80 backdrop-blur-sm rounded-full px-2 py-1 sm:px-3 sm:py-1 flex items-center gap-1">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-primary text-primary" />
            <span className="text-xs sm:text-sm font-medium text-card-foreground">{rating}</span>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 sm:p-4">
          <div className="text-white font-bold text-base sm:text-lg leading-tight">{title}</div>
        </div>
      </div>
      
      <div className="p-4 sm:p-6 flex-1 flex flex-col">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4">
          <div className="flex items-center gap-1">
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <span className="truncate">{destination}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <span>{duration}</span>
          </div>
        </div>
        
        <div className="mb-4 flex-1">
          <h3 className="font-semibold text-card-foreground mb-2 text-sm sm:text-base">Trip Highlights</h3>
          <ul className="space-y-1">
            {highlights.slice(0, 3).map((highlight, index) => (
              <li key={index} className="text-xs sm:text-sm text-muted-foreground flex items-start gap-2 leading-relaxed">
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-primary mt-1.5 sm:mt-2 flex-shrink-0" />
                <span className="line-clamp-2">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-border mt-auto">
          <div className="text-card-foreground">
            <span className="text-xs sm:text-sm text-muted-foreground">From </span>
            <span className="font-bold text-base sm:text-lg">{price}</span>
            <span className="text-xs text-muted-foreground block sm:inline sm:ml-1">/person</span>
          </div>
          <Button variant="travel" size="sm" className="text-xs sm:text-sm px-3 sm:px-4 py-2">
            Book Trip
          </Button>
        </div>
      </div>
    </article>
  );
}