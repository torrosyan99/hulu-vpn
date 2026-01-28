import { useState } from 'react';

import { ReferralModal } from '@/widgets/Profile/ui/ReferralProgram/ReferralModal.tsx';

import { Button } from '@/shared/ui/Button/Button.tsx';

import ReferralSvg from '@icons/referal.svg?react';

export const ReferralProgram = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  return (
    <>
      <Button variant={'gradient'} onClick={onClick} Icon={<ReferralSvg />}>
        Реферальная программа
      </Button>
      <ReferralModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};
