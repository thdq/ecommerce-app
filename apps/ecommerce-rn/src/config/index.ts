import constants from 'expo-constants'
import { REACT_APP_BASE_API_URL, NODE_ENV, REACT_APP_DELAY_REQUESTS_IN_SECONDS } from '@env'

const baseApiUrl = REACT_APP_BASE_API_URL || process.env.REACT_APP_BASE_API_URL
const delayRequestsInSeconds = parseInt(REACT_APP_DELAY_REQUESTS_IN_SECONDS || '')
const env: string = NODE_ENV || process.env.NODE_ENV || ''

const environment = {
  ...constants.expoConfig?.extra,
  delayRequestsInSeconds,
  baseApiUrl,
  env,
  isTest: () => ['test'].includes(env.toLowerCase()),
  isDevelopment: () => ['dev', 'development'].includes(env.toLowerCase()),
  isProduction: () => ['prod', 'production'].includes(env.toLowerCase()),
}

if ((!baseApiUrl && !environment.isTest()) || !environment.isProduction()) {
  throw new Error(
    `Env \`REACT_APP_BASE_API_URL\` not found, create a \`.env.${env}\` and insert the variables`,
  )
}

export { environment }
