import { Item } from '@/features/Buying/ui/Services/Item.tsx';


import type { Service } from '../../types';

import cls from './Services.module.css';

interface ServicesProps extends Service {
  setState: (index:number) => void;
  index: number;
}

export const Services = ({
  prices,
  setState,
  index,
}:ServicesProps) => {
  return (
    <div className={cls.services}>
      {prices.map((price, i) => (
        <Item key={i} {...price} active={i === index} onClick={() => setState(i)} />
      ))}
    </div>
  );
};
