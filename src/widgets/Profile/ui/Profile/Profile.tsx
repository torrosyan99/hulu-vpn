import { IdCopy } from '@/shared/ui/IdCopy/IdCopy.tsx';

import { Navigation } from '../Navigation/Navigation.tsx';

import cls from './Profile.module.css';

export const Profile = () => {
  return (
    <>
      <div className={cls.top}>
        <h2>Yura Streltsov</h2>
        <IdCopy id={'20878612'} />
      </div>
      <Navigation />
    </>
  );
};
