import type {PropsWithChildren} from "react";
import cls from './Text.module.css'
import {cn} from "@/shared/lib/cn/cn.ts";

interface TextProps {
  className?: string
}

export const Text = ({children, className}:PropsWithChildren<TextProps>) => {
  return (
    <p className={cn(cls.text, [className])}>
      {children}
    </p>
  );
};
