import { motion } from 'framer-motion';

import { cn } from '@/shared/lib/cn/cn.ts';
import { Box } from '@/shared/ui/Box/Box.tsx';

import { getRadar } from '../lib/getRadar.tsx';

import cls from './Status.module.css';

interface StatusProps {
  type: 'warning' | 'trial' | 'first';
}

export const Status = ({ type }: StatusProps) => {
  return (
    <>
      {getRadar(type)}
      <motion.div
        className={cls.block}
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Box
          className={cn(cls.status, [], {
            [cls.first]: type === 'first',
          })}
        >
          <div className={cls.item}>
            <h4>Hulu VPN</h4>
            <div className={cls.flex}>
              <span>offline </span>
              <div className={cls.circle}></div>
              <span>4.04 Гб</span>
            </div>
          </div>
          <div className={cls.item}>
            <h4>{type === 'trial' && <span>до</span>} 1 января 2026</h4>
            {type === 'trial' && (
              <span className={cls.green}>пробный период</span>
            )}
            {type === 'warning' && (
              <span className={cls.orange}>подписка истекла</span>
            )}
          </div>
        </Box>
      </motion.div>
    </>
  );
};
