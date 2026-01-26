import WorldMapSvg from '@icons/world-map.svg?react';

import { Menu } from '@/widgets/Menu';

import { FreeVpn } from '@/features/FreeVpn';

import cls from './HomePage.module.css';

export const HomePage = () => {
  return (
    <>
      <WorldMapSvg className={cls.svg} />
      <FreeVpn />
      <Menu />
    </>
  );
};
