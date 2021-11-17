import styled, { css } from 'styled-components/native'

interface Props {
  isActive: boolean;
}

export const Container = styled.TouchableOpacity<Props>`
  width: 100%;
  height: 200px;
  justify-content: space-between;
  border-radius: 4px;
  background-color: #6dadd1;
  padding: 10px;
  margin-bottom: 16px;

  ${({ isActive }) => isActive && css`
    background-color: #d8d8d8;
  `}
`

export const Title = styled.Text<Props>`
  font-size: 28px;
  font-weight: bold;
  color: #4e8eb2;

  ${({ isActive }) => isActive && css`
    color: #999999;
  `}
`

export const CounterValue = styled.Text<Props>`
  font-size: 62px;
  text-align: right;
  color: #4e8eb2;

  ${({ isActive }) => isActive && css`
    color: #333333;
  `}
`