import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const original = 128;
const sizes = [96, 64, 48, 32, 16];

const imgDir = path.join(__dirname, "YtSubOnly", "img");
const originalPath = path.join(imgDir, `${original}.png`);

async function generateImages() {
    for (const size of sizes) {
      const outputPath = path.join(imgDir, `${size}.png`);
      await sharp(originalPath)
        .resize(size, size, {
          fit: "contain",
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        })
        .toFile(outputPath);
    }
}

generateImages();