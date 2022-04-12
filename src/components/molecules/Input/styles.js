/* import styled from 'styled-components/native';

export const InputContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
`;

export const InputText = styled.TextInput`
  height: ${({ theme }) => theme.metrics.px(48)}px;
  border-radius: ${({ theme }) => theme.metrics.px(12)}px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  margin-top: ${({ theme }) => theme.metrics.px(12)}px;
  font-size: ${({ theme }) => theme.metrics.px(16)}px;
  color: white;
  padding-left: ${({ theme }) => theme.metrics.px(12)}px;
  padding-right: ${({ theme }) => theme.metrics.px(12)}px;
  font-family: 'Montserrat-Regular';
`;
 */
import styled, {css} from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Wrapper = styled.View``;

export const Container = styled.View`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: rgba(0, 0, 0, 0.05);

  ${props =>
    props.isErrored &&
    css`
      border-color: ${({theme}) => theme.colors.danger};
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: ${({theme}) => theme.colors.blue};
    `} 

  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #312e38;
  font-size: 16px;
  font-family: 'Montserrat-Regular';
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;

export const TextError = styled.Text`
  font-family: 'Montserrat-Medium';
  color: ${({theme}) => theme.colors.blue};
  font-size: 14px;
  margin-bottom: 4px;
`;
