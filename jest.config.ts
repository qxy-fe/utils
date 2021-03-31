import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  bail: 1,

  transform: {
    '^.+\\.ts$': 'ts-jest',
  },

  collectCoverageFrom: ['src/**/*.ts', '!src/**/*.spec.ts'],
}

export default config
