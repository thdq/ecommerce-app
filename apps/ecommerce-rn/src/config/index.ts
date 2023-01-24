import constants from 'expo-constants'

export const environment = {
  ...constants.expoConfig?.extra,
  baseApiUrl: constants.expoConfig?.extra?.baseApiUrl,
  delayRequestsInSeconds: parseInt(constants.expoConfig?.extra?.delayRequestsInSeconds),
}
