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
  extra: {
    baseApiUrl: process.env.REACT_APP_BASE_API_URL,
    delayRequestsInSeconds: process.env.REACT_APP_DELAY_REQUESTS_IN_SECONDS,
  },
  android: {
    package: 'com.ecommerce.rn',
    versionCode: 1,
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#FFFFFF',
    },
  },
  ios: {
    supportsTablet: true,
  },
}

export default config
