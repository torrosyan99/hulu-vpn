import type { ReactNode } from "react";


import { HomePage } from "@/pages/HomePage";


export enum PagePaths {
  HOMEPAGE = "/",
}

interface AppRoute {
  path: PagePaths;
  element: ReactNode;
}

export const routerConfig: AppRoute[] = [
  { path: PagePaths.HOMEPAGE, element: <HomePage /> },
];
