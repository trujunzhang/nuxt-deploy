import { Router } from '@web/server/routes'

export class AppBackLinker {
  private static canAppBack() {
    const history = window.history
    const length = history.length

    console.log('history length: ', history)

    return length > 2
  }

  static appBack = () => {
    if (AppBackLinker.canAppBack()) {
      Router.back()
    } else {
      Router.replaceRoute('/').then(() => window.scrollTo(0, 0))
    }
  }
}
