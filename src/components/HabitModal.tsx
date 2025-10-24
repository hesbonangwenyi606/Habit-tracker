import React, { useState } from 'react';

interface HabitModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (habit: any) => void;
}

export const HabitModal: React.FC<HabitModalProps> = ({ isOpen, onClose, onSave }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('Health');
  const [frequency, setFrequency] = useState('daily');
  const [reminderTime, setReminderTime] = useState('09:00');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onSave({ name, category, frequency, reminderTime, streak: 0, completed: false });
      setName('');
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Create New Habit</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Habit Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
              placeholder="e.g., Morning Meditation"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
            >
              <option>Health</option>
              <option>Fitness</option>
              <option>Learning</option>
              <option>Productivity</option>
            </select>
          </div>
          <div className="flex gap-4">
            <button type="submit" className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600">
              Create Habit
            </button>
            <button type="button" onClick={onClose} className="px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-100">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
