import parisImage from "@/assets/paris-itinerary.jpg";
import tokyoImage from "@/assets/tokyo-itinerary.jpg";
import santoriniImage from "@/assets/santorini-itinerary.jpg";
import baliImage from "@/assets/bali-itinerary.jpg";

export interface Itinerary {
  id: string;
  title: string;
  destination: string;
  duration: string;
  highlights: string[];
  imageUrl: string;
  rating: number;
  price: string;
}

export const sampleItineraries: Itinerary[] = [
  {
    id: "1",
    title: "Romantic Paris Getaway",
    destination: "Paris, France",
    duration: "5 days",
    highlights: [
      "Evening Seine river cruise with dinner",
      "Private Louvre tour with art historian",
      "Sunset picnic at Sacré-Cœur",
      "Wine tasting in Montmartre",
      "Day trip to Versailles Palace"
    ],
    imageUrl: parisImage,
    rating: 4.9,
    price: "$2,850"
  },
  {
    id: "2",
    title: "Tokyo Cultural Immersion",
    destination: "Tokyo, Japan",
    duration: "7 days",
    highlights: [
      "Traditional tea ceremony experience",
      "Sushi making class with master chef",
      "Cherry blossom viewing in Ueno Park",
      "Visit to historic Senso-ji Temple",
      "Modern art tour in Harajuku"
    ],
    imageUrl: tokyoImage,
    rating: 4.8,
    price: "$3,200"
  },
  {
    id: "3",
    title: "Santorini Island Escape",
    destination: "Santorini, Greece",
    duration: "4 days",
    highlights: [
      "Sunset viewing from Oia village",
      "Private yacht tour around the caldera",
      "Wine tasting at cliff-side vineyard",
      "Cooking class with local family",
      "Volcanic hot springs experience"
    ],
    imageUrl: santoriniImage,
    rating: 4.7,
    price: "$1,950"
  },
  {
    id: "4",
    title: "Bali Wellness Retreat",
    destination: "Ubud, Bali",
    duration: "6 days",
    highlights: [
      "Daily yoga sessions in rice terraces",
      "Traditional Balinese massage therapy",
      "Meditation at ancient water temples",
      "Organic farm-to-table dining",
      "Sunrise trek up Mount Batur"
    ],
    imageUrl: baliImage,
    rating: 4.6,
    price: "$1,750"
  }
];