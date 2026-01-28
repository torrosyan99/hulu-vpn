import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import Confetti from 'react-confetti';
import { Link } from 'react-router-dom';
import { useWindowSize } from 'react-use';

import { motionProps } from '@/shared/config/motion/presets.ts';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { Modal } from '@/shared/ui/Modal/Modal.tsx';
import { Text } from '@/shared/ui/Text/Text.tsx';

import { installationConfig } from '../../config/installationConfig.tsx';
import { Radar } from '../Radar/Radar.tsx';

import cls from './Installation.module.css';

const initialExit = { scale: 0.7, opacity: 0 };
const animate = { scale: 1, opacity: 1 };

export const Installation = () => {
  const [index, setIndex] = useState(0);
  const { width, height } = useWindowSize();
  const [showModal, setShowModal] = useState(false);
  const [activeButton, setActiveButton] = useState<'first' | 'second'>('first');
  const config = useMemo(
    () =>
      installationConfig(setIndex, setShowModal, activeButton, setActiveButton),
    [activeButton],
  );
  const item = config[index];
  const onClose = () => setShowModal(false);
  return (
    <>
      <Modal className={cls.modal} isOpen={showModal} onClose={onClose}>
        <div>
          <h3>Важная информация</h3>
          <Text className={cls.modalText}>
            После установки приложения v2RayTun, обазательно вернитесь на этот
            экран и нажмите «Далее», чтобы добавить конфигурацию в приложение,
            без этого VPN работать не будет
          </Text>
        </div>
        <Button as={Link} variant={'green'} to={'https://google.com'}>
          Хорошо, перейти к установке
        </Button>
      </Modal>
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
      {index === config.length - 1 && (
        <Confetti width={width} height={height}    numberOfPieces={250}
                  recycle={false} />
      )}
    </>
  );
};
