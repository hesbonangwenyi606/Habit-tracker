export interface Habit {
  id: string;
  name: string;
  icon: string;
  streak: number;
  completed: boolean;
  category: string;
  reminderTime: string;
  reminderEnabled: boolean;
}

export const initialHabits: Habit[] = [
  { id: '1', name: 'Morning Meditation', icon: 'https://d64gsuwffb70l.cloudfront.net/68faf4939ebc74fbb5e8410c_1761277137655_d3650047.webp', streak: 15, completed: true, category: 'Mindfulness', reminderTime: '07:00', reminderEnabled: true },
  { id: '2', name: 'Morning Run', icon: 'https://d64gsuwffb70l.cloudfront.net/68faf4939ebc74fbb5e8410c_1761277138407_c74e90be.webp', streak: 8, completed: false, category: 'Fitness', reminderTime: '06:30', reminderEnabled: true },
  { id: '3', name: 'Read 30 Minutes', icon: 'https://d64gsuwffb70l.cloudfront.net/68faf4939ebc74fbb5e8410c_1761277139194_e48311f8.webp', streak: 22, completed: true, category: 'Learning', reminderTime: '21:00', reminderEnabled: true },
  { id: '4', name: 'Drink 8 Glasses', icon: 'https://d64gsuwffb70l.cloudfront.net/68faf4939ebc74fbb5e8410c_1761277139976_08cb9ecb.webp', streak: 45, completed: false, category: 'Health', reminderTime: '09:00', reminderEnabled: true },
  { id: '5', name: 'Strength Training', icon: 'https://d64gsuwffb70l.cloudfront.net/68faf4939ebc74fbb5e8410c_1761277140740_55d3ad24.webp', streak: 12, completed: false, category: 'Fitness', reminderTime: '18:00', reminderEnabled: false },
  { id: '6', name: 'Healthy Meal Prep', icon: 'https://d64gsuwffb70l.cloudfront.net/68faf4939ebc74fbb5e8410c_1761277142026_0a877c7a.webp', streak: 7, completed: true, category: 'Nutrition', reminderTime: '12:00', reminderEnabled: true },
  { id: '7', name: 'Sleep by 10 PM', icon: 'https://d64gsuwffb70l.cloudfront.net/68faf4939ebc74fbb5e8410c_1761277143008_02067d38.webp', streak: 30, completed: false, category: 'Health', reminderTime: '21:30', reminderEnabled: true },
  { id: '8', name: 'Practice Guitar', icon: 'https://d64gsuwffb70l.cloudfront.net/68faf4939ebc74fbb5e8410c_1761277143871_e3e60f95.webp', streak: 5, completed: false, category: 'Creative', reminderTime: '19:00', reminderEnabled: false },
  { id: '9', name: 'Paint or Draw', icon: 'https://d64gsuwffb70l.cloudfront.net/68faf4939ebc74fbb5e8410c_1761277145314_69606830.webp', streak: 3, completed: false, category: 'Creative', reminderTime: '20:00', reminderEnabled: false },
  { id: '10', name: 'Journal Writing', icon: 'https://d64gsuwffb70l.cloudfront.net/68faf4939ebc74fbb5e8410c_1761277146554_0ae8d1e3.webp', streak: 18, completed: true, category: 'Mindfulness', reminderTime: '22:00', reminderEnabled: true },
  { id: '11', name: 'Water Plants', icon: 'https://d64gsuwffb70l.cloudfront.net/68faf4939ebc74fbb5e8410c_1761277148289_c608e180.webp', streak: 10, completed: false, category: 'Lifestyle', reminderTime: '08:00', reminderEnabled: true },
  { id: '12', name: 'No Phone Before Bed', icon: 'https://d64gsuwffb70l.cloudfront.net/68faf4939ebc74fbb5e8410c_1761277149057_54b1bef4.webp', streak: 6, completed: false, category: 'Digital Wellness', reminderTime: '21:00', reminderEnabled: true }
];
