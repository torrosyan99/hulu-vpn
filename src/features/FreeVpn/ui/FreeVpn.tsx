import { cn } from '@/shared/lib/cn/cn.ts';

import ArrowRightSvg from '@icons/arrow-right.svg?react';
import LightingSvg from '@icons/lighting.svg?react';

import cls from './FreeVpn.module.css';

interface FreeVpnProps {
  className?: string;
}

export const FreeVpn = ({ className }: FreeVpnProps) => {
  return (
    <button className={cn(cls.button, [className])}>
      <LightingSvg />
      <span>Пользуйтесь VPN бесплатно</span>
      <ArrowRightSvg className={cls.arrow} />
    </button>
  );
};
