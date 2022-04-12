import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.blue};
  border-width: ${({theme}) => theme.metrics.px(2)}px;
  border-color: ${({theme}) => theme.colors.blue};
  border-radius: ${({theme}) => theme.metrics.px(8)}px;
  height: ${({theme}) => theme.metrics.px(56)}px;
  width: 100%;
`;

export const Loader = styled.ActivityIndicator`
  margin-bottom: ${({theme}) => theme.metrics.px(16)}px;
`;
