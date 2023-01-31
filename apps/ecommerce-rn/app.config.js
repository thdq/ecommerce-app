const config = {
  name: 'ecommerce-rn',
  slug: 'e-commerce-com-react-native',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'light',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ['**/*'],

  owner: 'thdq',
  android: {
    package: 'com.ecommerce.rn',
    versionCode: 1,
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#FFFFFF',
    },
  },
  ios: {
    bundleIdentifier: 'com.ecommerce.rn',
    supportsTablet: true,
  },
  plugins: [['expo-community-flipper'], ['react-native-flipper-performance-plugin']],
}

export default config
