import {defineVitestConfig} from '@nuxt/test-utils/config'
import {configDefaults} from 'vitest/config'

export default defineVitestConfig({
  test: {
    reporters: ['json', 'default'],
    outputFile: '../coverage/output.json',
    environment: 'nuxt',
    coverage: {
      enabled: true,
      exclude: [
        ...configDefaults.coverage.exclude,
        '**/types/**/*',
        '**/constants/**/*',
        '**/app.vue',
      ],
      reportOnFailure: true,
      reporter: ['text', 'json-summary', 'json'],
      reportsDirectory: '../coverage',
      thresholds: {
        lines: 80,
        branches: 80,
        functions: 80,
        statements: 80,
      },
    },
  },
})
