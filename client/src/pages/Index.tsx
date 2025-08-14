import { Compass, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ItineraryCard } from "@/components/ItineraryCard";
import { sampleItineraries } from "@/data/itineraries";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
            <Compass className="w-10 h-10 sm:w-12 sm:h-12 text-primary-glow" />
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Denver Day Trips
            </h1>
          </div>
          
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-white/90 leading-relaxed max-w-3xl mx-auto">
            Discover the best day adventures in and around Denver.
            <br className="hidden sm:block" />
            From mountain peaks to historic towns, explore Colorado's gems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto sm:max-w-none">
            <Button variant="hero" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-3 w-full sm:w-auto">
              Explore Day Trips
            </Button>
            <Button variant="outline" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-3 border-white/30 text-white hover:bg-white/10 w-full sm:w-auto">
              Plan Custom Adventure
            </Button>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Compass className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              <span className="text-lg sm:text-xl font-bold text-foreground">Denver Day Trips</span>
            </div>
            
            <div className="flex items-center gap-2 sm:gap-4">
              <Button variant="ghost" size="sm" className="px-2 sm:px-3">
                <Search className="w-4 h-4" />
                <span className="hidden sm:inline ml-2">Search</span>
              </Button>
              <Button variant="ghost" size="sm" className="px-2 sm:px-3">
                <Filter className="w-4 h-4" />
                <span className="hidden sm:inline ml-2">Filter</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Featured Day Trips */}
      <section className="py-12 sm:py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Denver Day Trip Adventures
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Expertly crafted day trips showcasing Colorado's natural beauty and local culture. 
              Perfect adventures within reach of the Mile High City.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {sampleItineraries.map((itinerary) => (
              <ItineraryCard key={itinerary.id} {...itinerary} />
            ))}
          </div>
          
          <div className="text-center mt-8 sm:mt-12">
            <Button variant="travel" size="lg" className="w-full sm:w-auto">
              View All Day Trips
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-8 sm:py-12 px-4">
        <div className="container mx-auto max-w-7xl text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Compass className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            <span className="text-base sm:text-lg font-semibold text-foreground">Denver Day Trips</span>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground px-4">
            Discover Colorado's best day adventures from the Mile High City
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;