import { motion } from 'framer-motion';
import { useState } from 'react';

import { Button } from '@/shared/ui/Button/Button.tsx';
import { Text } from '@/shared/ui/Text/Text.tsx';

import { buyingConfig } from '../../config/buyingConfig.ts';
import { Services } from '../Services/Services.tsx';
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
      <motion.div
        className={cls.buying}
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Slider setState={(str) => setActive(str)} />
        <Services
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
