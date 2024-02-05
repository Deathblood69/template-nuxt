import {defineConfig} from 'cypress'
import dotenv from 'dotenv'
import registerCodeCoverageTasks from '@cypress/code-coverage/task'

dotenv.config()

export default defineConfig({
  e2e: {
    experimentalStudio: true,
    video: false,
    screenshotOnRunFailure: true,
    baseUrl: `http://localhost:3000`,
    setupNodeEvents(on, config) {
      registerCodeCoverageTasks(on, config)
      // include any other plugin code...

      // It's IMPORTANT to return the config object
      // with any changed environment variables
      return config
    },
  },
})
