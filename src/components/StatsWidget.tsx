import React from 'react';

interface StatsWidgetProps {
  title: string;
  value: string | number;
  icon: string;
  color: string;
  subtitle?: string;
}

export const StatsWidget: React.FC<StatsWidgetProps> = ({ 
  title, 
  value, 
  icon, 
  color,
  subtitle 
}) => {
  return (
    <div className={`p-6 rounded-2xl bg-gradient-to-br ${color} text-white shadow-lg hover:shadow-xl transition-all hover:scale-105`}>
      <div className="flex items-start justify-between mb-4">
        <div className="text-4xl">{icon}</div>
        <div className="text-right">
          <div className="text-3xl font-bold">{value}</div>
          <div className="text-sm opacity-90">{title}</div>
        </div>
      </div>
      {subtitle && (
        <div className="text-xs opacity-80 border-t border-white/20 pt-3">
          {subtitle}
        </div>
      )}
    </div>
  );
};
