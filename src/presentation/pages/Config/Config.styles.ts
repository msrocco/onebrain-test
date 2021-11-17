import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  background-color: #2c82c9;
  padding: 0 10px;
`;

export const CustomText = styled.Text`
  color: #333333;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const CounterControlsContainer = styled.View`
  border: 3px dashed #f2f2f2;
  border-radius: 4px;
  height: 190px;
  margin-bottom: 40px;
  align-items: center;
  justify-content: center;
`;

export const CounterButtonContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 16px;
`;
