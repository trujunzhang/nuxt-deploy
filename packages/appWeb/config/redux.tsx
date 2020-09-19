import * as React from 'react'
import Telescope from '@appComponents/index'
import I18n, { withTranslation } from '@web/server/i18n'

// get language from query parameter or url path
const lang = 'en'

export interface IReduxPageParams {
  pageKey: string
  showHeaderPanel?: boolean
}

export const reduxPage = (params: IReduxPageParams) => {
  const { pageKey } = params
  const showHeaderPanel = params.showHeaderPanel || false
  const comp = Telescope.components[pageKey]

  class CommonPage extends React.Component<any, any> {
    static async getInitialProps() {
      return {
        namespacesRequired: ['app', 'common', 'home', 'long']
      }
    }

    constructor(props) {
      super(props)
    }

    render() {
      const children = React.createElement(comp, {})
      return (
        <Telescope.components.Layout showHeaderPanel={showHeaderPanel}>
          {children}
        </Telescope.components.Layout>
      )
    }
  }

  return withTranslation(['app', 'common', 'home', 'long'])(CommonPage)
}
