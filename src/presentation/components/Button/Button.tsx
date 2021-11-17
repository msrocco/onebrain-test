import React, { FunctionComponent, ReactElement } from 'react';
import { TouchableOpacityProps } from 'react-native';

import { StyledButton, ButtonText } from './Button.styles';

interface ButtonProps extends TouchableOpacityProps {
  label: string;
  width?: string;
}

export const Button: FunctionComponent<ButtonProps> = ({
  label,
  width,
  ...rest
}): ReactElement => {
  return (
    <StyledButton {...rest} width={width}>
      <ButtonText>{label}</ButtonText>
    </StyledButton>
  );
};

export default Button;
