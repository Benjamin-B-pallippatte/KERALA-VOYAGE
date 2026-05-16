import DestinationPage from "./DestinationPage";

const data = {
  bannerTitle: "Kerala Waterfalls - Nature's Symphony",
  bannerText:
    "Discover the majestic waterfalls of Kerala, cascading through lush forests and rocky terrains, offering breathtaking views and refreshing experiences.",
  serviceName: "Kerala Waterfalls",
  aboutTitle: "About Kerala Waterfalls",
  aboutText:
    "Kerala is blessed with numerous waterfalls that cascade through the Western Ghats, creating spectacular natural wonders. From the mighty Athirappilly to the serene Meenmutty, these waterfalls offer adventure, photography opportunities, and peaceful retreats in nature's lap.",
  aboutImage: "/images/water%20fall%20kerala.jpg",
  tripPlans: [
    {
      title: "1 Day - Athirappilly Adventure",
      description: "Visit the most famous waterfall in Kerala with trekking and photography.",
      points: ["Morning: Travel to Athirappilly", "Afternoon: Waterfall viewing and light trek", "Evening: Return journey"],
    },
    {
      title: "2 Days - Multiple Waterfalls",
      description: "Explore Athirappilly, Vazhachal, and Charpa waterfalls in one trip.",
      points: ["Day 1: Athirappilly and Vazhachal", "Day 2: Charpa and nearby attractions"],
    },
    {
      title: "3 Days - Waterfall Circuit",
      description: "Comprehensive tour covering major waterfalls and forest experiences.",
      points: ["Day 1: Athirappilly and Chalakudy", "Day 2: Munnar waterfalls and viewpoints", "Day 3: Devikulam and return"],
    },
  ],
  spots: [
    {
      title: "Athirappilly Waterfall",
      description: "Kerala's largest waterfall, 80 feet high, surrounded by dense forest.",
      direction: "60 km from Kochi. Take Chalakudy-Athirappilly road.",
      fee: "₹50 for Indians",
    },
    {
      title: "Vazhachal Waterfall",
      description: "Beautiful waterfall near Athirappilly, accessible by short trek.",
      direction: "5 km from Athirappilly. Follow forest path.",
      bestTime: "June to September",
    },
    {
      title: "Charpa Waterfall",
      description: "Scenic waterfall in Munnar region with natural pool for swimming.",
      direction: "25 km from Munnar towards Devikulam.",
      activity: "Swimming, photography",
    },
    {
      title: "Meenmutty Waterfall",
      description: "Serene waterfall in Wayanad district, surrounded by coffee plantations.",
      direction: "30 km from Sulthan Bathery in Wayanad.",
      message: "Entry: Free",
    },
    {
      title: "Soochipara Waterfall",
      description: "Three-tiered waterfall in Wayanad, also known as Sentinel Rock Waterfall.",
      direction: "25 km from Meppadi in Wayanad.",
      message: "Trek: 2 km from parking area",
    },
    {
      title: "Thusharagiri Waterfall",
      description: "Three waterfalls in Kozhikode district, popular for its misty surroundings.",
      direction: "55 km from Kozhikode city.",
      fee: "₹50 for Indians",
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
      title: "Budget Package (₹5,000-8,000 per person)",
      items: [
        { label: "Accommodation:", value: "Budget homestays/lodges - ₹1,500-2,500/night" },
        { label: "Food:", value: "Local restaurants, packed meals - ₹400-600/day" },
        { label: "Transportation:", value: "Shared taxis/buses - ₹800-1,200" },
        { label: "Entry Fees:", value: "Waterfalls and parks - ₹100-300" },
        { label: "Activities:", value: "Light trekking, photography - ₹200-500" },
      ],
    },
    {
      title: "Standard Package (₹10,000-16,000 per person)",
      items: [
        { label: "Accommodation:", value: "Resorts near waterfalls - ₹3,000-5,000/night" },
        { label: "Food:", value: "Resort dining + local cuisine - ₹600-900/day" },
        { label: "Transportation:", value: "Private vehicle - ₹1,500-2,500" },
        { label: "Entry Fees:", value: "All attractions included" },
        { label: "Activities:", value: "Guided treks, boat rides - ₹800-1,500" },
      ],
    },
    {
      title: "Luxury Package (₹20,000+ per person)",
      items: [
        { label: "Accommodation:", value: "Luxury resorts/spas - ₹6,000-10,000/night" },
        { label: "Food:", value: "Gourmet meals, private dining - ₹1,000-1,800/day" },
        { label: "Transportation:", value: "Luxury vehicle with guide - ₹2,500-4,000" },
        { label: "Entry Fees:", value: "VIP access, private tours" },
        { label: "Activities:", value: "Helicopter tours, exclusive experiences - ₹4,000+" },
      ],
    },
  ],
  foodItems: [
    { title: "Malabar Biryani", description: "Spiced rice dish popular in the Malabar region near waterfalls.", price: "₹150-250" },
    { title: "Forest Honey", description: "Natural honey collected from forests around the waterfalls.", price: "₹200-400 per bottle" },
    { title: "Fresh Coconut Water", description: "Natural refreshment available near all waterfall areas.", price: "₹30-50 per coconut" },
    { title: "Spice Infused Meals", description: "Traditional Kerala meals with locally grown spices.", price: "₹120-200" },
  ],
};

const WaterfallsPage = () => <DestinationPage {...data} />;

export default WaterfallsPage;
