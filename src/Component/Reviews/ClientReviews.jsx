import { useState, useEffect, useRef } from 'react';
import './ClientReviews.css';

// Sample testimonial data - replace with your actual data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    product: "Premium Yoga Mat",
    instagramLink: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE3OTcxNTA2MzI2NzIyNTEw?story_media_id=3587519483763832942_72612219939&igsh=d2hvdndqaGtjdmM2",
    instagramHandle: "sarah_yogi",
    image: "/api/placeholder/80/80",
    rating: 5,
    text: "This yoga mat completely transformed my practice. The grip is exceptional even during hot yoga sessions!"
  },
  {
    id: 2,
    name: "Michael Chen",
    product: "Fitness Tracker Pro",
    instagramLink: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE3OTcxNTA2MzI2NzIyNTEw?story_media_id=3587519483763832942_72612219939&igsh=d2hvdndqaGtjdmM2",
    instagramHandle: "mike_fitness",
    image: "/api/placeholder/80/80",
    rating: 4,
    text: "The Fitness Tracker Pro has been my daily companion for months now. Battery life is impressive and the sleep tracking is spot on."
  },
  {
    id: 3,
    name: "Jessica Williams",
    product: "Nutrition Meal Plan",
    instagramLink: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE3OTcxNTA2MzI2NzIyNTEw?story_media_id=3587519483763832942_72612219939&igsh=d2hvdndqaGtjdmM2",
    instagramHandle: "jess_eats_clean",
    image: "/api/placeholder/80/80",
    rating: 5,
    text: "The meal plan was exactly what I needed to get back on track with my health goals. The recipes are delicious and easy to follow."
  },
  {
    id: 4,
    name: "David Rodriguez",
    product: "Resistance Bands Set",
    instagramLink: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE3OTcxNTA2MzI2NzIyNTEw?story_media_id=3587519483763832942_72612219939&igsh=d2hvdndqaGtjdmM2",
    instagramHandle: "david_strong",
    image: "/api/placeholder/80/80",
    rating: 5,
    text: "These bands are perfect for my home workouts. Great quality and the different resistance levels help me progress gradually."
  },
  {
    id: 5,
    name: "Emma Thompson",
    product: "Meditation Course",
    instagramLink: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE3OTcxNTA2MzI2NzIyNTEw?story_media_id=3587519483763832942_72612219939&igsh=d2hvdndqaGtjdmM2",
    instagramHandle: "emma_mindful",
    image: "/api/placeholder/80/80",
    rating: 4,
    text: "The meditation course helped me develop a consistent practice. I'm now much more mindful throughout my day."
  }
];

export default function ClientReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const carouselRef = useRef(null);
  
  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoScrolling) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(interval);
  }, [isAutoScrolling]);
  
  // Navigation handlers
  const goToPrevious = () => {
    setIsAutoScrolling(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const goToNext = () => {
    setIsAutoScrolling(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Display stars based on rating
  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <span 
        key={index} 
        className={`star ${index < rating ? 'filled' : ''}`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="testimonial-container">
      <h2 className="testimonial-heading">What Our Customers Say</h2>
      
      <div className="carousel-wrapper">
        {/* Carousel container */}
        <div ref={carouselRef} className="carousel-container">
          <div 
            className="carousel-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-slide">
                <div className="testimonial-card">
                  <img 
                    src={testimonial.image} 
                    alt={`${testimonial.name}`} 
                    className="client-image"
                  />
                  
                  <div className="rating">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  
                  <div className="client-info">
                    <h3 className="client-name">{testimonial.name}</h3>
                    <p className="product-purchased">Purchased: {testimonial.product}</p>
                    <a 
                      href={testimonial.instagramLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="instagram-link"
                    >
                      @{testimonial.instagramHandle}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation buttons */}
        <button 
          onClick={goToPrevious}
          className="nav-button prev-button"
          aria-label="Previous testimonial"
        >
          &lt;
        </button>
        
        <button 
          onClick={goToNext}
          className="nav-button next-button"
          aria-label="Next testimonial"
        >
          &gt;
        </button>
        
        {/* Indicators */}
        <div className="carousel-indicators">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoScrolling(false);
                setCurrentIndex(index);
              }}
              className={`indicator ${currentIndex === index ? 'active' : ''}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}