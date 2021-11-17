import React, { FunctionComponent, ReactElement } from 'react';
import { TouchableOpacityProps } from 'react-native';

import { useReduxSelector } from '../../../../hooks/useReduxSelector';
import { selectCounters } from '../../state/CountersSlice';
import { ICounter } from '../../state/Counter.types';

import { Container, Title, CounterValue } from './Counter.styles';

interface CounterProps extends TouchableOpacityProps {
  counter: ICounter;
}

export const Counter: FunctionComponent<CounterProps> = ({
  counter,
  ...rest
}): ReactElement => {
  const { selectedCounter } = useReduxSelector(selectCounters);
  const isActive = counter.id === selectedCounter.id;

  return (
    <Container {...rest} isActive={isActive}>
      <Title isActive={isActive}>Counter {counter.index}</Title>
      <CounterValue isActive={isActive}>{counter.counter}</CounterValue>
    </Container>
  );
};

export default Counter;
