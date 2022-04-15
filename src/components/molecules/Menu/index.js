import React, {useState} from 'react';
import {Modal, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAuthInfoStore} from '../../../services/stores';
import {IconButton, Text} from '../../atoms';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import {
  Body,
  CloseButton,
  CloseModal,
  Container,
  Header,
  TextCpf,
  TextSignOut,
  LabelMenu,
  TextUser,
  WrapperSignOut,
  Wrapper,
  DataInfoMedium,
  DataInfoShort,
  WrapperRow,
  WrapperColumn,
  Row,
  Column,
} from './styles';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../../styles/colors';

export const Menu = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const {user, cleanUser} = useAuthInfoStore(); 
  console.log('userMenuu', user);

  const signOut = () => {
    AsyncStorage.clear().then(() => {
      cleanUser();
    });
  };

  const navigator = useNavigation();

  const handleUpdateUser = () => {
    setModalVisible(!modalVisible);
    navigator.navigate('UpdateUser');
  };

  return (
    <>
      <IconButton
        iconName="menu"
        color={colors.blueDark}
        size={30}
        onPress={() => setModalVisible(!modalVisible)}
      />
      <Modal visible={modalVisible} transparent animationType="fade">
        <Container>
          <Header>
            <CloseModal>
              <MaterialCommunityIcon
                name="close-circle-outline"
                size={35}
                color={colors.white}
                onPress={() => setModalVisible(!modalVisible)}
                style={{marginTop: 5}}
              />
            </CloseModal>
            <TextUser>{user.name}</TextUser>
            <TextCpf>{user.email}</TextCpf>
          </Header>
          <Body>
            <Column>
            <WrapperRow>
                <Row mb={16} mt={16}>
                  <MaterialCommunityIcon
                    name="account"
                    size={35}
                    color={colors.blueDark}
                  />
                  <LabelMenu>Meu Usuário</LabelMenu>
                </Row>
              </WrapperRow>
              <WrapperRow>
                <Row mb={16} mt={16}>
                  <MaterialCommunityIcon
                    name="account-box-multiple-outline"
                    size={35}
                    color={colors.blueDark}
                    onPress={() => {
                      setModalVisible(!modalVisible)
                      navigator.navigate('Main')
                    }}
                  />
                  <LabelMenu>Meus Planners</LabelMenu>
                </Row>
              </WrapperRow>
              <WrapperRow>
                <Row mb={16} mt={16}>
                  <MaterialCommunityIcon
                    name="folder-search-outline"
                    size={35}
                    color={colors.blueDark}
                    onPress={() => {
                      setModalVisible(!modalVisible)
                      navigator.navigate('Explore')
                    }}
                  />
                  <LabelMenu>Explorar</LabelMenu>
                </Row>
              </WrapperRow>
            </Column>
  {/*           <Column>
              <WrapperRow>
                <Row mb={8}>
                  <MaterialCommunityIcon
                    name="account"
                    size={35}
                    color={colors.blueDark}
                  />
                  <LabelMenu onPress={handleUpdateUser}>Usuário</LabelMenu>
                </Row>
              </WrapperRow>

              <WrapperColumn>
                <Row mt={8}>
                  <MaterialCommunityIcon
                    name="face-man"
                    size={35}
                    color={colors.blueDark}
                  />
                  <LabelMenu>Consultoria</LabelMenu>
                </Row>

                <DataInfoMedium mt={8} mb={2}>
                  Celso Colacci
                </DataInfoMedium>
                <Row>
                  <MaterialCommunityIcon
                    name="whatsapp"
                    size={24}
                    color={colors.blueDark}
                  />
                  <DataInfoShort>(61) 9849-1212</DataInfoShort>
                </Row>
                <Row mb={8}>
                  <MaterialCommunityIcon
                    name="email-outline"
                    size={24}
                    color={colors.blueDark}
                  />
                  <DataInfoShort>celso@inova10.com</DataInfoShort>
                </Row>
              </WrapperColumn>
            </Column> */}

            <WrapperSignOut>
              <MaterialIcon
                name="logout"
                size={35}
                color={colors.blueDark}
                onPress={() => setModalVisible(!modalVisible)}
                style={{marginLeft: 5}}
              />
              <TextSignOut onPress={signOut}>Sair</TextSignOut>
            </WrapperSignOut>
          </Body>
        </Container>
      </Modal>
    </>
  );
};
