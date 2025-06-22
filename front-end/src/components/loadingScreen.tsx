import React, { useState, useEffect } from "react";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  const loadingMessages = [
    "Preparing your cinematic experience...",
    "Loading movie database...",
    "Optimizing video quality...",
    "Setting up your profile...",
    "Almost ready to stream...",
  ];

  useEffect(() => {
    const updateProgress = () => {
      setProgress((prev) => {
        const increment = Math.random() * 3 + 1;
        const newProgress = Math.min(prev + increment, 100);

        // Change loading message based on progress
        const newMessageIndex = Math.floor(newProgress / 20);
        if (
          newMessageIndex !== messageIndex &&
          newMessageIndex < loadingMessages.length
        ) {
          setMessageIndex(newMessageIndex);
        }

        if (newProgress < 100) {
          setTimeout(updateProgress, 100 + Math.random() * 200);
        }

        return newProgress;
      });
    };

    const timeoutId = setTimeout(updateProgress, 500);
    return () => clearTimeout(timeoutId);
  }, [messageIndex]);

  // Create random particles
  useEffect(() => {
    const createRandomParticle = () => {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.position = "absolute";
      particle.style.background = "rgba(255, 255, 255, 0.1)";
      particle.style.borderRadius = "50%";
      particle.style.left = Math.random() * 100 + "%";
      particle.style.width = Math.random() * 4 + 3 + "px";
      particle.style.height = particle.style.width;
      particle.style.animationDelay = Math.random() * 2 + "s";
      particle.style.animationDuration = Math.random() * 4 + 4 + "s";

      const particlesContainer = document.querySelector(".particles");
      if (particlesContainer) {
        particlesContainer.appendChild(particle);

        setTimeout(() => {
          if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
          }
        }, 8000);
      }
    };

    const interval = setInterval(createRandomParticle, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          background:
            "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)",
          height: "100vh",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Animated background particles */}
        <div className="particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>

        {/* Cinematic scanlines */}
        <div className="scanlines"></div>

        {/* Main loading content */}
        <div style={{ textAlign: "center", zIndex: 10, position: "relative" }}>
          {/* Animated movie reel */}
          <div className="movie-reel">
            <div className="reel-outer">
              <div className="reel-holes">
                <div className="hole"></div>
                <div className="hole"></div>
                <div className="hole"></div>
                <div className="hole"></div>
                <div className="hole"></div>
                <div className="hole"></div>
                <div className="hole"></div>
                <div className="hole"></div>
              </div>
              <div className="reel-inner"></div>
            </div>
          </div>

          {/* Brand name */}
          <h1 className="brand-name">Joy Boy</h1>

          {/* Loading text */}
          <p className="loading-text">{loadingMessages[messageIndex]}</p>

          {/* Progress bar */}
          <div className="progress-container">
            <div
              className="progress-bar"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Loading percentage */}
          <div className="percentage">
            {progress >= 100 ? "Ready!" : `${Math.floor(progress)}%`}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingScreen;
