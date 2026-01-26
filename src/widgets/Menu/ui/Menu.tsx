import { Link } from 'react-router-dom';

import { PagePaths } from '@/shared/config/routerConfig/routerConfig.tsx';
import { Button } from '@/shared/ui/Button/Button.tsx';

import PolygonSvg from '@icons/polygon-bottom.svg?react';
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
    <div className={cls.menu}>
      <Button type={'green'} Icon={<ShieldPlusIcon />} end={'от 240₽'}>
        Купить подписку
      </Button>
      <div className={cls.setting}>
        {first && (
          <p className={cls.message}>
            Сначала нужно настроить VPN на вашем устройстве
            <PolygonSvg className={cls.polygon} />
          </p>
        )}
        <Button
          as={Link}
          to={PagePaths.SUBSCRIPTION}
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
    </div>
  );
};
