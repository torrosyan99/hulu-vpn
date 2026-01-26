import type {PropsWithChildren} from "react";
import cls from './Text.module.css'

export const Text = ({children}:PropsWithChildren) => {
  return (
    <p className={cls.text}>
      {children}
    </p>
  );
};
