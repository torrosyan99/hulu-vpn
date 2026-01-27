import RcSlider from 'rc-slider';
import { useState } from 'react';

import { Box } from '@/shared/ui/Box/Box.tsx';

import cls from './Slider.module.css';
import 'rc-slider/assets/index.css';
import './Slider.css';
import {Text} from "@/shared/ui/Text/Text.tsx";
import {Message} from "@/shared/ui/Message/Message.tsx";

interface SliderProps {
  setState: (state: string) => void;
}

const vibrate = (pattern: number | number[]) => {
  if ('vibrate' in navigator) {
    navigator.vibrate(pattern);
  }
};
const marks:{[key:number]:string} = {
  0: '1',
  20: '2',
  40: '3',
  60: '5',
  80: '7',
  100: '10',
};
export const Slider = ({setState}:SliderProps) => {
  const [value, setValue] = useState(0);

  const handleChange = (value: number | number[]) => {
    if (typeof value === 'number') {
      setValue(value);
      vibrate(10)
      setState(marks[value]);
    }
  };

  return (
    <Box>
      <div className={cls.top}>
        <div className={cls.num}>{marks[value]}</div>
        <div className={cls.right}>
          <h3>Устройство</h3>
          <Text>Одновременно в подписке</Text>
        </div>
      </div>
      <div className={'slider'}>
        <RcSlider
          min={0}
          max={100}
          included
          marks={marks}
          value={value}
          onChange={handleChange}
          step={null}
        />
        <Message className={cls.message} type={'gray'} >
          Потяните, чтобы изменить
        </Message>
      </div>
    </Box>
  );
};
