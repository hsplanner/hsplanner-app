import styled from 'styled-components/native';

export const IconButtonContainer = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({theme}) => theme.metrics.px(4)}px;
`;
