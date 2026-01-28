import { AnimatePresence, motion } from 'framer-motion';
import { type PropsWithChildren, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { cn } from '@/shared/lib/cn/cn.ts';

import CloseCircleIcon from '@icons/close.svg?react';

import cls from './Modal.module.css';

interface ModalProps {
  isOpen: boolean;
  className?: string;
  onClose: () => void;
}

const overlayV = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const contentV = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 16, scale: 0.98 },
};

export const Modal = ({
  isOpen,
  onClose,
  children,
  className,
}: PropsWithChildren<ModalProps>) => {
  useEffect(() => {
    if (!isOpen) return;

    document.body.classList.add('body-overflow');

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.classList.remove('body-overflow');
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onClose]);

  console.log(isOpen);
  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={cls.overlay}
          onClick={onClose}
          variants={overlayV}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.18 }}
        >
          <motion.div
            className={cn(cls.content, [className])}
            variants={contentV}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: 'spring', stiffness: 420, damping: 32 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={cls.close} onClick={onClose} type="button">
              <CloseCircleIcon />
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
};
