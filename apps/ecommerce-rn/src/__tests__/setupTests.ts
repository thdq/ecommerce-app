import '@testing-library/jest-native/extend-expect'
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')
jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'))

jest.mock('global', () => ({
  ...global,
  WebSocket: function WebSocket() {},
}))
