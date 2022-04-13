import styled from 'styled-components/native';

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

export const CardImage = styled.Image`
  width: 100%;
  height: ${({theme}) => theme.metrics.px(160)}px;
`;

export const Text = styled.Text`
  font-size: 13px;
  color: ${({theme}) => theme.colors.greyDark};
  font-family: 'Montserrat-Bold';
  max-width: 90%;
`;

export const LeftSide = styled.View`
/* background-color: red; */
`;

export const RightSide = styled.View`
`;

export const FirstText = styled.Text`
  font-size: 13px;
  color: ${({theme}) => theme.colors.blueDark};
  font-family: 'Montserrat-Bold';
  max-width: 90%;
`;

export const ContainerDays = styled.View`
  align-items: flex-end;
  justify-content: flex-end;
  padding: 4px 16px;
  border-radius: 4px;
  background-color: ${({theme}) => theme.colors.blue};
`;
