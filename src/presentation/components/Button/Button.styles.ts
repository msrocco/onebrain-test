import styled from 'styled-components/native'

interface ButtonProps {
  width?: string;
}

export const StyledButton = styled.TouchableOpacity<ButtonProps>`
  height: 60px;
  width: ${({ width }) => width ? width : '48%'};
  border: 1px solid black;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  background-color: #d8d8d8;
`;

export const ButtonText = styled.Text`
  text-align: center;
  font-weight: bold;
  color: #17457d;
  font-size: 18px;
`;