// src/lib/utils.ts
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const TECH_NAMES: Record<string, string> = {
  html5: 'HTML5',
  css: 'CSS',
  js: 'JavaScript',
  ts: 'TypeScript',
  'react-js': 'React',
  'react-native': 'React Native',
  shadcn: 'shadcn/ui',
  laravel: 'Laravel',
  php: 'PHP',
  mysql: 'MySQL',
  mssql: 'MSSQL',
  'node-js': 'Node.js',
  git: 'Git',
  github: 'GitHub',
  'ant-design': 'Ant Design',
  expo: 'Expo',
  'android-studio': 'Android Studio',
  tailwind_css: 'Tailwind CSS',
  'tailwind-css': 'Tailwind CSS',
  'inertia.js': 'Inertia.js',
  'vite.js': 'Vite.js',
};

export function techName(path: string): string {
  const file = (path.split('/').pop() ?? path).replace(/\.[^.]+$/, '');
  return TECH_NAMES[file] ?? TECH_NAMES[file.toLowerCase()] ?? file.replace(/[-_]+/g, ' ');
}