/** @type {import('next').NextConfig} */

const path = require("path");
const tailwindConfigExport = require("tailwindcss-export-config");

const converter = new tailwindConfigExport({
  config: path.join(__dirname, "tailwind.config.js"),
  destination: "styles/tailwind-config-var",
  format: "scss",
  // prefix: "tw",
  // flat: true,
  quotedKeys: true,
  // preserveKeys: ["colors", "screens"],
  // onlyIncludeKeys: ["colors"],
});

converter.writeToFile();

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname)],
  },
};

// module.exports = nextConfig;
module.exports = {
  output: 'standalone',
}
