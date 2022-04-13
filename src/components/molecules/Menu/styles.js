import styled from 'styled-components/native';

const BaseText = styled.Text`
  margin-top: ${({theme, mt}) => theme.metrics.px(mt || 0)}px;
  margin-bottom: ${({theme, mb}) => theme.metrics.px(mb || 0)}px;
  margin-left: ${({theme, ml}) => theme.metrics.px(ml || 0)}px;
  margin-right: ${({theme, mr}) => theme.metrics.px(mr || 0)}px;
`;

const BaseView = styled.View`
  margin-top: ${({theme, mt}) => theme.metrics.px(mt || 0)}px;
  margin-bottom: ${({theme, mb}) => theme.metrics.px(mb || 0)}px;
  margin-left: ${({theme, ml}) => theme.metrics.px(ml || 0)}px;
  margin-right: ${({theme, mr}) => theme.metrics.px(mr || 0)}px;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 75%;
  background-color: #f3f3f3;



  border-right-width: 1;
  border-radius: 2;
  border-color: #ddd;
  border-bottom-width: 0;
  shadow-color: #000;
  shadow-offset: {width: 0, height: 2};
  shadow-opacity: 0.8;
  shadow-radius: 2;
  elevation: 3;
`;

export const CloseModal = styled.View`
  align-self: flex-end;
  margin-right: 8px;
`;

export const WrapperRow = styled(BaseView)`
  border-bottom-width: 1px;
  border-color: #ddd;
  margin-left: 8px;
  flex-direction: row;
  align-items: center;
`;

export const WrapperColumn = styled(BaseView)`
  border-bottom-width: 1px;
  border-color: #ddd;
  margin-left: 8px;
  flex-direction: column;
`;

export const Row = styled(BaseView)`
  flex-direction: row;
  align-items: center;
`;

export const Column = styled(BaseView)`
  flex-direction: column;
`;

export const CloseButton = styled.Text`
  font-size: 30px;
  font-family: 'Montserrat-Bold';
  color: ${({theme}) => theme.colors.white};
  /*   z-index: 0;
  position: absolute; */
  /*   width: 80%; */
`;

export const Header = styled.View`
  align-self: flex-start;
  padding-left: 8px;
  background-color: ${({theme}) => theme.colors.blueDark};
  width: 100%;
  height: 120px;

  border-right-width:0;
  border-left-width:0;
  border-width: 1;
  border-radius: 2;
  border-color: #ddd;
  shadow-color: #000;
  shadow-offset: {width: 0, height: 2};
  shadow-opacity: 0.8;
  shadow-radius: 2;
  elevation: 3;
`;

export const Body = styled.View`
  flex: 1;
  height: 80%;
  width: 100%;
  /*   background-color: #fff; */
  margin-top: 24px;
  flex-direction: column;
  justify-content: space-between;
`;

export const TextUser = styled.Text`
  font-size: 18px;
  color: ${({theme}) => theme.colors.white};
  font-family: 'Montserrat-Bold';
  text-transform: uppercase;
`;

export const LabelMenu = styled(BaseText)`
  font-size: 18px;
  color: ${({theme}) => theme.colors.blueDark};
  font-family: 'Montserrat-Bold';
  margin-left: 8px;
`;

export const DataInfoMedium = styled(BaseText)`
  font-size: 16px;
  color: ${({theme}) => theme.colors.blueDark};
  font-family: 'Montserrat-Bold';
`;

export const DataInfoShort = styled(BaseText)`
  font-size: 14px;
  color: ${({theme}) => theme.colors.blueDark};
  font-family: 'Montserrat-Bold';
`;

export const TextCpf = styled.Text`
  font-size: 16px;
  color: ${({theme}) => theme.colors.white};
  font-family: 'Montserrat-Bold';
`;

export const TextSignOut = styled.Text`
  font-size: 18px;
  color: ${({theme}) => theme.colors.blueDark};
  font-family: 'Montserrat-Bold';
`;

export const WrapperSignOut = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`;
