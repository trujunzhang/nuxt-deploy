import * as dotenv from 'dotenv'

export function setupDebugEnv() {
  /**
   * Load environment variables from .env file, where API keys and passwords are configured.
   */
  if (process.env.NODE_ENV !== 'production') {
    const userHome = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE
    const appName = 'parse-ieatta'
    const result = dotenv.config({
      path: `${userHome}/.dotenv/${appName}/.env`
    })

    if (result.error) {
      throw result.error
    }

    console.log(result.parsed)
  }
}
