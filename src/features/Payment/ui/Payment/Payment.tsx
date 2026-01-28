import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import mir from '@/shared/assets/images/mir.png';
import sberPay from '@/shared/assets/images/sber-pay.png';
import sbp from '@/shared/assets/images/sbp.png';
import tPay from '@/shared/assets/images/t-pay.png';
import { cn } from '@/shared/lib/cn/cn.ts';
import { Box } from '@/shared/ui/Box/Box.tsx';
import { Button } from '@/shared/ui/Button/Button.tsx';

import CardSvg from '@icons/card.svg?react';

import cls from './Payment.module.css';
import {motionProps} from "@/shared/config/motion/presets.ts";

const payment = [
  {
    src: tPay,
    title: 'T-Pay',
  },
  {
    src: sberPay,
    title: 'SberPay',
  },
  {
    src: sbp,
    title: 'СБП',
  },
  {
    src: mir,
    title: 'Карта',
  },
];

export const Payment = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <motion.div className={cls.top} {...motionProps}>
        <h2>Оплата</h2>
        {payment.length > 0 && (
          <Link className={cls.link} to={'#'}>
            Изменить
          </Link>
        )}
      </motion.div>
      <motion.div className={cls.content} {...motionProps}>
        {payment.length === 0 && (
          <Box className={cls.box}>
            <CardSvg />
            <p>У вас еще нет добавленных способов оплаты</p>
          </Box>
        )}

        {payment.map((item, index) => (
          <Button
            className={cn(cls.button, [], {
              [cls.active]: index === activeIndex,
            })}
            variant={'gradient'}
            key={index}
            onClick={() => setActiveIndex(index)}
          >
            <img src={item.src} alt={item.title} />
            <span className={cls.title}>{item.title}</span>
          </Button>
        ))}

        <Button center={true}>Включить автопродление</Button>
        {payment.length > 0 && (
          <Button className={cls.box} center={true} variant={'green'}>
            Оплатить
          </Button>
        )}
      </motion.div>
    </>
  );
};
