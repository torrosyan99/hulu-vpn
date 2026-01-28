import { Radar } from '../ui/Radar/Radar.tsx';

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
  }
}
