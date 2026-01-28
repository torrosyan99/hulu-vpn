import { Button } from '@/shared/ui/Button/Button.tsx';

import DocSvg from '@icons/doc.svg?react';
import PaySvg from '@icons/pay.svg?react';
import SuppSvg from '@icons/supp.svg?react';

import { ReferralProgram } from '../ReferralProgram/ReferralProgram.tsx';
import { Transaction } from '../Transaction/Transaction.tsx';
import { Notification } from '../Notification/Notification.tsx';

import cls from './Navigation.module.css';

export const Navigation = () => {
  return (
    <div className={cls.navigation}>
      <Button variant={'gradient'} Icon={<PaySvg />}>
        Оплата
      </Button>
      <Transaction />
      <ReferralProgram />
      <Notification />
      <Button variant={'gradient'} Icon={<SuppSvg />}>
        Связаться с поддержкой
      </Button>
      <Button variant={'gradient'} Icon={<DocSvg />}>
        Пользовательское соглашение
      </Button>
    </div>
  );
};
