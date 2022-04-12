import styled from 'styled-components/native';

export const ScreenContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  padding: 0 30px;
  background-color: ${({theme}) => theme.colors.white};
  height: 100%;
`;

export const ImageTop = styled.Image`
  width: 216px;
  height: 104px;
  margin-top: 48px;
`;

export const ContentForm = styled.View`
  width: 100%;
  height: 100%;
  flex: 1;
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

export const ContainerRadio = styled.View`
  justify-content: flex-start;
  flex-direction: row;
  margin-top: 16px;
`;
