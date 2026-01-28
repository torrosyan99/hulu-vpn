import type { Dispatch, SetStateAction } from 'react';

import { Item } from '@/features/Buying/ui/Prices/Item.tsx';

import type { Prices as PricesType } from '../../types';

import cls from './Prices.module.css';

interface PricesProps extends PricesType {
  setState: Dispatch<SetStateAction<number>>;
  index: number;
}

export const Prices = ({ prices, setState, index }: PricesProps) => {
  return (
    <div className={cls.services}>
      {prices.map((price, i) => (
        <Item
          key={i}
          {...price}
          active={i === index}
          onClick={() => setState(i)}
        />
      ))}
    </div>
  );
};
