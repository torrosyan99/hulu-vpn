import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { PagePaths } from '@/shared/config/routerConfig/routerConfig.tsx';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { Message } from '@/shared/ui/Message/Message.tsx';

import SettingsSvg from '@icons/settings.svg?react';
import ShieldPlusIcon from '@icons/shield-plus.svg?react';
import SupportSvg from '@icons/support.svg?react';
import UserSvg from '@icons/user.svg?react';

import cls from './Menu.module.css';

interface MenuProps {
  first?: boolean;
}

export const Menu = ({ first }: MenuProps) => {
  return (
    <motion.div
      className={cls.menu}
      initial={!first && { y: 24, opacity: 0 }}
      animate={!first && { y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Button
        as={Link}
        to={PagePaths.SUBSCRIPTION}
        variant={'green'}
        Icon={<ShieldPlusIcon />}
        end={'от 240₽'}
      >
        Купить подписку
      </Button>
      <div className={cls.setting}>
        {first && (
          <Message className={cls.message} type={'green'}>
            Сначала нужно настроить VPN на вашем устройстве
          </Message>
        )}
        <Button
          as={Link}
          to={PagePaths.INSTALLATION}
          Icon={<SettingsSvg />}
          end={'для iOS'}
        >
          Установка и настройка
        </Button>
      </div>
      <Button className={cls.button} Icon={<UserSvg />}>
        Профиль
      </Button>
      <Button className={cls.button} Icon={<SupportSvg />}>
        Поддержка
      </Button>
    </motion.div>
  );
};
