import { Link } from 'react-router-dom';

import { PagePaths } from '@/shared/config/routerConfig/routerConfig.tsx';
import { Button } from '@/shared/ui/Button/Button.tsx';

import DocSvg from '@icons/doc.svg?react';
import PaySvg from '@icons/pay.svg?react';
import SuppSvg from '@icons/supp.svg?react';

import { Notification } from '../Notification/Notification.tsx';
import { ReferralProgram } from '../ReferralProgram/ReferralProgram.tsx';
import { Transaction } from '../Transaction/Transaction.tsx';

import cls from './Navigation.module.css';

export const Navigation = () => {
  return (
    <div className={cls.navigation}>
      <Button
        as={Link}
        to={PagePaths.PAYMENT}
        variant={'gradient'}
        Icon={<PaySvg />}
      >
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
