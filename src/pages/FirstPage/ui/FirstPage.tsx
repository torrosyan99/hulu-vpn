import { Menu } from '@/widgets/Menu';
import { Status } from '@/widgets/Status';

import cls from './FirstPage.module.css';

export const FirstPage = () => {
  return (
    <>
      <div className={cls.bg} />
      <Status type={'trial'} />
      <Menu first={true} />
    </>
  );
};
