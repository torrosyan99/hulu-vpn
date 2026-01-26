import type { PropsWithChildren } from 'react';

import { cn } from '@/shared/lib/cn/cn.ts';

import cls from './Box.module.css';

interface BoxProps {
  className?: string;
}

export const Box = ({ children, className }: PropsWithChildren<BoxProps>) => {
  return <div className={cn(cls.box, [className])}>{children}</div>;
};
