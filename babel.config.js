module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '~': './src',
          '@api': './src/api',
          '@assets': './src/assets',
          '@navigation': './src/navigation',
          '@redux': './src/redux',
          '@screens': './src/screens',
          '@ui': './src/ui',
          '@animation': './src/ui/animation',
          '@common': './src/ui/common',
          '@utils': './src/utils',
          '@type': './src/type',
        },
      },
    ],
  ],
};
