import theme from "@/app/styles/theme";
import { ButtonContainer } from "./Button.styles";
import type { ButtonProps } from "./Button.types";

export function Button({
  rightIcon,
  leftIcon,
  children,
  isDisable = false,
  radius = "default",
  variant = "default",
  color = theme.colors.bluePrimary,
  textColor = "#fff",
  ...rest
}: ButtonProps) {
  const isOutLined = variant === "outlined";

  return (
    <ButtonContainer
      disabled={isDisable}
      $radius={radius}
      $color={isDisable ? theme.colors.gray20 : color}
      $textColor={isDisable ? theme.colors.gray60 : textColor}
      $isOutLined={isOutLined}
      $isDisable={isDisable}
      aria-disabled={isDisable}
      {...rest}
    >
      {rightIcon}
      {children}
      {leftIcon}
    </ButtonContainer>
  );
}

export default Button;
