import styled from 'styled-components/native';

interface ButtonProps {
  width?: string;
}

export const StyledButton = styled.TouchableOpacity<ButtonProps>`
  height: 50px;
  width: 50px;
  border: 1px solid black;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  background-color: #d8d8d8;
`;
