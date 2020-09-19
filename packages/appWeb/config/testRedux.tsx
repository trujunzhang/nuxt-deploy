import * as React from 'react'
import Telescope from '@appComponents/index'
import { I18nextProvider } from '@app/tools'

// get language from query parameter or url path
const lang = 'en'

import { getLocalI18n } from '@app/tools'
// import * as resources from '@assets/locales/i18nextLocalesLoader'

// export const mockedI18n = getLocalI18n(resources, (callback: any) => {
//   return 'en'
// })


// Store Initialization
// ------------------------------------
import createStore from '@src/redux/create'
const store = createStore()

import { createStore as RDCreateStore, Store } from 'redux';
import { Provider } from 'react-redux'
import withRedux, { MakeStore } from 'next-redux-wrapper';

import reducer from '@src/redux/rootReducer'
export type RootState = ReturnType<typeof reducer>;
/**
 * @param initialState The store's initial state (on the client side, the state of the server-side store is passed here)
 */
const makeStore: MakeStore = (initialState: RootState) => {
  return RDCreateStore(reducer, initialState);
};

export const testRedux = (key, showHeaderPanel = true) => {
  class Common extends React.Component {
    constructor(props) {
      super(props)
    }

  //   render() {
  //     const comp = Telescope.components[key]
  //     const children = React.createElement(comp, {})
  //     return (
  //       <Provider store={store}>
  //         <I18nextProvider i18n={mockedI18n}>
  //           <Telescope.components.Layout showHeaderPanel={showHeaderPanel}>
  //             {children}
  //           </Telescope.components.Layout>
  //         </I18nextProvider>
  //       </Provider>
  //     )
  //   }
  }

  return withRedux(makeStore)(Common)
}
