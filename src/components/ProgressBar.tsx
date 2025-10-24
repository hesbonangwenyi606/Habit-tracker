import React from 'react';

interface ProgressBarProps {
  percentage: number;
  color?: string;
  showLabel?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ 
  percentage, 
  color = 'bg-gradient-to-r from-purple-500 to-blue-500',
  showLabel = true 
}) => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-1">
        {showLabel && (
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {percentage}% Complete
          </span>
        )}
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
        <div 
          className={`h-full ${color} transition-all duration-500 ease-out rounded-full`}
          style={{ width: `${Math.min(percentage, 100)}%` }}
        />
      </div>
    </div>
  );
};
