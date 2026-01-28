import { useCallback, useRef } from 'react';
import type { MouseEvent } from 'react';

import type { Price } from '@/features/Buying/types';

import { useFeedback } from '@/shared/hooks/useFeedback/useFeedback.tsx';
import { cn } from '@/shared/lib/cn/cn.ts';
import { Box } from '@/shared/ui/Box/Box.tsx';

import cls from './Prices.module.css';

type ItemProps = Partial<Price> & {
  active: boolean;
  onClick: () => void;
};

export const Item = ({
                       title,
                       price,
                       monthPrice,
                       active,
                       onClick,
                     }: ItemProps) => {
  const spRef = useRef<HTMLSpanElement>(null);
  const timerRef = useRef<number | null>(null);
  const { click } = useFeedback();

  const resetWave = () => {
    if (!spRef.current) return;
    spRef.current.classList.remove(cls.activeSp);
    spRef.current.style.left = '';
    spRef.current.style.top = '';
  };

  const handleClick = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      const target = e.currentTarget;
      const rect = target.getBoundingClientRect();

      onClick();
      click();

      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      resetWave();

      requestAnimationFrame(() => {
        if (!spRef.current) return;

        spRef.current.style.left = `${x}px`;
        spRef.current.style.top = `${y}px`;
        spRef.current.classList.add(cls.activeSp);
      });

      timerRef.current = window.setTimeout(resetWave, 800);
    },
    [onClick, click]
  );

  return (
    <Box
      className={cn(cls.item, [], { [cls.activeBox]: active })}
      onClick={handleClick}
    >
      <div className={cn(cls.itemTop, [], { [cls.active]: active })}>
        <span className={cls.circle} />
        <span className={cls.title}>{title}</span>
      </div>

      <span ref={spRef} className={cls.sp} />

      <span className={cls.price}>{price}</span>
      <span className={cls.monthPrice}>{monthPrice}</span>
    </Box>
  );
};
