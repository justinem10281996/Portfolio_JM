import sharp from 'sharp';
import { readdirSync, statSync, existsSync, unlinkSync, renameSync } from 'fs';
import { join, extname, parse } from 'path';

const ROOT = 'C:\\Users\\Justi\\Desktop\\Portfolio_JM\\public';
const EXTENSIONS = new Set(['.png', '.jpg', '.jpeg', '.gif']);

const stats = { total: 0, optimized: 0, skipped: 0, deleted: 0, savedBytes: 0 };

async function optimizeFile(filePath) {
  const ext = extname(filePath).toLowerCase();
  if (!EXTENSIONS.has(ext)) return;
  
  const originalSize = statSync(filePath).size;
  stats.total++;
  
  const isLarge = originalSize > 200 * 1024; // >200KB
  const isHuge = originalSize > 1024 * 1024;  // >1MB
  
  let quality = 80;
  if (isHuge) quality = 65;
  else if (isLarge) quality = 75;
  
  const parsed = parse(filePath);
  const tmpPath = join(parsed.dir, `.tmp-${parsed.base}`);
  
  try {
    let pipeline = sharp(filePath);
    const metadata = await pipeline.metadata();
    
    // Convert PNGs >500KB to JPEG for much smaller size
    let outputExt = ext;
    if (ext === '.png' && originalSize > 500 * 1024 && metadata.width > 200) {
      outputExt = '.jpg';
    }
    
    if (outputExt === '.jpg') {
      // Strip alpha channel, use JPEG
      await pipeline
        .flatten({ background: { r: 255, g: 255, b: 255 } })
        .jpeg({ quality, mozjpeg: true })
        .toFile(tmpPath);
    } else if (ext === '.png') {
      await pipeline
        .png({ quality, compressionLevel: 9, palette: originalSize < 100 * 1024 })
        .toFile(tmpPath);
    } else {
      await pipeline
        .jpeg({ quality, mozjpeg: true })
        .toFile(tmpPath);
    }
    
    const newSize = statSync(tmpPath).size;
    
    // Only replace if actually smaller
    if (newSize < originalSize) {
      unlinkSync(filePath);
      if (outputExt !== ext) {
        const newPath = join(parsed.dir, parsed.name + outputExt);
        renameSync(tmpPath, newPath);
        const saved = originalSize - newSize;
        stats.savedBytes += saved;
        stats.optimized++;
        const pct = ((saved / originalSize) * 100).toFixed(1);
        console.log(`  ✓ ${parsed.base} → ${parsed.name}${outputExt}  ${(originalSize/1024).toFixed(0)}K → ${(newSize/1024).toFixed(0)}K  (-${pct}%)`);
      } else {
        renameSync(tmpPath, filePath);
        const saved = originalSize - newSize;
        stats.savedBytes += saved;
        stats.optimized++;
        const pct = ((saved / originalSize) * 100).toFixed(1);
        console.log(`  ✓ ${parsed.base}  ${(originalSize/1024).toFixed(0)}K → ${(newSize/1024).toFixed(0)}K  (-${pct}%)`);
      }
    } else {
      unlinkSync(tmpPath);
      stats.skipped++;
      console.log(`  - ${parsed.base}  already optimal (${(originalSize/1024).toFixed(0)}K)`);
    }
  } catch (err) {
    console.error(`  ✗ ${filePath}: ${err.message}`);
    // Clean up tmp file if exists
    try { if (existsSync(tmpPath)) unlinkSync(tmpPath); } catch {}
  }
}

async function walkDir(dir) {
  let entries;
  try {
    entries = readdirSync(dir);
  } catch { return; }
  
  for (const entry of entries) {
    if (entry.startsWith('.tmp-')) continue;
    if (entry === 'digiSign') continue; // empty dir
    const fullPath = join(dir, entry);
    try {
      const stat = statSync(fullPath);
      if (stat.isDirectory()) {
        await walkDir(fullPath);
      } else if (stat.isFile()) {
        await optimizeFile(fullPath);
      }
    } catch {}
  }
}

async function deleteIfUnused(filePath, reason) {
  if (existsSync(filePath)) {
    const size = statSync(filePath).size;
    unlinkSync(filePath);
    stats.deleted++;
    stats.savedBytes += size;
    console.log(`  🗑  ${filePath}  (${(size/1024).toFixed(0)}K) — ${reason}`);
  }
}

async function main() {
  console.log('=== Image Optimization ===\n');
  
  // Delete unused profile.jpg
  await deleteIfUnused(join(ROOT, 'profile.jpg'), 'unused — not referenced in source');
  
  console.log('\n--- Optimizing images ---\n');
  await walkDir(ROOT);
  
  console.log('\n=== Results ===');
  console.log(`  Total files processed: ${stats.total}`);
  console.log(`  Optimized: ${stats.optimized}`);
  console.log(`  Deleted: ${stats.deleted}`);
  console.log(`  Skipped: ${stats.skipped}`);
  console.log(`  Total space saved: ${(stats.savedBytes / 1024 / 1024).toFixed(1)} MB`);
}

main().catch(console.error);
