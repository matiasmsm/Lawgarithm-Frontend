import { StyledButton } from "./styles";
import { ButtonProps } from "../types";

export const Button = ({
  color,
  fixedWidth,
  children,
  onClick,
  disabled, // Add this
}: ButtonProps) => (
  <StyledButton
    color={color}
    fixedWidth={fixedWidth}
    onClick={onClick}
    disabled={disabled} // Pass this
  >
    {children}
  </StyledButton>
);
