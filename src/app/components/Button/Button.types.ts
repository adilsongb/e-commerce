import type { ReactNode, ReactElement, ButtonHTMLAttributes } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  radius?: "circular" | "default";
  variant?: "outlined" | "default";
  color?: string;
  isDisable?: boolean;
  textColor?: string;
  rightIcon?: ReactElement;
  leftIcon?: ReactElement;
  children: ReactNode;
};
