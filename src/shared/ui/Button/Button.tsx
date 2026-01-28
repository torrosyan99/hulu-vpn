import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

import { cn } from '@/shared/lib/cn/cn.ts';

import cls from './Button.module.css';

type ButtonProps<T extends ElementType> = {
  as?: T;
  className?: string;
  center?: boolean;
  variant?: 'none' | 'green';
  Icon?: ReactNode;
  end?: string;
} & ComponentPropsWithoutRef<T>;

export const Button = <T extends ElementType>({
  as,
  className,
  children,
  center,
  Icon,
  end,
  variant = 'none',
  ...otherProps
}: ButtonProps<T>) => {
  const Component = as || 'button';
  return (
    <Component
      className={cn(cls.button, [className, cls[variant]], {
        [cls.center]: center,
      })}
      {...otherProps}
    >
      {Icon}
      {children}
      {end && <span className={cls.end}>{end}</span>}
    </Component>
  );
};
