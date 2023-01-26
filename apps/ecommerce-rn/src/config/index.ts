import constants from 'expo-constants'

const baseApiUrl = constants.expoConfig?.extra?.baseApiUrl

if (!baseApiUrl) {
  new Error(
    'Env `REACT_APP_BASE_API_URL` not found, create a `.env.local` and insert the variables',
  )
}

export const environment = {
  ...constants.expoConfig?.extra,
  baseApiUrl,
  delayRequestsInSeconds: parseInt(constants.expoConfig?.extra?.delayRequestsInSeconds),
  isDevelopment: () => constants.expoConfig?.extra?.env === 'development',
}
