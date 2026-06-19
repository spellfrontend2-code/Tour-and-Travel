import pic1 from "@/assets/destinations/1.jfif";
type Deal = {
  id: number;
  name: string;
  currency: string;
  location: string;
  image: string;
  discountPercent: number;
  deadlineDate: string; // ISO date
  totalSeats: number;
  seatsBooked: number;
  originalPrice: number;
  description: string;
  features: string[];
};
const Deals: Deal[] = [
  {
    id: 1,
    name: "Everest Base Camp Adventure",
    currency:"$",
    location: "Solukhumbu, Nepal",
    image: pic1,
    discountPercent: 30,
    deadlineDate: "2026-06-22",
    totalSeats: 20,
    seatsBooked: 11,
    originalPrice: 1200,
    description:
      "A thrilling trek to Everest Base Camp with experienced guides and comfortable accommodations.",
    features: [
      "7 Nights Accommodation",
      "Professional Guide",
      "Airport Transfers",
      "Breakfast Included",
      "Trekking Permits",
    ],
  },
];
export default Deals;