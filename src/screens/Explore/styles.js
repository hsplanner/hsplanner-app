import styled from 'styled-components/native';

export const Header = styled.View`
  height: 60px;
  background-color: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  align-items: center;
  flex-direction: row;
  padding-left: 12px;
`;

export const Body = styled.View`
  height: 100%;
  padding-top: 15px;
`;

export const LoaderContainer = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${({theme}) => theme.metrics.px(64)}px;
`;

export const Loader = styled.ActivityIndicator`
  margin-bottom: ${({theme}) => theme.metrics.px(16)}px;
`;

export const LoadingMessage = styled.Text`
  font-size: 14px;
  color: ${({theme}) => theme.colors.blueDark};
  font-family: 'Montserrat-SemiBold';
`;
