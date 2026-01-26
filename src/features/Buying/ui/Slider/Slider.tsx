import RcSlider from 'rc-slider';
import { useState } from 'react';

import 'rc-slider/assets/index.css';
import  './Slider.css'
const marks = {
  0: '1',
  100: '2',
};
export const Slider = () => {
  const [value, setValue] = useState(6.5);

  const handleChange = (value: number | number[]) => {
    if (typeof value === 'number') {
      setValue(value);
    }
  };

  return (
    <div className={'slider'}>
      <RcSlider
        min={0}
        max={100}
        included
        dots
        marks={marks}
        value={value}
        onChange={handleChange}
        step={null}
      />
    </div>
  );
};
