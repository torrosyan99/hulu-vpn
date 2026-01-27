import { motion } from 'framer-motion';
import { useState } from 'react';

import { Button } from '@/shared/ui/Button/Button.tsx';

import { buyingConfig } from '../../config/buyingConfig.ts';
import { Services } from '../Services/Services.tsx';
import { Slider } from '../Slider/Slider.tsx';

import cls from './Buying.module.css';

export const Buying = () => {
  const [active, setActive] = useState('1');
  const [index, setIndex] = useState(0);
  const service = buyingConfig[active];

  return (
    <motion.div
      className={cls.buying}
      initial={{ y: 24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: .6, ease: 'easeOut' }}
    >
      <Slider setState={(str) => setActive(str)} />
      <Services
        {...service}
        index={index}
        setState={(index) => setIndex(index)}
      />
      <Button center={true} type="green">
        <span>Оплатить {service.prices[index].price}</span>
        <span className={cls.oldPrice}>{service.prices[index].oldPrice}</span>
      </Button>
    </motion.div>
  );
};
