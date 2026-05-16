import DestinationPage from "./DestinationPage";

const data = {
  bannerTitle: "Munnar - The Misty Hills",
  bannerText:
    "Discover the breathtaking beauty of Munnar, Kerala's most popular hill station, famous for its sprawling tea plantations, misty mountains, and serene landscapes.",
  serviceName: "Munnar Hills",
  aboutTitle: "About Munnar",
  aboutText:
    "Munnar is a hill station and former resort town in the Western Ghats mountain range in India. It is located at an altitude of 1,600 meters above sea level and is known for its tea estates, cool climate, and scenic beauty. The town is situated in the Idukki district of Kerala.",
  aboutImage: "/images/munnar.jpg",
  tripPlans: [
    {
      title: "2 Days - Tea Estate Tour",
      description: "Explore the famous tea plantations, visit Eravikulam National Park, and enjoy the misty hills.",
      points: ["Day 1: Tea Museum & Lockhart Gap", "Day 2: Eravikulam National Park & Echo Point"],
    },
    {
      title: "3 Days - Complete Munnar Experience",
      description: "A comprehensive tour covering all major attractions and hidden gems of Munnar.",
      points: ["Day 1: Tea Estates & Mattupetty Dam", "Day 2: Wildlife & viewpoints", "Day 3: Local villages & spice gardens"],
    },
    {
      title: "4 Days - Luxury Retreat",
      description: "Relax in luxury resorts with personalized experiences and exclusive access to private estates.",
      points: ["Day 1: Arrival & Tea Estate Walk", "Day 2: Wildlife Safari & Spa", "Day 3: Photography Tour & Local Cuisine", "Day 4: Departure"],
    },
  ],
  spots: [
    {
      title: "Eravikulam National Park",
      description: "Home to the endangered Nilgiri Tahr. Best time to visit: October to May.",
      direction: "15 km from Munnar town. Take the road towards Devikulam.",
      fee: "₹150 for Indians, ₹300 for foreigners",
    },
    {
      title: "Lockhart Gap",
      description: "Scenic viewpoint offering panoramic views of the Western Ghats and tea plantations.",
      direction: "12 km from Munnar. Follow the road to Top Station.",
      bestTime: "Early morning for sunrise views",
    },
    {
      title: "Mattupetty Dam & Echo Point",
      description: "Beautiful dam with boating facilities and the famous echo point.",
      direction: "13 km from Munnar towards Devikulam.",
      activity: "Boating: ₹50-100 per person",
    },
    {
      title: "Tea Museum",
      description: "Learn about the history of tea cultivation in Kerala.",
      direction: "Located in Munnar town, near the main bus stand.",
      fee: "₹50 for Indians",
    },
    {
      title: "Top Station",
      description: "Highest point in Munnar with stunning valley views.",
      direction: "32 km from Munnar. Take the winding road through forests.",
      bestTime: "November to May",
    },
    {
      title: "Chinnar Wildlife Sanctuary",
      description: "Diverse wildlife including elephants, tigers, and various bird species.",
      direction: "60 km from Munnar. Accessible by road.",
      fee: "₹100 for Indians",
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
      title: "Budget Package (₹8,000-12,000 per person)",
      items: [
        { label: "Accommodation:", value: "Budget resorts/guesthouses - ₹2,000-3,000/night" },
        { label: "Food:", value: "Local restaurants - ₹500-800/day (vegetarian meals)" },
        { label: "Transportation:", value: "Local taxis/shared jeeps - ₹1,000-2,000" },
        { label: "Entry Fees:", value: "Parks & museums - ₹500-1,000" },
        { label: "Activities:", value: "Boating, trekking - ₹500-1,000" },
      ],
    },
    {
      title: "Standard Package (₹15,000-25,000 per person)",
      items: [
        { label: "Accommodation:", value: "3-star resorts - ₹4,000-6,000/night" },
        { label: "Food:", value: "Resort dining + local cuisine - ₹800-1,200/day" },
        { label: "Transportation:", value: "Private vehicle - ₹2,000-3,000" },
        { label: "Entry Fees:", value: "All attractions included" },
        { label: "Activities:", value: "Guided tours, photography - ₹1,000-2,000" },
      ],
    },
    {
      title: "Luxury Package (₹30,000+ per person)",
      items: [
        { label: "Accommodation:", value: "4-5 star resorts - ₹8,000-15,000/night" },
        { label: "Food:", value: "Multi-cuisine dining, fine dining - ₹1,500-2,500/day" },
        { label: "Transportation:", value: "Luxury vehicle with driver - ₹4,000-6,000" },
        { label: "Activities:", value: "Helicopter rides, exclusive experiences - ₹5,000+" },
      ],
    },
  ],
  foodItems: [
    { title: "Appam with Stew", description: "Traditional Kerala breakfast - fermented rice pancakes with vegetable stew.", price: "₹100-150" },
    { title: "Malabar Biryani", description: "Spiced rice dish with meat/chicken, popular in Munnar region.", price: "₹150-250" },
    { title: "Tea Estate Fresh Tea", description: "Freshly brewed tea from local plantations.", price: "₹20-50 per cup" },
    { title: "Honey from Wild Bees", description: "Natural honey collected from forest areas.", price: "₹200-300 per bottle" },
  ],
};

const MunnarPage = () => <DestinationPage {...data} />;

export default MunnarPage;
