import React from 'react';
import { StreakBadge } from './StreakBadge';

interface HabitCardProps {
  id: string;
  name: string;
  icon: string;
  streak: number;
  completed: boolean;
  category: string;
  onToggle: (id: string) => void;
  onEdit?: (id: string) => void;
}

export const HabitCard: React.FC<HabitCardProps> = ({ 
  id, 
  name, 
  icon, 
  streak, 
  completed, 
  category,
  onToggle,
  onEdit 
}) => {
  return (
    <div className={`relative p-6 rounded-2xl border-2 transition-all hover:shadow-xl hover:-translate-y-1 ${
      completed 
        ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-400' 
        : 'bg-white border-gray-200'
    }`}>
      <div className="absolute top-3 right-3">
        <StreakBadge count={streak} size="sm" />
      </div>
      
      <img src={icon} alt={name} className="w-16 h-16 rounded-xl object-cover mb-3" />
      
      <h3 className="font-bold text-lg text-gray-800 mb-1">{name}</h3>
      <p className="text-xs text-gray-500 mb-4">{category}</p>
      
      <button
        onClick={() => onToggle(id)}
        className={`w-full py-2.5 rounded-lg font-semibold transition-all ${
          completed
            ? 'bg-green-500 text-white hover:bg-green-600'
            : 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600'
        }`}
      >
        {completed ? '✓ Completed' : 'Mark Complete'}
      </button>
    </div>
  );
};
