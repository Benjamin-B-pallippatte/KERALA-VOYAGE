import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ServicesPage from "./ServicesPage";
import BlogPage from "./BlogPage";
import ContactPage from "./ContactPage";
import AIRecommendationsPage from "./AIRecommendationsPage";
import MunnarPage from "./destinations/MunnarPage";
import AlleppeyPage from "./destinations/AlleppeyPage";
import ThekkadyPage from "./destinations/ThekkadyPage";
import WaterfallsPage from "./destinations/WaterfallsPage";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/gallery" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/ai-recommendations" element={<AIRecommendationsPage />} />
        <Route path="/destinations/munnar" element={<MunnarPage />} />
        <Route path="/destinations/alleppey" element={<AlleppeyPage />} />
        <Route path="/destinations/thekkady" element={<ThekkadyPage />} />
        <Route path="/destinations/waterfalls" element={<WaterfallsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
