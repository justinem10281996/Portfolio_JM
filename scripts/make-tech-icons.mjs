import sharp from 'sharp';
import { writeFileSync } from 'fs';

const OUT = 'public/assets/dev-icon';

const svg = (inner, size = 128) => Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 128 128">${inner}</svg>`
);

// React Native: the classic atom orbit mark in the brand blue-black.
const reactNative = svg(`
  <g fill="none" stroke="#20232a" stroke-width="6" stroke-linecap="round">
    <ellipse cx="64" cy="64" rx="46" ry="18"/>
    <ellipse cx="64" cy="64" rx="46" ry="18" transform="rotate(60 64 64)"/>
    <ellipse cx="64" cy="64" rx="46" ry="18" transform="rotate(120 64 64)"/>
  </g>
  <circle cx="64" cy="64" r="9" fill="#20232a"/>
`);

// Expo: rounded-square badge with the diagonal "E" beam.
const expo = svg(`
  <rect x="10" y="10" width="108" height="108" rx="26" fill="none" stroke="#20232a" stroke-width="7"/>
  <path d="M42 40 L36 88 L84 46" fill="none" stroke="#20232a" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M52 88 L96 88" fill="none" stroke="#20232a" stroke-width="8" stroke-linecap="round"/>
`);

// Android Studio: the AOSP-style drafting compass + head.
const androidStudio = svg(`
  <path d="M64 26 L64 34" stroke="#20232a" stroke-width="6" stroke-linecap="round"/>
  <circle cx="64" cy="22" r="6" fill="#20232a"/>
  <path d="M28 100 L54 40 L72 100 Z" fill="none" stroke="#20232a" stroke-width="7" stroke-linejoin="round"/>
  <path d="M84 46 L84 100" fill="none" stroke="#20232a" stroke-width="7" stroke-linecap="round"/>
  <path d="M74 74 L94 74" fill="none" stroke="#20232a" stroke-width="6" stroke-linecap="round"/>
`);

const jobs = [
  ['react-native.png', reactNative],
  ['expo.png', expo],
  ['android-studio.png', androidStudio],
];

for (const [name, buf] of jobs) {
  const out = await sharp(buf).resize(128, 128).png({ compressionLevel: 9 }).toBuffer();
  writeFileSync(`${OUT}/${name}`, out);
  console.log('wrote', name, out.length, 'bytes');
}