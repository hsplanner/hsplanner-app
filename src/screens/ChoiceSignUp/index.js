import React, { useRef, useState, useEffect } from 'react'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text, Modal, Alert, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {RadioButton} from 'react-native-paper';
import { Button, CustomInput, InputLabel, Menu, Title, UserList, CardText, CardTextLarge } from '../../components';
import { PlannerList } from '../../components/organisms/PlannerList';
import { Body, CardContainer, Header, HeaderModal, Loader,
   LoaderContainer, LoadingMessage, TitleModal, WrapperAddPlanner, WrapperButtonSave, WrapperModal, WrapperModalContent, WrapperModalizeContent } from './styles';
import { colors } from '../../styles/colors';
import api from '../../services/api';
import { useAuthInfoStore } from '../../services/stores';



export const ChoiceSignUp = () => {
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
        <Title ml={25}>Estudantes</Title>
      </Header> 
      <Body>
        <CardContainer onPress={() => navigate('AddUser')}>
          <CardTextLarge>Estudante já existe ?</CardTextLarge>
        </CardContainer>

        <CardContainer 
          onPress={() => navigate('SignUp', {
             fromStudents: true
           })
        }>
          <CardTextLarge>Cadastrar Estudante</CardTextLarge>
        </CardContainer>

        {/* <Title ml={25} onPress={() => navigate('SignUp', {
             fromStudents: true
           })}>Cadastrar Usuário
        </Title> */}
      </Body>
      </SafeAreaView>
  )
}
