export const config: CodeceptJS.MainConfig = {
  tests: './**/*_test.ts',
  output: './output',
  helpers: {
    GraphQL: {
      endpoint: 'https://graphqlzero.almansi.me/api'
    }
  },
  include: {},
  name: 'graphql-fun',
  plugins: {
    allure: {
      enabled: true,
      require: "@codeceptjs/allure-legacy",
      outputDir: "./output",
    },
  },
}