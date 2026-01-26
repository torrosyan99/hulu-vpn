import { Menu } from '@/widgets/Menu';
import { Status } from '@/widgets/Status/ui/Status.tsx';

import cls from './FirstPage.module.css';

export const FirstPage = () => {
  return (
    <>
      <div className={cls.bg} />
      <Status type={'first'} />
      <Menu first={true} />
    </>
  );
};
