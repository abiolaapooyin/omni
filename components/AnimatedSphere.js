import React, { memo, useEffect, useState } from 'react';
import theme from '../styles/theme';

const AnimatedSphere = ({ 
  size = '15vmin', 
  color = theme.colors.primary.orange, 
  speed = theme.animations.duration.sphere,
  rotationSpeed = theme.animations.duration.rotation,
  rings = 21,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  
  // Check for reduced motion preference
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setIsReducedMotion(mediaQuery.matches);
      
      const handleChange = (e) => setIsReducedMotion(e.matches);
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);
  
  // Intersection Observer for performance optimization
  useEffect(() => {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        ([entry]) => setIsVisible(entry.isIntersecting),
        { threshold: 0.1 }
      );
      
      const element = document.querySelector('.sphere');
      if (element) observer.observe(element);
      
      return () => {
        if (element) observer.unobserve(element);
      };
    } else {
      setIsVisible(true);
    }
  }, []);
  return (
    <>
      <div className="sphere">
        {Array.from({ length: 21 }, (_, i) => (
          <div key={i}></div>
        ))}
      </div>
      
      <style jsx>{`
        .sphere {
          --s: ${speed};
          --d: 40;
          --c: ${color};
          width: ${size};
          height: ${size};
          background: transparent;
          position: relative;
          animation: spin 5s linear 0s infinite;
          animation-play-state: running;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transform-style: preserve-3d;
          will-change: transform;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .sphere {
            animation: none;
          }
        }
        
        .sphere:hover {
          animation-play-state: paused;
        }
        
        @keyframes spin {
          0% { transform: rotateX(-210deg) rotateY(0deg) rotateZ(185deg); }
          100% { transform: rotateX(-210deg) rotateY(360deg) rotateZ(185deg); }
        }
        
        .sphere div {
          --sz: 23%;
          --dv: calc(var(--s) / var(--d));
          --dl: calc(var(--dv) * -1);
          width: var(--sz);
          height: var(--sz);
          position: absolute;
          border: 0.15vmin solid var(--c);
          border-radius: 100%;
          transform: rotateX(90deg) translateZ(7.35vmin);
          box-shadow: 0 0 0.3vmin 0.3vmin var(--c), 0 0 0.3vmin 0.3vmin var(--c) inset;
          animation: shine var(--s) linear var(--dl) infinite;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        @keyframes shine {
          50%, 100% {
            border-color: #10101000;
            box-shadow: 0 0 1px 1px #10101000, 0 0 1px 1px #10101000 inset;
            filter: hue-rotate(540deg);
          }
        }
        
        .sphere div:before {
          content: "";
          width: 100%;
          height: 100%;
          position: absolute;
          border: 0.15vmin solid var(--c);
          border-radius: 100%;
          box-shadow: 0 0 0.3vmin 0.3vmin var(--c), 0 0 0.3vmin 0.3vmin var(--c) inset;
          animation: shine var(--s) linear calc(var(--dl) * -1) infinite;
        }
        
        .sphere div:nth-child(2) { transform: rotateX(90deg) translateZ(6.75vmin); --sz: 43%; --dl: calc(var(--dv) * -2); filter: hue-rotate(-2deg); }
        .sphere div:nth-child(3) { transform: rotateX(90deg) translateZ(6vmin); --sz: 60%; --dl: calc(var(--dv) * -3); filter: hue-rotate(-4deg); }
        .sphere div:nth-child(4) { transform: rotateX(90deg) translateZ(5.25vmin); --sz: 71%; --dl: calc(var(--dv) * -4); filter: hue-rotate(-6deg); }
        .sphere div:nth-child(5) { transform: rotateX(90deg) translateZ(4.5vmin); --sz: 80%; --dl: calc(var(--dv) * -5); filter: hue-rotate(-8deg); }
        .sphere div:nth-child(6) { transform: rotateX(90deg) translateZ(3.75vmin); --sz: 86%; --dl: calc(var(--dv) * -6); filter: hue-rotate(-10deg); }
        .sphere div:nth-child(7) { transform: rotateX(90deg) translateZ(3vmin); --sz: 91%; --dl: calc(var(--dv) * -7); filter: hue-rotate(-12deg); }
        .sphere div:nth-child(8) { transform: rotateX(90deg) translateZ(2.25vmin); --sz: 95%; --dl: calc(var(--dv) * -8); filter: hue-rotate(-14deg); }
        .sphere div:nth-child(9) { transform: rotateX(90deg) translateZ(1.5vmin); --sz: 97%; --dl: calc(var(--dv) * -9); filter: hue-rotate(-16deg); }
        .sphere div:nth-child(10) { transform: rotateX(90deg) translateZ(0.75vmin); --sz: 99%; --dl: calc(var(--dv) * -10); filter: hue-rotate(-18deg); }
        .sphere div:nth-child(11) { transform: rotateX(90deg); --sz: 100%; --dl: calc(var(--dv) * -11); filter: hue-rotate(-20deg); }
        .sphere div:nth-child(12) { transform: rotateX(90deg) translateZ(-0.75vmin); --sz: 99%; --dl: calc(var(--dv) * -12); filter: hue-rotate(-22deg); }
        .sphere div:nth-child(13) { transform: rotateX(90deg) translateZ(-1.5vmin); --sz: 97%; --dl: calc(var(--dv) * -13); filter: hue-rotate(-24deg); }
        .sphere div:nth-child(14) { transform: rotateX(90deg) translateZ(-2.25vmin); --sz: 95%; --dl: calc(var(--dv) * -14); filter: hue-rotate(-26deg); }
        .sphere div:nth-child(15) { transform: rotateX(90deg) translateZ(-3vmin); --sz: 91%; --dl: calc(var(--dv) * -15); filter: hue-rotate(-28deg); }
        .sphere div:nth-child(16) { transform: rotateX(90deg) translateZ(-3.75vmin); --sz: 86%; --dl: calc(var(--dv) * -16); filter: hue-rotate(-30deg); }
        .sphere div:nth-child(17) { transform: rotateX(90deg) translateZ(-4.5vmin); --sz: 80%; --dl: calc(var(--dv) * -17); filter: hue-rotate(-32deg); }
        .sphere div:nth-child(18) { transform: rotateX(90deg) translateZ(-5.25vmin); --sz: 71%; --dl: calc(var(--dv) * -18); filter: hue-rotate(-34deg); }
        .sphere div:nth-child(19) { transform: rotateX(90deg) translateZ(-6vmin); --sz: 60%; --dl: calc(var(--dv) * -19); filter: hue-rotate(-36deg); }
        .sphere div:nth-child(20) { transform: rotateX(90deg) translateZ(-6.75vmin); --sz: 43%; --dl: calc(var(--dv) * -20); filter: hue-rotate(-38deg); }
        .sphere div:nth-child(21) { transform: rotateX(90deg) translateZ(-7.35vmin); --sz: 23%; --dl: calc(var(--dv) * -21); filter: hue-rotate(-40deg); }
      `}</style>
    </>
  );
};

export default AnimatedSphere;