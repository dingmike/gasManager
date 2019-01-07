/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const tableRouter = {
  path: '/gasPriceManage',
  component: Layout,
  redirect: '/gasPriceManage/complex-table',
  name: 'GasPriceManage',
  meta: {
    title: 'GasPriceManage',
    icon: 'table'
  },
  children: [
    {
      path: 'unified-price',
      component: () => import('@/views/gasPriceManage/unifiedPrice'),
      name: 'UnifiedPrice',
      meta: { title: 'UnifiedPrice' }
    },
    {
      path: 'point-price',
      component: () => import('@/views/gasPriceManage/pointPrice'),
      name: 'PointPrice',
      meta: { title: 'PointPrice' }
    }
  ]
}
export default tableRouter
