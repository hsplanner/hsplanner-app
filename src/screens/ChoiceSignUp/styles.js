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
  align-items: center;
`;

export const WrapperAddPlanner = styled.View`
  justify-content: center;
  border-radius: 10;
  align-items:center;
  position: absolute; 
  bottom: 0; 
  right: 0;
  background-color: #CEF2FD;
  margin-right: 24px;
  margin-bottom: 24px;
  padding: 8px;

  border-width: 1;
  border-color: #ddd;
  shadow-color: #000;
  shadow-offset: {width: 0, height: 2};
  shadow-opacity: 0.8;
  shadow-radius: 2;
  elevation: 3;
`;

export const TitleModal = styled.Text`
  font-size: 21px;
  color: ${({theme}) => theme.colors.blue};
  font-family: 'Montserrat-Bold';
  align-self: center;
  margin-left: 20%;
`;

export const WrapperModal = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    margin-top: 22px;
`;

export const WrapperModalContent = styled.View`
  align-items: center;
  justify-content: center;
  margin: 34px;
`;

export const HeaderModal = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const WrapperButtonSave = styled.View`
  flex: 1;
  width: 100%;
  margin-top: 12px;
`;

export const ContainerRadio = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
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

export const CardContainer = styled.TouchableOpacity`
  width: ${({theme}) => theme.metrics.wp(90)}px; 
  height: 100px; 
  border-radius: 8px;
  background-color: ${({theme}) => theme.colors.white};
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-top: ${({theme}) => theme.metrics.px(8)}px;
  shadow-color: ${({theme}) => theme.colors.blueDark};
  shadow-offset: {width: 0, height: 4};
  shadow-opacity: 0.30;
  shadow-radius: 4.65;
  elevation: 8;
  padding: 16px;
`;