import { Item } from '@/features/Buying/ui/Services/Item.tsx';


import type { Service } from '../../types';

import cls from './Services.module.css';

export const Services = ({
  prices,
  setState,
  index,
}: Service & {
  setState: (index: number) => void;
  index: number;
}) => {
  return (
    <div className={cls.services}>
      {prices.map((price, i) => (
        <Item key={i} {...price} active={i === index} onClick={() => setState(i)} />
      ))}
    </div>
  );
};
