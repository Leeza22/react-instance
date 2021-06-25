import { lazy } from 'react'

import Home from '@/pages/home'
// 如果父级和子级路由都是用lazy、suspense会导致子级路由不会渲染

const routes = [
  // 根域名
  {
    path: '/',
    exact: true,
    component: Home
  },
  // 一级路由表
  {
    path: '/home',
    component: lazy(() => import('@/pages/home')),
    routes: [
      {
        path: '/home/bar',
        component: lazy(() => import('@/pages/home/Bar'))
      },
      {
        path: '/home/foo',
        component: lazy(() => import('@/pages/home/Foo'))
      }
    ]
  },
  {
    path: '/counter',
    component: lazy(() => import('@/pages/counter'))
  }
]

export default routes