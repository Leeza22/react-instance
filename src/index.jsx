import React, { memo } from 'react'
import Counter from './pages/counter'
import Layout from '@/layout'

import 'normalize.css';
import 'antd/dist/antd.css';

export default memo(function App() {
  return (
    <div>
      <Layout/>
    </div>
  )
})
