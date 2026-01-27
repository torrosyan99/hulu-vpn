import type { PropsWithChildren, MouseEvent } from 'react';

import { cn } from '@/shared/lib/cn/cn.ts';

import cls from './Box.module.css';

interface BoxProps {
  className?: string;
  onClick?: (e:MouseEvent<HTMLDivElement>) => void;
}

export const Box = ({ children, className, onClick }: PropsWithChildren<BoxProps>) => {
  return <div className={cn(cls.box, [className])} onClick={onClick}>{children}</div>;
};
