import React from 'react';

interface ReminderCardProps {
  habitName: string;
  time: string;
  enabled: boolean;
  onToggle: () => void;
  onTimeChange: (time: string) => void;
}

export const ReminderCard: React.FC<ReminderCardProps> = ({ 
  habitName, 
  time, 
  enabled, 
  onToggle,
  onTimeChange 
}) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-xl border-2 border-gray-200 hover:border-purple-300 transition-all">
      <div className="flex items-center gap-4">
        <div className="text-2xl">🔔</div>
        <div>
          <h4 className="font-semibold text-gray-800">{habitName}</h4>
          <input
            type="time"
            value={time}
            onChange={(e) => onTimeChange(e.target.value)}
            className="text-sm text-gray-600 border rounded px-2 py-1 mt-1"
            disabled={!enabled}
          />
        </div>
      </div>
      <button
        onClick={onToggle}
        className={`px-4 py-2 rounded-lg font-medium transition-all ${
          enabled
            ? 'bg-green-500 text-white hover:bg-green-600'
            : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
        }`}
      >
        {enabled ? 'ON' : 'OFF'}
      </button>
    </div>
  );
};
