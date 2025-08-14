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
    <article className="group relative bg-gradient-card rounded-xl shadow-card hover:shadow-card-hover transition-smooth overflow-hidden border border-border">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={imageUrl}
          alt={`${destination} travel experience`}
          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
        />
        <div className="absolute top-4 right-4">
          <div className="bg-card/80 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
            <Star className="w-4 h-4 fill-primary text-primary" />
            <span className="text-sm font-medium text-card-foreground">{rating}</span>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
          <div className="text-white font-bold text-lg">{title}</div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-4 text-muted-foreground text-sm mb-4">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>{destination}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
        </div>
        
        <div className="mb-4">
          <h3 className="font-semibold text-card-foreground mb-2">Highlights</h3>
          <ul className="space-y-1">
            {highlights.slice(0, 3).map((highlight, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="text-card-foreground">
            <span className="text-sm text-muted-foreground">From </span>
            <span className="font-bold text-lg">{price}</span>
          </div>
          <Button variant="travel" size="sm">
            View Details
          </Button>
        </div>
      </div>
    </article>
  );
}