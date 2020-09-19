import React from 'react'
import { AppRegistry } from 'react-native-web'

import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/styles'
import flush from 'styled-jsx/server'

// Material theme.
// ================================
import { theme } from '@appStyled/theme'

// Force Next-generated DOM elements to fill their parent's height
const normalizeNextElements = `
#__next {
display: flex;
flex-direction: column;
height: 100%;
}
`

class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    AppRegistry.registerComponent('Main', () => Main)
    const { getStyleElement } = AppRegistry.getApplication('Main')
    const page = renderPage()
    const styles = [
      <style dangerouslySetInnerHTML={{ __html: normalizeNextElements }} />,
      getStyleElement()
    ]
    return { ...page, styles: React.Children.toArray(styles) }
  }

  render() {
    return (
      <html lang="en" dir="ltr">
        <Head>
          <meta charSet="utf-8" />
          {/* Use minimum-scale=1 to enable GPU rasterization */}
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <link
            href="/static/images/favicon.png"
            rel="shortcut icon"
            type="image/vnd.microsoft.icon"
          />
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          {/* <link */}
          {/* rel="stylesheet" */}
          {/* href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" */}
          {/* /> */}
          {/* <link rel="stylesheet" media="all" href="/static/fontawesome/css/all.min.css" /> */}
          {/* <link rel="stylesheet" media="all" href="/static/css/bootstrap.min.css" /> */}
          {/* <link rel="stylesheet" media="all" href="/static/css/mdb.css" /> */}
          <link rel="stylesheet" media="all" href="/static/style/index.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

MyDocument.getInitialProps = async (ctx: any) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets()
  const originalRenderPage = ctx.renderPage

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />)
    })

  const initialProps = await Document.getInitialProps(ctx)

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: (
      <React.Fragment>
        {sheets.getStyleElement()}
        {flush() || null}
      </React.Fragment>
    )
  }
}

export default MyDocument
