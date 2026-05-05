const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = './src/assests';

async function forceCompress() {
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const filePath = path.join(dir, file);
        
        // Target only the problematic SVG
        if (file.endsWith('.svg')) {
            const fileName = path.parse(file).name;
            const finalPath = path.join(dir, `${fileName}.webp`);

            console.log(`Attempting to force-process: ${file}...`);

            try {
                // We read the file into a Buffer first to bypass some XML parsing constraints
                const inputBuffer = fs.readFileSync(filePath);

                await sharp(inputBuffer, { unlimited: true }) // 'unlimited' ignores the 100MB safety cap
                    .ensureAlpha()
                    .resize(1200)
                    .webp({ quality: 40, effort: 6 })
                    .toFile(finalPath);

                fs.unlinkSync(filePath);
                console.log(`✅ Finally fixed: ${file} -> ${fileName}.webp`);
            } catch (err) {
                console.error(`❌ Still failing on ${file}: ${err.message}`);
                console.log(`💡 Manual fix needed: Open ${file} in a browser and save as WebP.`);
            }
        }
    }
}

forceCompress();