import type { ReactNode } from 'react';

import { FirstPage } from '@/pages/FirstPage';
import { HomePage } from '@/pages/HomePage';
import { SubscriptionPage } from '@/pages/SubscriptionPage';

export enum PagePaths {
  HOMEPAGE = '/',
  SUBSCRIPTION = '/subscription',
  FIRST_PAGE = '/first-page',
}

interface AppRoute {
  path: PagePaths;
  element: ReactNode;
}

export const routerConfig: AppRoute[] = [
  { path: PagePaths.HOMEPAGE, element: <HomePage /> },
  { path: PagePaths.SUBSCRIPTION, element: <SubscriptionPage /> },
  { path: PagePaths.FIRST_PAGE, element: <FirstPage /> },
];
