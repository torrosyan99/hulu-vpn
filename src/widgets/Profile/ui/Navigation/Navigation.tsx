import { Button } from '@/shared/ui/Button/Button.tsx';

import PaySvg from '@icons/pay.svg?react';
import TransactionsSvg from '@icons/transactions.svg?react';
import ReferalSvg from '@icons/referal.svg?react';
import NotificSvg from '@icons/notific.svg?react';
import SuppSvg from '@icons/supp.svg?react';
import DocSvg from '@icons/doc.svg?react';

import cls from './Navigation.module.css';

export const Navigation = () => {
  return (
    <div className={cls.navigation}>
      <Button variant={'gradient'} Icon={<PaySvg />}>
        Оплата
      </Button>
      <Button variant={'gradient'} Icon={<TransactionsSvg />}>
        Мои транзакции
      </Button>
      <Button variant={'gradient'} Icon={<ReferalSvg />}>
        Реферальная программа
      </Button>
      <Button variant={'gradient'} Icon={<NotificSvg />}>
        Уведомления в боте
      </Button>
      <Button variant={'gradient'} Icon={<SuppSvg />}>
        Связаться с поддержкой
      </Button>
      <Button variant={'gradient'} Icon={<DocSvg />}>
        Пользовательское соглашение
      </Button>

    </div>
  );
};
