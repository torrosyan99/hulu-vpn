import { Buying } from '@/features/Buying';

import { Text } from '@/shared/ui/Text/Text.tsx';

import cls from './SubscriptionWidget.module.css';

export const SubscriptionWidget = () => {
  return (
    <>
      <div className={cls.top}>
        <h3>Покупка подписки</h3>
        <Text>
          Подключайте больше устройств и пользуйтесь VPN вместе с друзьями и
          близкими
        </Text>
      </div>
      <Buying />
    </>
  );
};
