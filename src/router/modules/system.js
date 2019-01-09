/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const tableRouter = {
  path: '/system',
  component: Layout,
  redirect: '/system/roles',
  name: 'System',
  meta: {
    title: 'System',
    icon: 'table',
    roles: ['admin', 'editor', 'Operations Department Daily']
  },
  children: [
    {
      path: 'roles',
      component: () => import('@/views/system/roles'),
      name: 'Roles',
      meta: {
        title: 'Roles',
        roles: ['admin', 'Operations Department Daily']
      }
    },
    {
      path: 'point-price',
      component: () => import('@/views/gasPriceManage/pointPrice'),
      name: 'PointPrice',
      meta: {
        title: 'PointPrice',
        roles: ['admin', 'editor', 'Operations Department Daily']
      }
    }
  ]
}
export default tableRouter
