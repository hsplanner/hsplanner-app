import styled from 'styled-components/native';

export const ScreenContainer = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 30px ${Platform.OS === 'android' ? 120 : 40}px;
  background-color: ${({theme}) => theme.colors.white};
`;

export const ImageTop = styled.Image`
  width: 330px;
  height: 150px;
  margin-top: 48px;
  align-self: center;
`;

export const TopContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  margin-bottom: ${({theme}) => theme.metrics.px(36)}px;
`;

export const TitleContainer = styled.View`
  width: 65%;
`;

export const WrapperRegister = styled.View`
  margin-top: 10px;
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
`;
