import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';

import { motionProps } from '@/shared/config/motion/presets.ts';
import { Text } from '@/shared/ui/Text/Text.tsx';

import { installationConfig } from '../../config/installationConfig.tsx';
import { Radar } from '../Radar/Radar.tsx';

import cls from './Installation.module.css';

const initialExit = { scale: 0.7, opacity: 0 };
const animate = { scale: 1, opacity: 1 };

export const Installation = () => {
  const [index, setIndex] = useState(0);
  const config = useMemo(() => installationConfig(setIndex), []);
  const item = config[index];
  return (
    <>
      <Radar progress={(index / (config.length - 1)) * 100}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={index}
            initial={initialExit}
            animate={animate}
            exit={initialExit}
            transition={{ duration: 0.18 }}
          >
            {item.icon}
          </motion.div>
        </AnimatePresence>
      </Radar>
      <motion.div className={cls.info} {...motionProps}>
        <h3>{item.title}</h3>
        <Text className={cls.text}>{item.text}</Text>
        <div className={cls.buttons}>{item.buttons}</div>
      </motion.div>
    </>
  );
};
