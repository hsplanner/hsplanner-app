import styled from 'styled-components/native';

export const Header = styled.View`
  height: 60px;
  background-color: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  align-items: center;
  flex-direction: row;
  padding-left: 12px;
  justify-content: space-between;
`;

export const TitleModal = styled.Text`
  font-size: 21px;
  color: ${({theme}) => theme.colors.blue};
  font-family: 'Montserrat-Bold';
  align-self: center;
  margin-left: 20%;
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

export const WrapperModal = styled.SafeAreaView`
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
  margin-top: 24px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const WrapperButtonSave = styled.View`
  flex: 1;
  width: 100%;
  margin-top: 12px;
`;

export const Row = styled.View`
  flex-direction: row;
  margin-top: 12px;
  /* align-items: flex-start;
  background-color: red; */
  width: 100%;
`;

export const RowCenter = styled.View`
  flex-direction: row;
  margin-top: 12px;
  justify-content: center;
  width: 100%;
`;
