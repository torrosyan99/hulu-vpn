import { cn } from '@/shared/lib/cn/cn.ts';

import ArrowRightSvg from '@icons/arrow-right.svg?react';
import LightingSvg from '@icons/lighting.svg?react';

import cls from './FreeVpn.module.css';
import {ReferralModal} from "@/widgets/Profile";
import {useState} from "react";

interface FreeVpnProps {
  className?: string;
}

export const FreeVpn = ({ className }: FreeVpnProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  return (
    <>
      <button className={cn(cls.button, [className])} onClick={onClick}>
        <LightingSvg />
        <span>Пользуйтесь VPN бесплатно</span>
        <ArrowRightSvg className={cls.arrow} />
      </button>
      <ReferralModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};
