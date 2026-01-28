import { type Dispatch, type SetStateAction, useState } from 'react';

import { cn } from '@/shared/lib/cn/cn.ts';

import IndicatorOffSvg from '@icons/indicator-off.svg?react';
import IndicatorOnSvg from '@icons/indicator-on.svg?react';

import cls from './Switcher.module.css';

interface SwitcherProps {
  onClick?: Dispatch<SetStateAction<boolean>>;
  initialState?:boolean;
}

export const Switcher = ({ onClick, initialState=false }: SwitcherProps) => {
  const [on, setOn] = useState(initialState);
  const divOnClick = () => {
    if (onClick) onClick(!on);
    setOn(!on);
  };
  return (
    <div
      onClick={divOnClick}
      className={cn(cls.switcher, [], {
        [cls.on]: on,
      })}
    >
      <IndicatorOnSvg />
      <IndicatorOffSvg />
      <div className={cls.circle} />
    </div>
  );
};
