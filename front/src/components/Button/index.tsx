import React, { ReactNode } from "react";
import { ButtonContainer, Icon } from "./style";

type Props = {
  text?: string;
  icon?: ReactNode;
  onClickAction: () => void;
  size?: "sm" | "md" | "lg" | undefined;
  color?: "primary" | "secondary" | "danger" | "success" | undefined;
  position?: "right" | "only" | undefined;
};

const Button = ({
  text,
  icon,
  onClickAction,
  size,
  color,
  position,
}: Props) => {
  return (
    <ButtonContainer onClick={() => onClickAction()} size={size} color={color}>
      {position !== "right" && <Icon position={position}>{icon}</Icon>}
      {text}
      {position === "right" && <Icon position="right">{icon}</Icon>}
    </ButtonContainer>
  );
};

export default Button;
