import type { ReactNode } from 'react';

import { FirstPage } from '@/pages/FirstPage';
import { HomePage } from '@/pages/HomePage';
import { SubscriptionPage } from '@/pages/SubscriptionPage';
import {InstallationPage} from "@/pages/InstallationPage";

export enum PagePaths {
  HOMEPAGE = '/',
  SUBSCRIPTION = '/subscription',
  FIRST_PAGE = '/first-page',
  INSTALLATION ='/installation',
}

interface AppRoute {
  path: PagePaths;
  element: ReactNode;
}

export const routerConfig: AppRoute[] = [
  { path: PagePaths.HOMEPAGE, element: <HomePage /> },
  { path: PagePaths.SUBSCRIPTION, element: <SubscriptionPage /> },
  { path: PagePaths.FIRST_PAGE, element: <FirstPage /> },
  { path: PagePaths.INSTALLATION, element: <InstallationPage /> },
];
