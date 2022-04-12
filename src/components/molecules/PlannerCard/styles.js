import styled from 'styled-components/native';

export const CardContainer = styled.TouchableOpacity`
  width: ${({theme}) => theme.metrics.wp(90)}px; 
 height: ${({theme}) => theme.metrics.px(180)}px; 
  border-radius: 8px;
  background-color: ${({theme}) => theme.colors.white};
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
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

export const HeaderCard = styled.View`
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  align-self: flex-start;
`;

export const Text = styled.Text`
  font-size: 13px;
  color: ${({theme}) => theme.colors.greyDark};
  font-family: 'Montserrat-Bold';
  max-width: 90%;
`;

export const WrapperFirstText = styled.View`
  border-bottom-color: ${({theme}) => theme.colors.blueDark};
  border-bottom-width: 1px;
  width: 100%;
  align-items: center;
  margin-bottom: 4px;
`;

export const FirstText = styled.Text`
  font-size: 13px;
  color: ${({theme}) => theme.colors.blueDark};
  font-family: 'Montserrat-Bold';
  max-width: 90%;
`;
export const RowData = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border-bottom-width: ${props => `${props.underline ? 1 : 0}px`};
`;

export const SecondRowData = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  border-bottom-width: ${props => `${props.underline ? 1 : 0}px`};
`;

/* export const CardTextHeader = styled.Text`
  color: ${({theme}) => theme.colors.white};
  text-align: center;
  font-size: 14px;
  text-transform: uppercase;
`; */

export const TextContainer = styled.View`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const ContainerDays = styled.View`
  align-items: flex-end;
  justify-content: flex-end;
  padding: 4px 16px;
  border-radius: 4px;
  background-color: ${({theme}) => theme.colors.blue};
`;

export const CardTextDays = styled.Text`
  font-size: 14px;
  color: ${({theme}) => theme.colors.white};
  font-family: 'Montserrat-Bold';
`;

export const TextContainerRight = styled.View`
  display: flex;
  width: 30%;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  height: 100%;
`;
