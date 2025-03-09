import React, { useState, useEffect } from 'react';
import './TimerHeoSection.css'; // You'll need to create this CSS file

const FlipClock = () => {
    // State for time digits
    const [hourTens, setHourTens] = useState(0);
    const [hourOnes, setHourOnes] = useState(0);
    const [minuteTens, setMinuteTens] = useState(0);
    const [minuteOnes, setMinuteOnes] = useState(0);
    
    // State for animation
    const [flipHourTens, setFlipHourTens] = useState(false);
    const [flipHourOnes, setFlipHourOnes] = useState(false);
    const [flipMinuteTens, setFlipMinuteTens] = useState(false);
    const [flipMinuteOnes, setFlipMinuteOnes] = useState(false);
    
    // Previous values for comparison
    const [prevTime, setPrevTime] = useState({
      hourTens: -1,
      hourOnes: -1,
      minuteTens: -1,
      minuteOnes: -1
    });
    
    // Update clock time
    const updateClock = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      
      // Calculate digits
      const newHourTens = Math.floor(hours / 10);
      const newHourOnes = hours % 10;
      const newMinuteTens = Math.floor(minutes / 10);
      const newMinuteOnes = minutes % 10;
      
      // Check for changes and trigger animations
      if (newHourTens !== prevTime.hourTens) {
        setHourTens(newHourTens);
        setFlipHourTens(true);
      }
      
      if (newHourOnes !== prevTime.hourOnes) {
        setHourOnes(newHourOnes);
        setFlipHourOnes(true);
      }
      
      if (newMinuteTens !== prevTime.minuteTens) {
        setMinuteTens(newMinuteTens);
        setFlipMinuteTens(true);
      }
      
      if (newMinuteOnes !== prevTime.minuteOnes) {
        setMinuteOnes(newMinuteOnes);
        setFlipMinuteOnes(true);
      }
      
      // Update previous values
      setPrevTime({
        hourTens: newHourTens,
        hourOnes: newHourOnes,
        minuteTens: newMinuteTens,
        minuteOnes: newMinuteOnes
      });
    };
    
    // Reset flip animations after they complete
    useEffect(() => {
      if (flipHourTens) {
        const timer = setTimeout(() => setFlipHourTens(false), 500);
        return () => clearTimeout(timer);
      }
    }, [flipHourTens]);
    
    useEffect(() => {
      if (flipHourOnes) {
        const timer = setTimeout(() => setFlipHourOnes(false), 500);
        return () => clearTimeout(timer);
      }
    }, [flipHourOnes]);
    
    useEffect(() => {
      if (flipMinuteTens) {
        const timer = setTimeout(() => setFlipMinuteTens(false), 500);
        return () => clearTimeout(timer);
      }
    }, [flipMinuteTens]);
    
    useEffect(() => {
      if (flipMinuteOnes) {
        const timer = setTimeout(() => setFlipMinuteOnes(false), 500);
        return () => clearTimeout(timer);
      }
    }, [flipMinuteOnes]);
    
    // Initial load and minute-based updates
    useEffect(() => {
      // Initial update
      updateClock();
      
      // Update every minute
      const minuteInterval = setInterval(updateClock, 60000);
      
      // Align with minute changes
      const seconds = new Date().getSeconds();
      const initialTimeout = setTimeout(() => {
        updateClock();
      }, (60 - seconds) * 1000);
      
      return () => {
        clearInterval(minuteInterval);
        clearTimeout(initialTimeout);
      };
    }, []);
    
    // SingleDigit component to replace the FlipUnit
    const SingleDigit = ({ digit, flip, prevDigit }) => {
      return (
        <div className="digit-container">
          <div className="digit-display">
            <div className="digit">{digit}</div>
          </div>
          {flip && (
            <div className={`flip-card ${flip ? 'flipped' : ''}`}>
              <div className="flip-card-front">{prevDigit !== -1 ? prevDigit : digit}</div>
              <div className="flip-card-back">{digit}</div>
            </div>
          )}
        </div>
      );
    };
    
    return (
      <div className="flip-clock-wrapper">
        <div className="header-section">
            <br/>
            <br/>
            <br/>
            <br/>
            
          <h1 className="heading">Your One-Stop Shop for Quality Products</h1>
        </div>
        
        <div className="flip-clock-container">
          <SingleDigit 
            digit={hourTens} 
            flip={flipHourTens} 
            prevDigit={prevTime.hourTens} 
          />
          <SingleDigit 
            digit={hourOnes} 
            flip={flipHourOnes} 
            prevDigit={prevTime.hourOnes} 
          />
          
          <div className="dot-separator">:</div>
          
          <SingleDigit 
            digit={minuteTens} 
            flip={flipMinuteTens} 
            prevDigit={prevTime.minuteTens} 
          />
          <SingleDigit 
            digit={minuteOnes} 
            flip={flipMinuteOnes} 
            prevDigit={prevTime.minuteOnes} 
          />
        </div>
        
        <div className="unit-labels">
          <div className="unit-label">Hours</div>
          <div className="unit-label empty"></div>
          <div className="separator-space"></div>
          <div className="unit-label">Minutes</div>
          <div className="unit-label empty"></div>
        </div>
      </div>
    );
  };
  
  export default FlipClock;