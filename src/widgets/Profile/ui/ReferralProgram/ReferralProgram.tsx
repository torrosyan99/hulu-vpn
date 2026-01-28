import { useState } from 'react';

import { Button } from '@/shared/ui/Button/Button.tsx';
import { Copy } from '@/shared/ui/Copy/Copy.tsx';
import { Modal } from '@/shared/ui/Modal/Modal.tsx';
import { Text } from '@/shared/ui/Text/Text.tsx';

import ReferralSvg from '@icons/referal.svg?react';

import { History } from './History.tsx';

import cls from './ReferralProgram.module.css';

export const ReferralProgram = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  return (
    <>
      <Button variant={'gradient'} onClick={onClick} Icon={<ReferralSvg />}>
        Реферальная программа
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <div className={cls.block}>
          <h4>Реферальная программа</h4>
          <Text className={cls.text}>
            За каждого друга вы получите <span> 15% бонусных дней</span> от всех
            его пополнений.
          </Text>
          <p className={cls.friends}>Друзей приглашено: 0</p>
        </div>
        <div className={cls.block}>
          <h5>Ваша реферальная ссылка:</h5>
          <Copy text={'https://ultm.app/bGTEpENV'} />
        </div>
        <History />
      </Modal>
    </>
  );
};
