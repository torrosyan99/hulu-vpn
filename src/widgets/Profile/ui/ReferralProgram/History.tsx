import { Link } from 'react-router-dom';

import ArrowActionSvg from '@icons/arrow-action.svg?react';
import NotesSvg from '@icons/notes.svg?react';

import cls from './ReferralProgram.module.css';

const history = [
  {
    title: 'lina',
    link: '@weerller',
    days: '+ 5 дней',
    date: '24 ноября 2025 ',
  },
  {
    title: 'lina',
    link: '@weerller',
    days: '+ 5 дней',
    date: '24 ноября 2025 ',
  },
  {
    title: 'lina',
    link: '@weerller',
    days: '+ 5 дней',
    date: '24 ноября 2025 ',
  },
  {
    title: 'lina',
    link: '@weerller',
    days: '+ 5 дней',
    date: '24 ноября 2025 ',
  },
  {
    title: 'lina',
    link: '@weerller',
    days: '+ 5 дней',
    date: '24 ноября 2025 ',
  },
  {
    title: 'lina',
    link: '@weerller',
    days: '+ 5 дней',
    date: '24 ноября 2025 ',
  },
];

export const History = () => {
  return (
    <div className={cls.block}>
      <h5>История начислений:</h5>
      <div className={cls.box}>
        <NotesSvg />
        <p>Здесь будут отображаться последние покупки ваших рефералов</p>
      </div>
      <ul className={cls.list}>
        {history.map((item, index) => (
          <li className={cls.item} key={index}>
            <div className={cls.left}>
              <h6>{item.title}</h6>
              <Link className={cls.link} to={`#`}>
                <span>{item.link}</span>
                <ArrowActionSvg />
              </Link>
            </div>
            <div className={cls.right}>
              <span className={cls.days}>{item.days}</span>
              <span className={cls.date}>{item.date}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
