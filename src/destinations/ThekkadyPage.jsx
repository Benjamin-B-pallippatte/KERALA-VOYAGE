import DestinationPage from "./DestinationPage";

const data = {
  bannerTitle: "Thekkady - Wildlife Paradise",
  bannerText:
    "Immerse yourself in the wild beauty of Periyar Tiger Reserve, home to diverse wildlife, spice plantations, and breathtaking landscapes.",
  serviceName: "Thekkady Wildlife",
  aboutTitle: "About Thekkady",
  aboutText:
    "Thekkady is located in the Idukki district of Kerala and is famous for the Periyar Tiger Reserve, one of the best wildlife sanctuaries in India. The area is also known for its spice plantations, cardamom, pepper, and tea estates that surround the wildlife reserve.",
  aboutImage: "/images/peppara_wildlife_sanctuary_1_4681.jpg",
  tripPlans: [
    {
      title: "1 Day - Wildlife Safari",
      description: "Explore the Periyar Tiger Reserve with boat safari and nature walks.",
      points: ["Morning: Boat safari on Periyar Lake", "Afternoon: Nature walk and spice plantation visit", "Evening: Cultural shows and local cuisine"],
    },
    {
      title: "2 Days - Wildlife & Culture",
      description: "Comprehensive experience with wildlife viewing and tribal village visits.",
      points: ["Day 1: Wildlife safari and bamboo rafting", "Day 2: Spice plantation tour and tribal village"],
    },
    {
      title: "3 Days - Complete Thekkady Experience",
      description: "Full exploration of Thekkady including nearby attractions and relaxation.",
      points: ["Day 1: Arrival and wildlife safari", "Day 2: Abraham's Spice Garden and cultural shows", "Day 3: Munnar day trip or relaxation"],
    },
  ],
  spots: [
    {
      title: "Periyar Tiger Reserve",
      description: "Home to tigers, elephants, bison, and over 260 species of birds.",
      direction: "Located in Thekkady town. Main entrance near boat jetty.",
      fee: "₹100 for Indians, ₹500 for foreigners",
    },
    {
      title: "Abraham's Spice Garden",
      description: "Beautiful spice plantation showcasing various spices and their uses.",
      direction: "2 km from Thekkady town center.",
      message: "Tour Fee: ₹200-300 per person",
    },
    {
      title: "Bamboo Rafting",
      description: "Experience the Periyar River on traditional bamboo rafts.",
      direction: "Available at Periyar Lake. Book through authorized operators.",
      message: "Cost: ₹150-250 per person",
    },
    {
      title: "Murikkady",
      description: "Small village known for its elephant training camp and cultural shows.",
      direction: "3 km from Thekkady towards Kumily.",
      message: "Shows: Kathakali, Kalaripayattu",
    },
    {
      title: "Cardamom Hills",
      description: "Scenic hills covered with cardamom and pepper plantations.",
      direction: "Various viewpoints around Thekkady.",
      bestTime: "October to May",
    },
    {
      title: "Pandikuzhi",
      description: "Beautiful viewpoint offering panoramic views of the Periyar Lake.",
      direction: "2 km from Thekkady. Accessible by jeep.",
      message: "Entry: Free",
    },
  ],
  galleryImages: [
    { src: "/images/house%20boat.jpg", alt: "Houseboat" },
    { src: "/images/munnar.jpg", alt: "Munnar Hills" },
    { src: "/images/peppara_wildlife_sanctuary_1_4681.jpg", alt: "Wildlife Sanctuary" },
    { src: "/images/water%20fall%20kerala.jpg", alt: "Kerala Waterfalls" },
    { src: "/images/alapuzha.webp", alt: "Alapuzha" },
    { src: "/images/kerala.jpg", alt: "Kerala Panorama" },
  ],
  budgetPackages: [
    {
      title: "Budget Package (₹7,000-11,000 per person)",
      items: [
        { label: "Accommodation:", value: "Budget resorts/lodges - ₹2,500-4,000/night" },
        { label: "Food:", value: "Resort meals + local food - ₹500-800/day" },
        { label: "Transportation:", value: "Local jeeps/taxis - ₹800-1,500" },
        { label: "Entry Fees:", value: "Wildlife reserve - ₹100-500" },
        { label: "Activities:", value: "Boat safari, spice tour - ₹600-1,000" },
      ],
    },
    {
      title: "Standard Package (₹14,000-22,000 per person)",
      items: [
        { label: "Accommodation:", value: "3-star resorts with lake view - ₹4,000-6,000/night" },
        { label: "Food:", value: "Multi-cuisine dining - ₹800-1,200/day" },
        { label: "Transportation:", value: "Private vehicle - ₹2,000-3,000" },
        { label: "Entry Fees:", value: "All permits included" },
        { label: "Activities:", value: "Guided safaris, cultural shows - ₹1,200-2,000" },
      ],
    },
    {
      title: "Luxury Package (₹28,000+ per person)",
      items: [
        { label: "Accommodation:", value: "Luxury resorts/spas - ₹8,000-12,000/night" },
        { label: "Food:", value: "Gourmet dining, private chef - ₹1,500-2,500/day" },
        { label: "Transportation:", value: "Luxury vehicle with guide - ₹3,500-5,000" },
        { label: "Entry Fees:", value: "VIP access, private boat" },
        { label: "Activities:", value: "Exclusive safaris, helicopter tours - ₹6,000+" },
      ],
    },
  ],
  foodItems: [
    { title: "Spice Infused Curries", description: "Traditional Kerala curries made with locally grown spices.", price: "₹150-250" },
    { title: "Tribal Cuisine", description: "Unique dishes from local tribal communities.", price: "₹200-350" },
    { title: "Fresh Honey", description: "Natural honey from forest areas around Thekkady.", price: "₹150-300 per bottle" },
    { title: "Cardamom Tea", description: "Freshly brewed tea with local cardamom.", price: "₹30-60 per cup" },
  ],
};

const ThekkadyPage = () => <DestinationPage {...data} />;

export default ThekkadyPage;
