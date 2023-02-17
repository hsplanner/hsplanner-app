import React, { useRef, useState, useEffect } from 'react'
import { useIsFocused } from "@react-navigation/native";
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text, Modal, Alert, SafeAreaView, Picker } from 'react-native';
import {RadioButton} from 'react-native-paper';
import {Formik, Field} from 'formik';
import { Button, CustomInput, InputLabel, Menu, Title } from '../../components';
import { PlannerList } from '../../components/organisms/PlannerList';
import { Body, ContainerRadio, Header, HeaderModal, Loader,
   LoaderContainer, LoadingMessage, TitleModal, WrapperAddPlanner, WrapperButtonSave, WrapperModal, WrapperModalContent, WrapperModalizeContent } from './styles';
import { colors } from '../../styles/colors';
import { validationSchema } from './validationSchema';
import api from '../../services/api';
import { useAuthInfoStore, usePlannerStore } from '../../services/stores';


export const Main = () => {
  const [modalPlannerVisible, setModalPlannerVisible] = useState(false)

  const [loadingModal, setLoadingModal] = useState(false);
  const [loading, setLoading] = useState(false);

  // Select
  const [selectedValue, setSelectedValue] = useState("");
  const [students, setStudents] = useState([])

  const { user } = useAuthInfoStore(); 
  const {setPlannerList, plannerList, increasePlanner} = usePlannerStore();

  const getPlanners = async () => {
    try {
      setLoading(true);
      const result = await api.get(`/planners/${user.id}`);
      setPlannerList(result.data);
      setLoading(false);
      return;
    } catch (error) {
      console.log('errro', {error});
      setLoading(false);
      return error;
    }
  };

  const getStudents = async () => {
    try {
      setLoading(true);
      const result = await api.get(`/students/${user.id}`);
      console.log("resultStudent", result)
      setStudents(result.data);
      setLoading(false);
      return;
    } catch (error) {
      console.log('errro', {error});
      setLoading(false);
      return error;
    }
  };

  const isFocused = useIsFocused();

  useEffect(() => {
    if(isFocused){ 
      getPlanners()
      getStudents()
    }
  }, [isFocused])

  async function handleSubmitForm(data) {
    console.log('data!!', data);
    setLoadingModal(true);
    const body = {
      title: data.title,
      description: data.description,
      status: Number(data.status),
      idTutor: user.id,
      idAluno: selectedValue ? selectedValue : ""
    }

    await api
      .post(
        '/planner',
        body,
      )
      .then(function (response) {
        console.log('response&&', response.data);
        increasePlanner(response.data)
        setLoadingModal(false);
        Alert.alert(
            `Planner ${response?.data?.title} cadastrado com sucesso` || 'Cadastro com sucesso.',
        );
        setModalPlannerVisible(false)
      })
      .catch(function (error) {
        console.log('erroUpdate', error);
        Alert.alert(
          error?.response?.data?.message ||
            'Ocorreu um erro ao salvar, tente novamente mais tarde.',
        );
        setLoadingModal(false);
      });
  }

  const initialData = {
    title: '',
    description: '',
    status: '1'
  };

  console.log("User!", user)
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header>
        <Menu />
        <Title ml={25}>Meus Planners</Title>
      </Header> 
      <Body>
          {loading && (
            <LoaderContainer>
              <Loader size="large" color={colors.blueDark} />
              <LoadingMessage>Carregando...</LoadingMessage>
            </LoaderContainer>
          )}
         <PlannerList data={plannerList} /> 
      </Body>
    
        {user.userType != 1 && 
          <WrapperAddPlanner>
            <MaterialCommunityIcon
              name="plus"
              size={35}
              color={colors.blueDark}
              onPress={() => setModalPlannerVisible(true)}
            />
          </WrapperAddPlanner>
        }

      <WrapperModal>
        <Modal visible={modalPlannerVisible} >
          <WrapperModalContent>
          <HeaderModal>
          <Title mb={32}>Adicionar Planner</Title>
          <MaterialCommunityIcon
            name="close"
            size={35}
            color={colors.blueDark}
            onPress={() => setModalPlannerVisible(false)}
            />
        </HeaderModal>
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
                name="title"
                placeholder="Nome do Planner"
                label="Nome" 
                  />
              <Field
                component={CustomInput}
                name="description"
                placeholder="Descrição"
                label="Descrição" 
              />

              <InputLabel style={{marginBottom: 16, marginTop: 20}}>
                Deseja incluir Aluno ?
              </InputLabel>


              <Picker
                selectedValue={selectedValue}
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                // mode="dropdown"
              >
                <Picker.Item label="" value="" />
                {students.map((student, i) => {
                    {console.log("unicoEstudante", student, i)}

                    return (
                       <Picker.Item label={student.name} value={student._id} />
                    )
                })}
                {/* <Picker.Item label="1 Dia" value={1} />
                <Picker.Item label="3 Dias" value={3} />
                <Picker.Item label="7 Dias" value={7} /> */}
              </Picker>
              <InputLabel style={{marginBottom: 16, marginTop: 20}}>
                  Status
                </InputLabel>
                <RadioButton.Group
                  onValueChange={handleChange('status')}
                  value={values.status}>
                  <ContainerRadio>
                    <InputLabel>Privado</InputLabel>
                    <RadioButton value="1" />

                    <InputLabel>Público</InputLabel>
                    <RadioButton value="0" />
                  </ContainerRadio>
                </RadioButton.Group>
                {errors?.status && touched.status && (
                  <ErrorText>{errors?.status}</ErrorText>
                )}
              <WrapperButtonSave>
                <Button
                  text="Salvar"
                  onPress={handleSubmit}
                  loading={loadingModal}
                />
              </WrapperButtonSave>
            </>
          )}
        </Formik>
          </WrapperModalContent>
        
      </Modal>
      </WrapperModal>
      </SafeAreaView> 


  )
}
