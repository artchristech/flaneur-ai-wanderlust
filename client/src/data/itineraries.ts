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
    title: "Rocky Mountain Adventure",
    destination: "Denver & Mountains",
    duration: "Full Day",
    highlights: [
      "Red Rocks Amphitheatre sunrise hike",
      "Golden downtown historic tour",
      "Coors Brewery experience",
      "Lookout Mountain scenic drive",
      "Buffalo Bill Museum visit"
    ],
    imageUrl: parisImage,
    rating: 4.9,
    price: "$85"
  },
  {
    id: "2",
    title: "Denver Art & Culture",
    destination: "Downtown Denver",
    duration: "Half Day",
    highlights: [
      "Denver Art Museum guided tour",
      "RiNo street art walking tour",
      "Local craft brewery tastings",
      "Union Station architecture tour",
      "16th Street Mall exploration"
    ],
    imageUrl: tokyoImage,
    rating: 4.8,
    price: "$65"
  },
  {
    id: "3",
    title: "Garden of the Gods",
    destination: "Colorado Springs",
    duration: "Full Day",
    highlights: [
      "Garden of the Gods hiking trails",
      "Pikes Peak scenic railway",
      "Manitou Springs mineral waters",
      "Cave of the Winds underground tour",
      "Historic Broadmoor hotel visit"
    ],
    imageUrl: santoriniImage,
    rating: 4.7,
    price: "$120"
  },
  {
    id: "4",
    title: "Boulder & Flatirons",
    destination: "Boulder County",
    duration: "Full Day",
    highlights: [
      "Flatirons hiking adventure",
      "Pearl Street Mall shopping",
      "Boulder Creek path cycling",
      "Local farm-to-table lunch",
      "Chautauqua Park exploration"
    ],
    imageUrl: baliImage,
    rating: 4.6,
    price: "$95"
  },
  {
    id: "5",
    title: "Historic Mining Towns",
    destination: "Georgetown & Idaho Springs",
    duration: "Full Day",
    highlights: [
      "Georgetown Loop Railroad ride",
      "Victorian architecture tour",
      "Idaho Springs hot springs",
      "Historic mining museum",
      "Mountain scenic photography"
    ],
    imageUrl: parisImage,
    rating: 4.5,
    price: "$110"
  },
  {
    id: "6",
    title: "Denver Food Scene",
    destination: "Various Neighborhoods",
    duration: "Half Day",
    highlights: [
      "Capitol Hill food truck tour",
      "LoHi rooftop dining experience",
      "Five Points jazz history walk",
      "Local green chile tastings",
      "Craft distillery visits"
    ],
    imageUrl: tokyoImage,
    rating: 4.8,
    price: "$75"
  }
];