import React from 'react';

interface StreakBadgeProps {
  count: number;
  size?: 'sm' | 'md' | 'lg';
}

export const StreakBadge: React.FC<StreakBadgeProps> = ({ count, size = 'md' }) => {
  const sizeClasses = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-1.5',
    lg: 'text-lg px-4 py-2'
  };

  const getStreakColor = () => {
    if (count >= 30) return 'from-purple-500 to-pink-500';
    if (count >= 7) return 'from-orange-500 to-red-500';
    return 'from-blue-500 to-cyan-500';
  };

  return (
    <div className={`inline-flex items-center gap-1.5 bg-gradient-to-r ${getStreakColor()} text-white rounded-full font-semibold ${sizeClasses[size]} shadow-lg`}>
      <span className="text-lg">🔥</span>
      <span>{count} day{count !== 1 ? 's' : ''}</span>
    </div>
  );
};
