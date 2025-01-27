const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');

// Merge all CSS files into a single string
function bundleCSS(inputDir) {
	const files = fs.readdirSync(inputDir).filter(file => file.endsWith('.css'));
	return files.map(file => fs.readFileSync(path.join(inputDir, file), 'utf8')).join('\n');
}

const cssDir = './src/css';
const outputCSS = bundleCSS(cssDir);
const cssString = JSON.stringify(outputCSS.replace(/\s+/g, ' ').trim());

esbuild.build({
	entryPoints: ['src/main.ts'],
	bundle: true,
	minify: true,
	target: 'es2020',
	outfile: 'dist/geoguessr-components.lib.js',
	define: {
		'process.env.NODE_ENV': '"production"'
	},
	banner: {
		js: `const GC_MINIFIED_CSS = ${cssString};`,
	}
}).catch(() => process.exit(1));