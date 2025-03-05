import React from 'react';
import { Brain } from 'lucide-react';

const Header = () => {
  return (
    <div className="w-full bg-[#0B1120] border-b border-[#1E2A4A] z-50">
      <div className="h-16 px-6 flex items-center w-full">
        <div className="flex items-center gap-3 w-full">
          <Brain className="h-8 w-8 text-blue-400" />
          <span className="text-2xl font-bold text-white">
            Swayamai
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;