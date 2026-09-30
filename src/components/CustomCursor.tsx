import React, { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [active, setActive] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if target is inside an element requesting the floating cursor badge
      const target = (e.target as HTMLElement).closest('[data-cursor="arrow"]');
      if (target) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  if (isTouchDevice) return null;

  return (
    <div
      className={`fixed top-0 left-0 pointer-events-none z-50 transition-transform duration-75 ease-out ${
        active ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
      }`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        transitionProperty: 'opacity, transform',
        transitionDuration: '0.2s',
      }}
    >
      <div className="w-14 h-14 rounded-full bg-[#181818]/90 text-white flex items-center justify-center shadow-2xl backdrop-blur-md border border-white/20">
        <ArrowUpRight className="w-6 h-6 stroke-[2.2]" />
      </div>
    </div>
  );
};
