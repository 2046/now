import { lazy } from 'react'

export default [
  {
    path: '/',
    component: lazy(() => import('@/pages/Home'))
  }
]
