import { useCopy } from '@/shared/hooks/useCopy/useCopy.tsx';
import { ChangeIcon } from '@/shared/ui/ChangeIcon/ChangeIcon.tsx';

import CheckSvg from '@icons/check-2.svg?react';
import CopySvg from '@icons/copy.svg?react';

import cls from './IdCopy.module.css';

interface IDCopyProps {
  id: string;
}

export const IdCopy = ({ id }: IDCopyProps) => {
  const { checked, onClick } = useCopy(id);
  return (
    <div className={cls.id} onClick={onClick}>
      <span>id: {id}</span>
      <ChangeIcon
        bool={checked}
        firstIcon={<CopySvg stroke={'var(--secondary-color)'} />}
        secondIcon={
          <CheckSvg width={18} height={18} stroke={'var(--secondary-color)'} />
        }
      />
    </div>
  );
};
