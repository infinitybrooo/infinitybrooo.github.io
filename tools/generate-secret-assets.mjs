import { extname, join } from "node:path";
import { mkdir, readdir } from "node:fs/promises";
import sharp from "sharp";

const secretsDir = join(process.cwd(), "assets", "secrets");
const mobileDir = join(secretsDir, "mobile");
const thumbsDir = join(secretsDir, "thumbs");
const imageExtensions = new Set([".png", ".jpg", ".jpeg", ".webp"]);

const outputOptions = {
    webp: { quality: 76, effort: 6 },
    png: { compressionLevel: 9, palette: true },
    jpeg: { quality: 82, mozjpeg: true }
};

async function saveVariant(input, output, width, height = null) {
    const pipeline = sharp(input).rotate().resize({
        width,
        height,
        fit: height ? "cover" : "inside",
        withoutEnlargement: true
    });
    const extension = extname(output).toLowerCase();

    if (extension === ".webp") {
        await pipeline.webp(outputOptions.webp).toFile(output);
        return;
    }

    if (extension === ".png") {
        await pipeline.png(outputOptions.png).toFile(output);
        return;
    }

    await pipeline.jpeg(outputOptions.jpeg).toFile(output);
}

await mkdir(mobileDir, { recursive: true });
await mkdir(thumbsDir, { recursive: true });

const entries = await readdir(secretsDir, { withFileTypes: true });
const sourceFiles = entries
    .filter((entry) => entry.isFile() && imageExtensions.has(extname(entry.name).toLowerCase()))
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b));

if (!sourceFiles.length) {
    console.log("No secret assets found.");
    process.exit(0);
}

for (const file of sourceFiles) {
    const input = join(secretsDir, file);
    await saveVariant(input, join(mobileDir, file), 768);
    await saveVariant(input, join(thumbsDir, file), 360, 270);
    console.log(`generated mobile/thumb variants for ${file}`);
}
