/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any }
  interface Methods extends GraphQL {}
  interface I extends ReturnType<steps_file>, WithTranslation<GraphQL> {}
  namespace Translation {
    interface Actions {}
  }
}
