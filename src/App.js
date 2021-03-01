import React, { memo, Suspense } from 'react'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'

import routes from './router'
import store from './store'

import HXAppHeader from '@/components/app-header'
import HXAppFooter from '@/components/app-footer'

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <HXAppHeader/>
        <Suspense fallback={<div>loading...</div>}>
        {renderRoutes(routes)}
        </Suspense>
        <HXAppFooter/>
      </HashRouter>
    </Provider>
  )
})
