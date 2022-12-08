import React, { useRef, useState, useEffect } from 'react'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text, Modal, Alert, SafeAreaView } from 'react-native';
import {RadioButton} from 'react-native-paper';
import { Button, CustomInput, InputLabel, Menu, Title, UserList } from '../../components';
import { PlannerList } from '../../components/organisms/PlannerList';
import { Body, ContainerRadio, Header, HeaderModal, Loader,
   LoaderContainer, LoadingMessage, TitleModal, WrapperAddPlanner, WrapperButtonSave, WrapperModal, WrapperModalContent, WrapperModalizeContent } from './styles';
import { colors } from '../../styles/colors';
import api from '../../services/api';
import { useAuthInfoStore } from '../../services/stores';
import { useNavigation } from '@react-navigation/native';


export const Students = () => {
  const [modalPlannerVisible, setModalPlannerVisible] = useState(false)
  const {navigate} = useNavigation()

  const [loadingModal, setLoadingModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [students, setStudents] = useState([]);
  const { user } = useAuthInfoStore(); 
  // const {setPlannerList, plannerList, increasePlanner} = usePlannerStore();

  const getStudents = async () => {
    try {
      setLoading(true);
      const result = await api.get(`/users/${user.id}`);
      setStudents(result.data);
      setLoading(false);
      return;
    } catch (error) {
      console.log('errro', {error});
      setLoading(false);
      return error;
    }
  };

  useEffect(() => {
    getStudents()
  }, [])

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header>
        <Menu />
        <Title ml={25}>Estudantes</Title>
      </Header> 
      <Body>
          {loading && (
            <LoaderContainer>
              <Loader size="large" color={colors.blueDark} />
              <LoadingMessage>Carregando...</LoadingMessage>
            </LoaderContainer>
          )}
         <UserList data={students} /> 
      </Body>

      <WrapperAddPlanner>
        <MaterialCommunityIcon
          name="plus"
          size={35}
          color={colors.blueDark}
          onPress={() => navigate('SignUp', {
            fromStudents: true
          })}
        />
      </WrapperAddPlanner>

      </SafeAreaView>
  )
}
