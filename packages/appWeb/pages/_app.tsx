import * as React from 'react'
import App from 'next/app'
import Head from 'next/head'

// Material theme.
// ================================
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { theme } from '@appStyled/theme'

// Store Initialization
// ------------------------------------
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { applyMiddleware, createStore } from 'redux'
import withRedux, { MakeStore } from 'next-redux-wrapper'
import reducer from '@src/redux/rootReducer'

export type RootState = ReturnType<typeof reducer>;

// i18next
// ================================
import I18n from '@web/server/i18n'
const appWithTranslation = I18n.appWithTranslation

/**
 * @param {object} initialState
 * @param {boolean} options.isServer indicates whether it is a server side or client side
 * @param {Request} options.req NodeJS Request object (not set when client applies initialState from server)
 * @param {Request} options.res NodeJS Request object (not set when client applies initialState from server)
 * @param {boolean} options.debug User-defined debug mode param
 * @param {string} options.storeKey This key will be used to preserve store in global namespace for safe HMR
 */
const makeStore : MakeStore = (initialState: RootState, options) => {
  if (options.isServer) {
    return createStore(reducer, initialState)
  }
  return createStore(reducer, applyMiddleware(thunk))
}

class MyMaterialApp extends React.Component<any, any> {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles: any = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {this.props.children}
      </ThemeProvider>
    )
  }
}

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps, store } = this.props as any

    return (
        <Provider store={store}>
          <Head>
            <title>{'IEATTA – Eating Restaurant Tracker!'}</title>
          </Head>
          <MyMaterialApp>
            <Component {...pageProps} />
          </MyMaterialApp>
        </Provider>
    )
  }
}

const myAppWithI18n = appWithTranslation(MyApp)
export default withRedux(makeStore)(myAppWithI18n)
