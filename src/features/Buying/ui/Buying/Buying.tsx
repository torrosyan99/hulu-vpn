import { motion } from 'framer-motion';
import { useState } from 'react';

import { Prices } from '@/features/Buying/ui/Prices/Prices.tsx';

import { motionProps } from '@/shared/config/motion/presets.ts';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { Text } from '@/shared/ui/Text/Text.tsx';

import { buyingConfig } from '../../config/buyingConfig.ts';
import { Slider } from '../Slider/Slider.tsx';

import cls from './Buying.module.css';

export const Buying = () => {
  const [active, setActive] = useState('1');
  const [index, setIndex] = useState(0);
  const service = buyingConfig[active];

  return (
    <>
      <div className={cls.top}>
        <h3>Покупка подписки</h3>
        <Text>
          Подключайте больше устройств и пользуйтесь VPN вместе с друзьями и
          близкими
        </Text>
      </div>
      <motion.div className={cls.buying} {...motionProps}>
        <Slider setState={(str) => setActive(str)} />
        <Prices
          {...service}
          index={index}
          setState={(index) => setIndex(index)}
        />
        <Button center={true} variant="green">
          <span>Оплатить {service.prices[index].price}</span>
          <span className={cls.oldPrice}>{service.prices[index].oldPrice}</span>
        </Button>
      </motion.div>
    </>
  );
};
