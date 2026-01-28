import type { PropsWithChildren } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

import { cn } from '@/shared/lib/cn/cn.ts';

import cls from './Radar.module.css';
import 'react-circular-progressbar/dist/styles.css';

interface RadarProps {
  progress: number;
}

export const Radar = ({
  progress,
  children,
}: PropsWithChildren<RadarProps>) => {
  return (
    <div className={cls.radar}>
      <span className={cn(cls.wave, [cls.first])} />
      <span className={cn(cls.wave, [cls.second])} />
      <span className={cn(cls.wave, [cls.last])}>
        <CircularProgressbar
          styles={buildStyles({
            trailColor: 'rgba(255, 255, 255, 0.3)',
            pathColor: '#3FD590',
          })}
          strokeWidth={0.5}
          value={progress}
        />
      </span>
      <span className={cls.center}>{children}</span>
    </div>
  );
};
