import React, { useRef, useState, useEffect } from 'react'

import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text, Modal, Alert, SafeAreaView } from 'react-native';
import {RadioButton} from 'react-native-paper';
import {Formik, Field} from 'formik';
import { Button, CustomInput, InputLabel, Menu, Title, UserList, UserAddCard } from '../../components';
import { PlannerList } from '../../components/organisms/PlannerList';
import { Body, Header, Loader,
   LoaderContainer, LoadingMessage,

   WrapperContent, WrapperModalizeContent } from './styles';
import { colors } from '../../styles/colors';
import api from '../../services/api';
import { useAuthInfoStore } from '../../services/stores';
import { validationSchema } from './validationSchema';
import { useNavigation } from '@react-navigation/native';


export const AddUser = () => {
  const [modalPlannerVisible, setModalPlannerVisible] = useState(false)
  const {navigate} = useNavigation()

  const [loadingModal, setLoadingModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [student, setStudent] = useState([]);
  const { user } = useAuthInfoStore(); 
  // const {setPlannerList, plannerList, increasePlanner} = usePlannerStore();

  // const getStudents = async () => {
  //   try {
  //     setLoading(true);
  //     const result = await api.get(`/users/${user.id}`);
  //     setStudents(result.data);
  //     setLoading(false);
  //     return;
  //   } catch (error) {
  //     console.log('errro', {error});
  //     setLoading(false);
  //     return error;
  //   }
  // };

  // useEffect(() => {
  //   getStudents()
  // }, [])

  async function handleSubmitForm(data) {
    console.log('data!!', data);
    setLoading(true);

    await api
      .get(
        `/student/${data.username}`
      )
      .then(function (response) {
        setLoading(false)
        console.log("responseSearch", response.data)
        setStudent(response.data)
      })
      .catch(function (error) {
        console.log('erroSubmit', error);
        setLoading(false)
      });
  }

  async function addStudent(data) {
    console.log('addStudent', data);
    // setLoading(true);

    // await api
    //   .patch(
    //     `/user/${data.username}`, {
    //       idTutor: user.id
    //     }
    //   )
    //   .then(function (response) {
    //     setLoading(false)
    //     console.log("responseSearch", response.data)
    //     setStudent(response.data)
    //   })
    //   .catch(function (error) {
    //     console.log('erroSubmit', error);
    //     Alert.alert(
    //       error?.response?.data?.message ||
    //         'Erro ao adicionar estudante',
    //     );
    //     setLoading(false)
    //   });
  }

  const initialData = {
    username: '',
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header>
        <Menu />
        <Title ml={25}>Procurar Estudante</Title>
      </Header> 
      <Body>
          {loading && (
            <LoaderContainer>
              <Loader size="large" color={colors.blueDark} />
              <LoadingMessage>Carregando...</LoadingMessage>
            </LoaderContainer>
          )}
        <Formik
          validationSchema={validationSchema}
          initialValues={initialData}
          onSubmit={handleSubmitForm}>
          {({
            handleSubmit,
            handleChange,
            values,
            setFieldValue,
            setFieldTouched,
            isValid,
            errors,
            touched,
            isSubmitting,
          }) => (
            <>
              <Field
                component={CustomInput}
                name="username"
                placeholder="Usuário"
                label="Usuário"
              />
              <Button
                text="Pesquisar"
                onPress={handleSubmit}
                loading={loading}
                style={{marginTop: 16}}
              />

              {/* <InputLabel style={{marginBottom: 16, marginTop: 20}}>
                Deseja incluir Aluno ?
              </InputLabel> */}
            </>
          )}
        </Formik>
         {student?.name && (
          <WrapperContent onPress={() => addStudent(student)}>
              <UserAddCard item={student} />
          </WrapperContent>
          )
         }  
      </Body>


      </SafeAreaView>
  )
}
