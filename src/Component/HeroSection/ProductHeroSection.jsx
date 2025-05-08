import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./ProductHeroSection.css";

const images = [
  "/herosliding/HeroSlide-2-removebg-preview.png",
  "/herosliding/HeroSlide-3-removebg-preview.png",
  "/herosliding/HeroSlide-4-removebg-preview.png",
  "/herosliding/HeroSlide-9-removebg-preview.png",
  "/herosliding/HeroSlide-8-removebg-preview.png",
  "/herosliding/HeroSlide-10-removebg-preview.jpg",
  "/herosliding/HeroSlide-7-removebg-preview.png",
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Scroll to top on component mount
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      // Fallback for older browsers
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    };
    
    const timeoutId = setTimeout(scrollToTop, 100);
    
    // Clean up the timeout to prevent memory leaks
    return () => clearTimeout(timeoutId);
  }, []);
  
  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    
    // Clean up the interval to prevent memory leaks
    return () => clearInterval(interval);
  }, [images.length]); // Add images.length as a dependency

  return (
    <div className="hero-slider">
      <motion.div
        className="slider-container"
        animate={{ translateX: `-${currentIndex * 100}%` }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {images.map((image, index) => (
          <div key={index} className="slider-item">
            <img src={image} alt={`Slide ${index + 1}`} className="slider-image" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}