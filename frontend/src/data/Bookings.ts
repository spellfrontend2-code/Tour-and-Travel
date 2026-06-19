import pic1 from "@/assets/destinations/1.jfif";
import pic2 from "@/assets/destinations/2.jfif"
import pic3 from "@/assets/destinations/3.jfif"
const Bookings = [
  {
    bookingId: "BK-1001",
    tourId: 1,
    tourName: "Everest Base Camp Trek",
    location: "Solukhumbu, Nepal",
    image: pic1,

    package: {
      id: 2,
      name: "Standard Plus",
      pricePerPax: 1599,
    },

    travellerName: "John Doe",
    departureDate: "2026-10-12",
    numberOfTraveller: 2,

    currency: "$",
    totalAmount: 3198,

    status: "Upcoming",
    paymentStatus: "Paid",

    bookedAt: "2026-06-19",
  },

  {
    bookingId: "BK-1002",
    tourId: 1,
    tourName: "Everest Base Camp Trek",
    location: "Solukhumbu, Nepal",
    image:pic3,

    package: {
      id: 1,
      name: "Standard",
      pricePerPax: 1299,
    },

    travellerName: "Sarah Sharma",
    departureDate: "2026-09-05",
    numberOfTraveller: 1,

    currency: "$",
    totalAmount: 1299,

    status: "Completed",
    paymentStatus: "Paid",

    bookedAt: "2026-05-10",
  },

  {
    bookingId: "BK-1003",
    tourId: 1,
    tourName: "Everest Base Camp Trek",
    location: "Solukhumbu, Nepal",
    image: pic2,

    package: {
      id: 3,
      name: "Deluxe",
      pricePerPax: 2199,
    },

    travellerName: "Aman Rai",
    departureDate: "2026-11-20",
    numberOfTraveller: 3,

    currency: "$",
    totalAmount: 6597,

    status: "Upcoming",
    paymentStatus: "Pending",

    bookedAt: "2026-06-18",
  },
];

export default Bookings;