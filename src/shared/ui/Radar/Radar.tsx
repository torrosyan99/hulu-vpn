import type { PropsWithChildren } from 'react';

import { cn } from '@/shared/lib/cn/cn.ts';

import cls from './Radar.module.css';

interface RadarProps {
  className?: string;
}

export const Radar = ({
  className,
  children,
}: PropsWithChildren<RadarProps>) => {

  const arr = Array.from({length: 3});
  return (
    <div className={cn(cls.radar, [className])}>
      {arr.map((_, index) => (
          <span key={index} className={cls.wave} style={{
            animationDelay: `${index}s`,
          }} />
        ))}

      <div className={cls.center}>{children}</div>
    </div>
  );
};
