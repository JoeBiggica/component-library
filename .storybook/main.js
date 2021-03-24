const path = require('path');

module.exports = {
    stories: [
        '../components/**/*.stories.jsx',
        '../components/**/*.stories.tsx',
    ],
    addons: [
        '@storybook/addon-backgrounds',
        '@storybook/addon-knobs',
        '@storybook/addon-actions',
        '@storybook/addon-a11y',
    ],
    // Add nextjs preset
    presets: [path.resolve(__dirname, './next-preset.js')],
};