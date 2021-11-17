import React from 'react';
import { Text, FlatList } from 'react-native';
import { useReduxSelector } from '../../hooks/useReduxSelector';
import { useReduxDispatch } from '../../hooks/useReduxDispatch';

import { Container, CounterListCointainer } from './Counters.styles';
import { selectCounters, selectCounter } from './state/CountersSlice';

import Counter from './sub-components/Counter/Counter';

export const Counters = () => {
  const { counters } = useReduxSelector(selectCounters);
  const dispatch = useReduxDispatch();

  return (
    <Container>
      <Text>
        {counters.length === 0 && 'Crie um novo counter na aba de configuração'}
      </Text>

      {counters.length !== 0 && (
        <CounterListCointainer>
          <FlatList
            data={counters}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Counter
                onPress={() => dispatch(selectCounter(item))}
                counter={item}
              />
            )}
          />
        </CounterListCointainer>
      )}
    </Container>
  );
};

export default Counters;
