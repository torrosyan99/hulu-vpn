import ArrowRightSvg from '@icons/arrow-right.svg?react';
import LightingSvg from '@icons/lighting.svg?react';

import cls from './FreeVpn.module.css';

export const FreeVpn = () => {
  return (
    <>
      <button className={cls.button}>
        <LightingSvg />
        <span>Пользуйтесь VPN бесплатно</span>
        <ArrowRightSvg className={cls.arrow} />
      </button>
    </>
  );
};
