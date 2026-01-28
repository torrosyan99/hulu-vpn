import { useState } from 'react';

import { Button } from '@/shared/ui/Button/Button.tsx';
import { Modal } from '@/shared/ui/Modal/Modal.tsx';
import { Text } from '@/shared/ui/Text/Text.tsx';

import NotificSvg from '@icons/notific.svg?react';

import cls from './Notification.module.css';
import {Switcher} from "@/shared/ui/Switcher/Switcher.tsx";

export const Notification = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  return (
    <>
      <Button variant={'gradient'} onClick={onClick} Icon={<NotificSvg />}>
        Уведомления в боте
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <div className={cls.top}>
          <h4>Мои транзакции</h4>
          <Text className={cls.text}>
            Оповещения о регистрации и оплате подписки по вашей реферальной
            ссылке.
          </Text>
        </div>
        <div className={cls.switchers}>
          <div className={cls.item}>
            <h5>Регистрация в боте</h5>
            <Switcher initialState={true} onClick={(bool) => console.log(bool)}/>
          </div>
          <div className={cls.item}>
            <h5>Успешная оплата</h5>
            <Switcher  onClick={(bool) => console.log(bool)}/>
          </div>
        </div>
      </Modal>
    </>
  );
};
