module.exports = {
  presets: [require("@spartan-ng/ui-core/hlm-tailwind-preset")],
  content: [
    "./src/**/*.{html,ts}", // Make sure to scan all .html and .ts files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
