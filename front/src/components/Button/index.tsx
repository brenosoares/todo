import React, { ReactNode } from 'react'
import { ButtonContainer, Icon } from './style'

type Props = {
    text?: string,
    icon?: ReactNode,
    onClick?: () => void
    size?: "sm" | "md" | "lg" | undefined
    color?: "primary" | "secondary" | "danger" | undefined,
    position?: "rigth" | "only" | undefined,
}

const Button = ({text, icon, onClick, size, color, position}: Props) => {
  return (
    <ButtonContainer onClick={() => onClick} size={size} color={color} >
        {position !== 'rigth' && <Icon position={position}>{icon}</Icon>}
        {text}
        {position === 'rigth' && <Icon position='right'>{icon}</Icon>}
    </ButtonContainer>
  )
}

export default Button
