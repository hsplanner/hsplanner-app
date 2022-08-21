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

export const Circle = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  background-color: #D9E6F2;
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  margin-right: 8px;
`;

export const Text = styled.Text`
  font-size: 13px;
  color: ${({theme}) => theme.colors.greyDark};
  font-family: 'Montserrat-Bold';
  max-width: 90%;
`;

export const LeftSide = styled.View`
flex-direction: row;
align-items: center;
/* background-color: red; */
`;

export const RightSide = styled.View`
 /*  background-color: red; */
  align-items: flex-start;
`;

export const FirstText = styled.Text`
  font-size: 13px;
  color: ${({theme}) => theme.colors.blueDark};
  font-family: 'Montserrat-Bold';
  max-width: 90%;
`;

export const StatusLabel = styled.View`
  margin-top: 16px;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 4px 16px;
  border-radius: 4px;
  background-color: ${({theme}) => theme.colors.blue};
`;

export const StatusText = styled.Text`
  font-size: 12px;
  color: ${({theme}) => theme.colors.white};
  font-family: 'Montserrat-Bold';
`;



