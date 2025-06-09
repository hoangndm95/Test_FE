import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';

const NotFound = lazy(() => import('@/pages/NotFound'));

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];
