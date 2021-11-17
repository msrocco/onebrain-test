import React, { FunctionComponent, ReactElement } from 'react';
import { TouchableOpacityProps } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import { StyledButton } from './CounterButton.styles';

interface ButtonProps extends TouchableOpacityProps {
  icon: string;
}

export const CounterButton: FunctionComponent<ButtonProps> = ({
  icon,
  ...rest
}): ReactElement => {
  return (
    <StyledButton {...rest}>
      <Icon name={icon} size={20} color="#17457d" />
    </StyledButton>
  );
};

export default CounterButton;
