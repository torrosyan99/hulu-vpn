import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { motionProps } from '@/shared/config/motion/presets.ts';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { Copy } from '@/shared/ui/Copy/Copy.tsx';
import { IdCopy } from '@/shared/ui/IdCopy/IdCopy.tsx';

import DevicesSvg from '@icons/devices.svg?react';

import { Navigation } from '../Navigation/Navigation.tsx';

import cls from './Profile.module.css';

export const Profile = () => {
  return (
    <motion.div className={cls.profile} {...motionProps}>
      <div className={cls.top}>
        <h2>Yura Streltsov</h2>
        <IdCopy id={'20878612'} />
      </div>
      <Navigation />
      <div className={cls.bottom}>
        <p className={cls.text}>Ссылка на подписку для ручного ввода:</p>
        <Copy text={'https://ultm.app/bGTEpENV'} />
        <Button as={Link} to={'#'} Icon={<DevicesSvg />} center={true}>
          Инструкция для всех платформ
        </Button>
      </div>
    </motion.div>
  );
};
