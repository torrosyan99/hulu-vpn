import type { PropsWithChildren } from 'react';

import { cn } from '@/shared/lib/cn/cn.ts';

import cls from './Radar.module.css';

interface RadarProps {
  className?: string;
  waves?: number;
}

export const Radar = ({
  className,
  children,
  waves = 3,
}: PropsWithChildren<RadarProps>) => {

  const arr = Array.from({length: waves});
  return (
    <div className={cn(cls.radar, [className])}>
      {arr.map((_, index) => (
          <span key={index} className={cls.circle} style={{
            animationDelay: `${(3 / waves) * index}s`,
          }} />
        ))}

      <div className={cls.center}>{children}</div>
    </div>
  );
};
