import React from 'react';

export const HeatmapCalendar: React.FC = () => {
  const weeks = 12;
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  
  const getRandomIntensity = () => {
    const rand = Math.random();
    if (rand > 0.8) return 'bg-green-600';
    if (rand > 0.6) return 'bg-green-500';
    if (rand > 0.4) return 'bg-green-400';
    if (rand > 0.2) return 'bg-green-300';
    return 'bg-gray-200';
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Activity Heatmap</h3>
      <div className="flex gap-1">
        {Array.from({ length: weeks }).map((_, weekIdx) => (
          <div key={weekIdx} className="flex flex-col gap-1">
            {days.map((day, dayIdx) => (
              <div
                key={`${weekIdx}-${dayIdx}`}
                className={`w-3 h-3 rounded-sm ${getRandomIntensity()} hover:ring-2 ring-purple-500 transition-all cursor-pointer`}
                title={`${day} - Week ${weekIdx + 1}`}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 mt-4 text-xs text-gray-600">
        <span>Less</span>
        <div className="flex gap-1">
          <div className="w-3 h-3 bg-gray-200 rounded-sm" />
          <div className="w-3 h-3 bg-green-300 rounded-sm" />
          <div className="w-3 h-3 bg-green-500 rounded-sm" />
          <div className="w-3 h-3 bg-green-600 rounded-sm" />
        </div>
        <span>More</span>
      </div>
    </div>
  );
};
