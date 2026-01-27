import { useRef } from 'react';
import type { MouseEvent } from 'react';

import type { Price } from '@/features/Buying/types';

import { cn } from '@/shared/lib/cn/cn.ts';
import { Box } from '@/shared/ui/Box/Box.tsx';

import cls from './Services.module.css';
import {useFeedback} from "@/shared/hooks/useFeedback/useFeedback.tsx";


export const Item = ({
  title,
  price,
  monthPrice,
  active,
  onClick,
}: Partial<Price> & {
  active: boolean;
  onClick: () => void;
}) => {
  const sp = useRef<HTMLSpanElement>(null);
    const {click} = useFeedback()
  const timerRef = useRef<ReturnType<typeof window.setTimeout> | null>(null);
  const myOnClick = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    onClick();
    click()
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (sp.current) {
      sp.current.classList.remove(cls.activeSp);
      sp.current.style.left = '';
      sp.current.style.top = '';

      requestAnimationFrame(() => {
        if (!sp.current) return;
        sp.current.style.left = `${x}px`;
        sp.current.style.top = `${y}px`;
        sp.current.classList.add(cls.activeSp);
      });

      timerRef.current = window.setTimeout(() => {
        if (sp.current) {
          sp.current.classList.remove(cls.activeSp);
          sp.current.style.left = '';
          sp.current.style.top = '';
        }
      }, 800);
    }
  };
  return (
    <Box
      className={cn(cls.item, [], { [cls.activeBox]: active })}
      onClick={myOnClick}
    >
      <div className={cn(cls.itemTop, [], { [cls.active]: active })}>
        <span className={cls.circle}></span>
        <span className={cls.title}>{title}</span>
      </div>
      <span className={cls.sp} ref={sp} />
      <span className={cls.price}>{price}</span>
      <span className={cls.monthPrice}>{monthPrice}</span>
    </Box>
  );
};
