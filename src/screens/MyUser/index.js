import React, { useRef, useState, useEffect } from 'react'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text, Modal, Alert, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {RadioButton} from 'react-native-paper';
import { Button, CustomInput, InputLabel, Menu, Title, UserList, CardTextLarge, CardTitle } from '../../components';
import { PlannerList } from '../../components/organisms/PlannerList';
import { Body, ContainerRadio, Header, HeaderModal, Loader,
   LoaderContainer, LoadingMessage, TitleModal, WrapperAddPlanner, WrapperButtonSave, WrapperModal, WrapperModalContent, WrapperModalizeContent } from './styles';
import { colors } from '../../styles/colors';
import api from '../../services/api';
import { useAuthInfoStore } from '../../services/stores';


import {
  Circle,
  FirstLetter
} from './styles';


export const MyUser = () => {
  const [modalPlannerVisible, setModalPlannerVisible] = useState(false)
  const {navigate} = useNavigation()

  const [loadingModal, setLoadingModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [tutors, setTutors] = useState([]);
  const { user } = useAuthInfoStore(); 

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header>
        <Menu />
        <Title ml={25}>Meu Usuário</Title>
      </Header> 
      <Body>
        <Circle>
          <CardTextLarge>{user?.name?.charAt(0)}</CardTextLarge>
        </Circle>
        <CardTextLarge mt={30}> Nome: {user.name}</CardTextLarge>
        <CardTextLarge mt={18}> Usuário: {user.username}</CardTextLarge>
        <CardTextLarge mt={18}> Email: {user.email}</CardTextLarge>
      </Body>
      </SafeAreaView>
  )
}
