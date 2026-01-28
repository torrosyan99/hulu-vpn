import type { Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';

import { PagePaths } from '@/shared/config/routerConfig/routerConfig.tsx';
import { Button } from '@/shared/ui/Button/Button.tsx';

import ArrowRightSvg from '@icons/arrow-right-2.svg?react';
import CheckSvg from '@icons/check.svg?react';
import ButtonDownloadSvg from '@icons/download-2.svg?react';
import DownloadSvg from '@icons/download.svg?react';
import ButtonPlusSvg from '@icons/plus-2.svg?react';
import PlusSvg from '@icons/plus.svg?react';
import SettingsSvg from '@icons/settings-1.svg?react';

export const installationConfig = (
  setState: Dispatch<SetStateAction<number>>,
  setModal: Dispatch<SetStateAction<boolean>>,
  activeButton: 'first' | 'second',
  setActiveButton: Dispatch<SetStateAction<'first' | 'second'>>,
) => {
  return [
    {
      title: 'Настройка на iOS',
      text: 'Настройка VPN происходит в 3 шага и занимает пару минут',
      icon: <SettingsSvg />,
      buttons: [
        <Button
          key="install-this-device"
          variant={'green-pulse'}
          as="button"
          center
          onClick={() => setState((v) => v + 1)}
        >
          Установка на этом устройстве
        </Button>,
        <Button key="install-other-device" as={Link} center to="#">
          Установить на другом устройстве
        </Button>,
      ],
    },
    {
      title: 'Приложение',
      text: 'Установите приложение v2RayTun и вернитесь к этому экрану',
      icon: <DownloadSvg />,
      buttons: [
        <Button
          key="download-app"
          variant={activeButton === 'first' ? 'green-pulse' : 'green'}
          center
          onClick={() => {
            setActiveButton('second');
            setModal(true);
          }}
        >
          <ButtonDownloadSvg />
          Установить
        </Button>,
        <Button
          key="next-step-app"
          as="button"
          center
          variant={activeButton === 'second' ? 'pulse' : 'none'}
          onClick={() => {
            setActiveButton('first');
            setState((v) => v + 1);
          }}
        >
          Далее
          <ArrowRightSvg />
        </Button>,
      ],
    },
    {
      title: 'Подписка',
      text: 'Добавьте подписку в приложение v2RayTun с помощью кнопки ниже',
      icon: <PlusSvg />,
      buttons: [
        <Button
          key="add-subscription"
          variant={activeButton === 'first' ? 'green-pulse' : 'green'}
          onClick={() => {
            setActiveButton('second');
          }}
          as={Link}
          center
          to="#"
        >
          <ButtonPlusSvg />
          Добавить
        </Button>,
        <Button
          key="next-step-subscription"
          as="button"
          variant={activeButton === 'second' ? 'pulse' : 'none'}
          center
          onClick={() => setState((v) => v + 1)}
        >
          Далее
          <ArrowRightSvg />
        </Button>,
      ],
    },
    {
      title: 'Готово!',
      text: 'Нажмите на круглую кнопку включения VPN в приложении v2RayTun',
      icon: <CheckSvg />,
      buttons: [
        <Button
          key="finish-installation"
          as={Link}
          center
          to={PagePaths.HOMEPAGE}
        >
          Завершить настройку
        </Button>,
      ],
    },
  ];
};
