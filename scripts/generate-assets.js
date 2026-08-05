import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const LOGO_PATH = "M50.4 78.5a75.1 75.1 0 0 0-28.5 6.9l24.2-65.7c.7-2 1.9-3.2 3.4-3.2h29c1.5 0 2.7 1.2 3.4 3.2l24.2 65.7s-11.6-7-28.5-7L67 45.5c-.4-1.7-1.6-2.8-2.9-2.8-1.3 0-2.5 1.1-2.9 2.7L50.4 78.5Zm-1.1 28.2Zm-4.2-20.2c-2 6.6-.6 15.8 4.2 20.2a17.5 17.5 0 0 1 .2-.7 5.5 5.5 0 0 1 5.7-4.5c2.8.1 4.3 1.5 4.7 4.7.2 1.1.2 2.3.2 3.5v.4c0 2.7.7 5.2 2.2 7.4a13 13 0 0 0 5.7 4.9v-.3l-.2-.3c-1.8-5.6-.5-9.5 4.4-12.8l1.5-1a73 73 0 0 0 3.2-2.2 16 16 0 0 0 6.8-11.4c.3-2 .1-4-.6-6l-.8.6-1.6 1a37 37 0 0 1-22.4 2.7c-5-.7-9.7-2-13.2-6.2Z";

const PUBLIC_DIR = path.resolve('public');

// 1. Generate 32x32 Favicon
const favicon32 = `
<svg width="32" height="32" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
  <path d="${LOGO_PATH}" fill="#1A4A7A"/>
</svg>
`;

// 2. Generate Apple Touch Icon (180x180)
const appleTouchIcon = `
<svg width="180" height="180" viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg">
  <rect width="180" height="180" fill="#1A4A7A" rx="36"/>
  <g transform="translate(26, 26)">
    <path d="${LOGO_PATH}" fill="#FFFFFF"/>
  </g>
</svg>
`;

// 3. Generate Android Chrome 192 (192x192)
const android192 = `
<svg width="192" height="192" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg">
  <rect width="192" height="192" fill="#1A4A7A"/>
  <g transform="translate(32, 32)">
    <path d="${LOGO_PATH}" fill="#FFFFFF"/>
  </g>
</svg>
`;

// 4. Generate Android Chrome 512 (512x512)
const android512 = `
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" fill="#1A4A7A"/>
  <g transform="translate(64, 64) scale(3)">
    <path d="${LOGO_PATH}" fill="#FFFFFF"/>
  </g>
</svg>
`;

// 5. Generate Open Graph Image (1200x630)
const ogImage = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1A4A7A;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#0D223F;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#050F1B;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="accent-grad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#38ABC3;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#5B5791;stop-opacity:1" />
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
    </pattern>
  </defs>
  
  <rect width="1200" height="630" fill="url(#grad)" />
  <rect width="1200" height="630" fill="url(#grid)" />
  
  <!-- Ambient Glow -->
  <circle cx="200" cy="150" r="300" fill="#5B5791" opacity="0.15" filter="blur(80px)" />
  <circle cx="1000" cy="450" r="250" fill="#38ABC3" opacity="0.1" filter="blur(60px)" />

  <g transform="translate(100, 0)">
    <!-- Logo -->
    <g transform="translate(0, 160) scale(1.6)">
      <path d="${LOGO_PATH}" fill="#FFFFFF"/>
    </g>
    
    <!-- Brand Typography -->
    <text x="240" y="240" fill="#FFFFFF" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="700" font-size="76" letter-spacing="-1.5">PulsoBI Tech</text>
    <text x="245" y="315" fill="#A0AEC0" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="600" font-size="26" letter-spacing="1">DATA INTELLIGENCE &amp; WEB DEVELOPMENT</text>
    
    <!-- Pillars -->
    <g transform="translate(245, 390)" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="20" fill="#E2E8F0">
      <!-- Pillar 1 -->
      <rect x="0" y="0" width="12" height="12" rx="3" fill="#38ABC3" />
      <text x="25" y="12" fill="#E2E8F0" font-weight="600">Inteligencia de Datos</text>
      
      <!-- Pillar 2 -->
      <rect x="270" y="0" width="12" height="12" rx="3" fill="#38ABC3" />
      <text x="295" y="12" fill="#E2E8F0" font-weight="600">Automatización</text>
      
      <!-- Pillar 3 -->
      <rect x="490" y="0" width="12" height="12" rx="3" fill="#38ABC3" />
      <text x="515" y="12" fill="#E2E8F0" font-weight="600">Desarrollo Web</text>
    </g>
  </g>

  <!-- Visual Accent Line -->
  <rect x="0" y="620" width="1200" height="10" fill="url(#accent-grad)" />
</svg>
`;

async function main() {
  try {
    console.log('Generating PNG assets...');

    await sharp(Buffer.from(favicon32))
      .png()
      .toFile(path.join(PUBLIC_DIR, 'favicon-32x32.png'));
    console.log('✔ favicon-32x32.png created');

    await sharp(Buffer.from(appleTouchIcon))
      .png()
      .toFile(path.join(PUBLIC_DIR, 'apple-touch-icon.png'));
    console.log('✔ apple-touch-icon.png created');

    await sharp(Buffer.from(android192))
      .png()
      .toFile(path.join(PUBLIC_DIR, 'android-chrome-192x192.png'));
    console.log('✔ android-chrome-192x192.png created');

    await sharp(Buffer.from(android512))
      .png()
      .toFile(path.join(PUBLIC_DIR, 'android-chrome-512x512.png'));
    console.log('✔ android-chrome-512x512.png created');

    await sharp(Buffer.from(ogImage))
      .png()
      .toFile(path.join(PUBLIC_DIR, 'og-image.png'));
    console.log('✔ og-image.png created');

    console.log('All assets generated successfully!');
  } catch (error) {
    console.error('Error generating assets:', error);
    process.exit(1);
  }
}

main();
