import { type PropsWithChildren, useEffect, useRef } from 'react';

import cls from './Message.module.css';

import { cn } from '@/shared/lib/cn/cn.ts';

import PolygonBottomSvg from '@icons/polygon-bottom.svg?react';
import PolygonTopSvg from '@icons/polygon-top.svg?react';

interface MessageProps {
  type: 'green' | 'gray' ;
  className?: string;
}

export const Message = ({
  children,
  type,
  className,
}: PropsWithChildren<MessageProps>) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function deleteMessage() {
      if (ref.current) ref.current.remove();
      document.removeEventListener('pointerdown', deleteMessage);
    }

    document.addEventListener('pointerdown', deleteMessage);

    return () => {
      document.removeEventListener('pointerdown', deleteMessage);

    }
  }, []);
  return (
    <p className={cn(cls.message, [className, cls[type]])} ref={ref}>
      {children}
      {type === 'green' && <PolygonBottomSvg className={cls.polygon} />}
      {type === 'gray' && <PolygonTopSvg className={cls.polygon} />}
    </p>
  );
};
