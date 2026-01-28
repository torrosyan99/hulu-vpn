import { AnimatePresence, motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ChangeIconProps {
  bool: boolean;
  firstIcon: ReactNode;
  secondIcon: ReactNode;
}

const initialExit = { opacity: 0 };
const animate = { opacity: 1 };

export const ChangeIcon = ({
  bool,
  firstIcon,
  secondIcon,
}: ChangeIconProps) => {
  return (
    <AnimatePresence mode={'wait'} initial={false}>
      <motion.span
        key={bool ?  'second': 'first'}
        initial={initialExit}
        animate={animate}
        exit={initialExit}
        transition={{ duration: 0.2 }}
      >
        {bool ? secondIcon : firstIcon}
      </motion.span>
    </AnimatePresence>
  );
};
