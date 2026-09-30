import React from 'react';
import { Wrench } from 'lucide-react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', light = false }) => {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Refined Geometric Plumbing Badge */}
      <div className="relative w-8 h-8 rounded-lg bg-[#E5A83B] flex items-center justify-center text-[#121212] shadow-sm">
        <Wrench size={18} strokeWidth={2.4} />
      </div>
      <div className="flex flex-col">
        <span className={`text-[17px] font-bold tracking-[-0.02em] leading-tight ${light ? 'text-[#FAF8F5]' : 'text-[#151515]'}`}>
          Frazier Plumbing
        </span>
      </div>
    </div>
  );
};
