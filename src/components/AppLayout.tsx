import React, { useState } from 'react';
import { HabitCard } from './HabitCard';
import { StatsWidget } from './StatsWidget';
import { HeatmapCalendar } from './HeatmapCalendar';
import { AchievementBadge } from './AchievementBadge';
import { HabitModal } from './HabitModal';
import { ReminderCard } from './ReminderCard';
import { ProgressBar } from './ProgressBar';
import { initialHabits, Habit } from '../data/habitsData';

export default function AppLayout() {
  const [habits, setHabits] = useState<Habit[]>(initialHabits);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState('All');
  const [showReminders, setShowReminders] = useState(false);

  const heroImage = 'https://d64gsuwffb70l.cloudfront.net/68faf4939ebc74fbb5e8410c_1761277136889_ba7b46e6.webp';

  const toggleHabit = (id: string) => {
    setHabits(habits.map(h => 
      h.id === id ? { ...h, completed: !h.completed, streak: !h.completed ? h.streak + 1 : h.streak } : h
    ));
  };

  const addHabit = (newHabit: any) => {
    const habit: Habit = {
      ...newHabit,
      id: Date.now().toString(),
      icon: 'https://d64gsuwffb70l.cloudfront.net/68faf4939ebc74fbb5e8410c_1761277137655_d3650047.webp',
      reminderEnabled: true
    };
    setHabits([...habits, habit]);
  };

  const toggleReminder = (id: string) => {
    setHabits(habits.map(h => h.id === id ? { ...h, reminderEnabled: !h.reminderEnabled } : h));
  };

  const updateReminderTime = (id: string, time: string) => {
    setHabits(habits.map(h => h.id === id ? { ...h, reminderTime: time } : h));
  };

  const completedToday = habits.filter(h => h.completed).length;
  const totalStreak = habits.reduce((sum, h) => sum + h.streak, 0);
  const longestStreak = Math.max(...habits.map(h => h.streak));
  const completionRate = Math.round((completedToday / habits.length) * 100);

  const categories = ['All', ...new Set(habits.map(h => h.category))];
  const filteredHabits = filter === 'All' ? habits : habits.filter(h => h.category === filter);

  const achievements = [
    { title: '7 Day Streak', description: 'Complete any habit for 7 days', icon: '🔥', unlocked: longestStreak >= 7 },
    { title: '30 Day Warrior', description: 'Maintain a 30-day streak', icon: '⚔️', unlocked: longestStreak >= 30 },
    { title: 'Perfect Day', description: 'Complete all habits in one day', icon: '⭐', unlocked: completedToday === habits.length },
    { title: 'Habit Master', description: 'Create 10+ habits', icon: '👑', unlocked: habits.length >= 10 },
    { title: 'Early Bird', description: 'Complete 5 morning habits', icon: '🌅', unlocked: habits.filter(h => h.completed).length >= 5 },
    { title: 'Consistency King', description: 'Total 100+ streak days', icon: '💎', unlocked: totalStreak >= 100 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      {/* Hero Section */}
      <div className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-blue-900/80" />
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <div className="text-7xl font-bold mb-4 animate-pulse">🔥 {totalStreak}</div>
          <h1 className="text-5xl font-bold mb-4">Total Streak Days</h1>
          <p className="text-xl mb-8 opacity-90">Build habits that last. Track progress that matters.</p>
          <div className="flex gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 bg-white text-purple-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
            >
              + Create New Habit
            </button>
            <button
              onClick={() => setShowReminders(!showReminders)}
              className="px-8 py-4 bg-purple-500/30 backdrop-blur-sm border-2 border-white text-white rounded-full font-bold text-lg hover:bg-purple-500/50 transition-all"
            >
              🔔 Reminders
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <StatsWidget title="Completed Today" value={completedToday} icon="✅" color="from-green-500 to-emerald-600" />
          <StatsWidget title="Total Streaks" value={totalStreak} icon="🔥" color="from-orange-500 to-red-600" />
          <StatsWidget title="Longest Streak" value={longestStreak} icon="🏆" color="from-purple-500 to-pink-600" />
          <StatsWidget title="Completion Rate" value={`${completionRate}%`} icon="📊" color="from-blue-500 to-cyan-600" />
        </div>

        {/* Reminders Section */}
        {showReminders && (
          <div className="mb-12 bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Manage Reminders</h2>
            <div className="space-y-4">
              {habits.map(habit => (
                <ReminderCard
                  key={habit.id}
                  habitName={habit.name}
                  time={habit.reminderTime}
                  enabled={habit.reminderEnabled}
                  onToggle={() => toggleReminder(habit.id)}
                  onTimeChange={(time) => updateReminderTime(habit.id, time)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Category Filter */}
        <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition-all ${
                filter === cat
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Habits Grid */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Your Habits</h2>
            <ProgressBar percentage={completionRate} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredHabits.map(habit => (
              <HabitCard key={habit.id} {...habit} onToggle={toggleHabit} />
            ))}
          </div>
        </div>

        {/* Heatmap */}
        <div className="mb-12">
          <HeatmapCalendar />
        </div>

        {/* Achievements */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {achievements.map((achievement, idx) => (
              <AchievementBadge key={idx} {...achievement} />
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-purple-900 to-blue-900 text-white rounded-2xl p-12 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">🔥 HabitFlow</h3>
              <p className="text-sm opacity-80">Build better habits, one day at a time.</p>
            </div>
            <div>
              <h4 className="font-bold mb-3">Features</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100">Streak Tracking</a></li>
                <li><a href="#" className="hover:opacity-100">Smart Reminders</a></li>
                <li><a href="#" className="hover:opacity-100">Progress Charts</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Resources</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100">Blog</a></li>
                <li><a href="#" className="hover:opacity-100">Guides</a></li>
                <li><a href="#" className="hover:opacity-100">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Connect</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100">Twitter</a></li>
                <li><a href="#" className="hover:opacity-100">Instagram</a></li>
                <li><a href="#" className="hover:opacity-100">Support</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-80">
            © 2025 HabitFlow. All rights reserved.
          </div>
        </footer>
      </div>

      <HabitModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSave={addHabit} />
    </div>
  );
}
