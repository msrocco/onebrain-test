import React from 'react';
import { View } from 'react-native';

import { Button } from '../../components/Button/Button';
import CounterButton from '../../components/CounterButton/CounterButton';

import { useReduxDispatch } from '../../hooks/useReduxDispatch';
import { useReduxSelector } from '../../hooks/useReduxSelector';
import {
  addCounter,
  deleteCounter,
  selectCounters,
  incrementCounter,
  decrementCounter,
  resetCounter,
} from '../Counters/state/CountersSlice';

import {
  Container,
  CustomText,
  ButtonsContainer,
  CounterControlsContainer,
  CounterButtonContainer,
} from './Config.styles';

export const Config = () => {
  const { selectedCounter, counters } = useReduxSelector(selectCounters);
  const dispatch = useReduxDispatch();

  return (
    <Container>
      <View style={{ paddingTop: 50 }}>
        <CustomText>Counters</CustomText>
        <ButtonsContainer>
          <Button label="Add Counter" onPress={() => dispatch(addCounter())} />
          <Button
            label="Remove Counter"
            onPress={() => dispatch(deleteCounter(selectedCounter))}
          />
        </ButtonsContainer>
      </View>
      <View>
        <CustomText>Selected Counter</CustomText>
        <CounterControlsContainer>
          {counters.length === 0 ? (
            <CustomText>Counter Controls</CustomText>
          ) : (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                padding: 10,
              }}>
              <CounterButtonContainer>
                <CounterButton
                  icon="minus"
                  onPress={() => dispatch(decrementCounter(selectedCounter))}
                />
                <CounterButton
                  icon="plus"
                  onPress={() => dispatch(incrementCounter(selectedCounter))}
                />
              </CounterButtonContainer>
              <Button
                width="100%"
                label="Reset Counter"
                onPress={() => dispatch(resetCounter(selectedCounter))}
              />
            </View>
          )}
        </CounterControlsContainer>
      </View>
    </Container>
  );
};

export default Config;
