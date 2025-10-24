import React from 'react';

interface AchievementBadgeProps {
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  onClick?: () => void;
}

export const AchievementBadge: React.FC<AchievementBadgeProps> = ({ 
  title, 
  description, 
  icon, 
  unlocked,
  onClick 
}) => {
  return (
    <div 
      onClick={onClick}
      className={`p-4 rounded-xl border-2 transition-all cursor-pointer hover:scale-105 ${
        unlocked 
          ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-400 shadow-lg' 
          : 'bg-gray-100 border-gray-300 opacity-60'
      }`}
    >
      <div className="text-4xl mb-2 text-center">{icon}</div>
      <h4 className="font-bold text-sm text-gray-800 text-center">{title}</h4>
      <p className="text-xs text-gray-600 text-center mt-1">{description}</p>
    </div>
  );
};
