import DestinationPage from "./DestinationPage";

const data = {
  bannerTitle: "Alleppey - Venice of the East",
  bannerText:
    "Experience the serene beauty of Kerala's backwaters on traditional houseboats, surrounded by lush greenery and tranquil waterways.",
  serviceName: "Alleppey Backwaters",
  aboutTitle: "About Alleppey",
  aboutText:
    "Alleppey, also known as Alappuzha, is famous for its backwater tourism and houseboat cruises. The town is built on a peninsula between the Arabian Sea and a large lagoon, making it a perfect gateway to explore Kerala's intricate network of canals and lagoons.",
  aboutImage: "/images/house%20boat.jpg",
  tripPlans: [
    {
      title: "1 Day - Houseboat Cruise",
      description: "A relaxing day cruise through the backwaters with traditional Kerala lunch.",
      points: ["Morning: Pick up from Alleppey", "Day: Cruise through canals and lagoons", "Evening: Return to Alleppey"],
    },
    {
      title: "2 Days - Backwater Experience",
      description: "Overnight stay on houseboat with village visits and cultural experiences.",
      points: ["Day 1: Houseboat cruise & village walk", "Day 2: Morning cruise & cultural programs"],
    },
    {
      title: "3 Days - Complete Alleppey Tour",
      description: "Comprehensive tour including houseboats, beaches, and nearby attractions.",
      points: ["Day 1: Houseboat stay", "Day 2: Marari Beach & local sights", "Day 3: Pathiramanal Island & departure"],
    },
  ],
  spots: [
    {
      title: "Pathiramanal Island",
      description: "A serene island in the backwaters, known for its biodiversity and migratory birds.",
      direction: "20 km from Alleppey. Accessible by boat from Muhamma.",
      fee: "₹50 for Indians, ₹200 for foreigners",
    },
    {
      title: "Marari Beach",
      description: "Beautiful beach with Chinese fishing nets and peaceful atmosphere.",
      direction: "12 km north of Alleppey. Well-connected by road.",
      activity: "Beach walking, fishing net viewing",
    },
    {
      title: "Alleppey Beach",
      description: "Main beach of Alleppey with Chinese fishing nets and promenade.",
      direction: "Located in the heart of Alleppey town.",
      bestTime: "Evening for sunset views",
    },
    {
      title: "Kuttanad",
      description: "The rice bowl of Kerala, famous for its below-sea-level farming.",
      direction: "15 km from Alleppey. Accessible by boat or road.",
      message: "Highlights: Backwater farming, village life.",
    },
    {
      title: "Ambalapuzha Temple",
      description: "Famous for its palpayasam (sweet rice porridge) and temple architecture.",
      direction: "15 km south of Alleppey.",
      message: "Festival: Meenamrithu Arattu (March/April).",
    },
    {
      title: "Krishnapuram Palace",
      description: "Dutch bungalow with beautiful murals and architecture.",
      direction: "12 km from Alleppey towards Kayamkulam.",
      fee: "₹10 for Indians",
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
      title: "Budget Package (₹6,000-10,000 per person)",
      items: [
        { label: "Houseboat:", value: "Basic houseboat (2-4 people) - ₹3,000-5,000/night" },
        { label: "Food:", value: "Traditional Kerala meals on boat - ₹400-600/day" },
        { label: "Transportation:", value: "Local transport - ₹500-1,000" },
        { label: "Activities:", value: "Village visits, fishing - ₹300-500" },
      ],
    },
    {
      title: "Standard Package (₹12,000-18,000 per person)",
      items: [
        { label: "Houseboat:", value: "Deluxe houseboat with AC - ₹6,000-8,000/night" },
        { label: "Food:", value: "Multi-cuisine meals + local specialties - ₹600-900/day" },
        { label: "Transportation:", value: "Private vehicle - ₹1,500-2,500" },
        { label: "Activities:", value: "Guided tours, cultural shows - ₹800-1,200" },
      ],
    },
    {
      title: "Luxury Package (₹25,000+ per person)",
      items: [
        { label: "Houseboat:", value: "Premium houseboat with private chef - ₹10,000-15,000/night" },
        { label: "Food:", value: "Gourmet dining, fine wines - ₹1,200-2,000/day" },
        { label: "Transportation:", value: "Luxury vehicle with guide - ₹3,000-5,000" },
        { label: "Activities:", value: "Private yacht, helicopter transfer - ₹5,000+" },
      ],
    },
  ],
  foodItems: [
    { title: "Karimeen Pollichathu", description: "Fresh pearl spot fish cooked in banana leaf with spices.", price: "₹250-400" },
    { title: "Appam with Fish Curry", description: "Fermented rice pancakes served with spicy fish curry.", price: "₹150-250" },
    { title: "Prawns Roast", description: "Spicy roasted prawns, a coastal delicacy.", price: "₹200-350" },
    { title: "Palpayasam", description: "Sweet rice porridge from Ambalapuzha Temple.", price: "₹50-100 per serving" },
  ],
};

const AlleppeyPage = () => <DestinationPage {...data} />;

export default AlleppeyPage;
