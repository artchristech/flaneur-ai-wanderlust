import { Compass, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ItineraryCard } from "@/components/ItineraryCard";
import { sampleItineraries } from "@/data/itineraries";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Compass className="w-12 h-12 text-primary-glow" />
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Flaneur AI
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            Discover curated travel experiences that awaken your wanderlust.
            <br />
            Let AI craft your perfect journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-3">
              Explore Itineraries
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-white/30 text-white hover:bg-white/10">
              Plan Custom Trip
            </Button>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Compass className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold text-foreground">Flaneur AI</span>
            </div>
            
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                <Search className="w-4 h-4" />
                Search
              </Button>
              <Button variant="ghost" size="sm">
                <Filter className="w-4 h-4" />
                Filter
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Featured Itineraries */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Curated Travel Experiences
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Handpicked journeys designed by travel experts and local insiders. 
              Each itinerary tells a story waiting to be lived.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sampleItineraries.map((itinerary) => (
              <ItineraryCard key={itinerary.id} {...itinerary} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="travel" size="lg">
              View All Destinations
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12 px-4">
        <div className="container mx-auto max-w-7xl text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Compass className="w-6 h-6 text-primary" />
            <span className="text-lg font-semibold text-foreground">Flaneur AI</span>
          </div>
          <p className="text-muted-foreground">
            Crafting unforgettable journeys with artificial intelligence
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;