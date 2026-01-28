import { useState } from 'react';

import { Button } from '@/shared/ui/Button/Button.tsx';
import { Modal } from '@/shared/ui/Modal/Modal.tsx';

import TransactionsSvg from '@icons/transactions.svg?react';

import cls from './Transaction.module.css';

const transaction = [
  {
    title: '1 месяц 1 устройство',
    date: '24 ноября 2025 ',
    price:'199₽'
  },
  {
    title: '1 месяц 1 устройство',
    date: '24 ноября 2025 ',
    price:'199₽'
  },
  {
    title: '1 месяц 1 устройство',
    date: '24 ноября 2025 ',
    price:'199₽'
  },
  {
    title: '1 месяц 1 устройство',
    date: '24 ноября 2025 ',
    price:'199₽'
  },  {
    title: '1 месяц 1 устройство',
    date: '24 ноября 2025 ',
    price:'199₽'
  }
];

export const Transaction = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  return (
    <>
      <Button variant={'gradient'} onClick={onClick} Icon={<TransactionsSvg />}>
        Мои транзакции
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <h4>Мои транзакции</h4>
        <ul className={cls.list}>
          {transaction.map((item, index) => (
            <li className={cls.item} key={index}>
              <div className={cls.left}>
                <h6>{item.title}</h6>
                <span className={cls.date}>
                  {item.date}
                </span>
              </div>
              <span className={cls.price}>199₽</span>
            </li>
          ))}
        </ul>
      </Modal>
    </>
  );
};
