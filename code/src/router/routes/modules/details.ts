import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const DETAILS: AppRouteRecordRaw = {
  path: '/details',
  name: 'details',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.details',
    requiresAuth: true,
    icon: 'icon-relation',
    order: 1,
  },
  children: [
    {
      path: 'basic',
      name: 'Basic',
      component: () => import('@/views/details/basic/index.vue'),
      meta: {
        locale: 'menu.details.basic',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'graph',
      name: 'Graph',
      component: () => import('@/views/details/graph/index.vue'),
      meta: {
        locale: 'menu.details.graph',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'comments',
      name: 'Comments',
      component: () => import('@/views/details/comments/index.vue'),
      meta: {
        locale: 'menu.details.comments',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default DETAILS;
