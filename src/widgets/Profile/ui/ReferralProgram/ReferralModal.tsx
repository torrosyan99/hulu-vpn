import {Modal} from "@/shared/ui/Modal/Modal.tsx";
import {Text} from "@/shared/ui/Text/Text.tsx";
import {Copy} from "@/shared/ui/Copy/Copy.tsx";
import {History} from "@/widgets/Profile/ui/ReferralProgram/History.tsx";

import cls from "./ReferralProgram.module.css";
interface ReferralModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReferralModal = ({isOpen, onClose}:ReferralModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={cls.block}>
        <h4>Реферальная программа</h4>
        <Text className={cls.text}>
          За каждого друга вы получите <span> 15% бонусных дней</span> от всех
          его пополнений.
        </Text>
        <p className={cls.friends}>Друзей приглашено: 0</p>
      </div>
      <div className={cls.block}>
        <h5>Ваша реферальная ссылка:</h5>
        <Copy text={'https://ultm.app/bGTEpENV'} />
      </div>
      <History />
    </Modal>
  );
};
