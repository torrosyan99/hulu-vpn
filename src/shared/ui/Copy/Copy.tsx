import { useCopy } from '@/shared/hooks/useCopy/useCopy.tsx';
import { ChangeIcon } from '@/shared/ui/ChangeIcon/ChangeIcon.tsx';

import CheckSvg from '@icons/check-2.svg?react';
import CopySvg from '@icons/copy.svg?react';

import cls from './Copy.module.css';

interface CopyProps {
  text: string;
}

export const  Copy = ({ text }: CopyProps) => {
  const { onClick, checked } = useCopy(text);
  return (
    <div className={cls.copy} onClick={onClick}>
      <span className={cls.text}>{text}</span>
      <ChangeIcon
        bool={checked}
        firstIcon={<CopySvg className={cls.icon}  width={20} height={20} stroke="white" />}
        secondIcon={<CheckSvg className={cls.icon}  stroke="white" />}
      />
    </div>
  );
};
