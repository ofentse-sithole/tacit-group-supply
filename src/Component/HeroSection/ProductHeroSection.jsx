import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ProductHeroSection.css";

const images = [
  "/herosliding/HeroSlide-2-removebg-preview.png",
  "/herosliding/HeroSlide-3-removebg-preview.png",
  "/herosliding/HeroSlide-4-removebg-preview.png",
  "/herosliding/HeroSlide-5-removebg-preview.png",
  "/herosliding/HeroSlide-6-removebg-preview.png",
  "/herosliding/HeroSlide-7-removebg-preview.png",
];

export default function HeroSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
      return () => clearInterval(interval);
    }, []);
  
    return (
        
      <div className="hero-slider">
        
        <motion.div
          className="slider-container"
          animate={{ translateX: `-${currentIndex * 100}%` }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
            <br/>
        <br/>
        <br/>
          {images.map((image, index) => (
            <div key={index} className="slider-item">
              <img src={image} alt={`Slide ${index + 1}`} className="slider-image" />
            </div>
          ))}
        </motion.div>
      </div>
    );
  }