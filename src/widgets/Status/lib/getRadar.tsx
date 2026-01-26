import firstImage from '@/shared/assets/images/first-image.png';
import { Radar } from '@/shared/ui/Radar/Radar.tsx';

import ShieldCheckSvg from '@icons/shield-check.svg?react';
import ShieldWarningSvg from '@icons/shield-warning.svg?react';

export function getRadar(type: 'warning' | 'trial' | 'first') {
  switch (type) {
    case 'trial':
      return (
        <Radar>
          <ShieldCheckSvg />
        </Radar>
      );
    case 'warning':
      return (
        <Radar>
          <ShieldWarningSvg />{' '}
        </Radar>
      );
    case 'first':
      return <img src={firstImage} alt={'img'} />;
  }
}
