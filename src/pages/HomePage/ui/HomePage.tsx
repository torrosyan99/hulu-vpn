import { Menu } from '@/widgets/Menu';
import { Status } from '@/widgets/Status';

import { FreeVpn } from '@/features/FreeVpn';

import WorldMapSvg from '@icons/world-map.svg?react';

import cls from './HomePage.module.css';

export const HomePage = () => {
  return (
    <>
      <WorldMapSvg className={cls.svg} />
      <FreeVpn className={cls.freeVpn} />
      <Status type={'trial'} />
      <Menu />
    </>
  );
};
