import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from 'react'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text, Modal } from 'react-native';
import {RadioButton} from 'react-native-paper';
import {Modalize} from 'react-native-modalize';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Formik, Field} from 'formik';
import { Button, CustomInput, InputLabel, Menu, Title } from '../../components';
import { PlannerList } from '../../components/organisms/PlannerList';
import { Body, ContainerRadio, Header, HeaderModal, TitleModal, WrapperAddPlanner, WrapperButtonSave, WrapperModal, WrapperModalContent, WrapperModalizeContent } from './styles';
import { colors } from '../../styles/colors';
import { validationSchema } from './validationSchema';


export const Main = () => {
  const { navigate } = useNavigation();
  const [modalPlannerVisible, setModalPlannerVisible] = useState(false)
  const [loadingModalize, setLoadingModalize] = useState(false);
  const dataFetch = [
    {
      id: 'assa',
      title: 'Tito 6º ano',
      description: 'Charlot Masson'
    },
    {
      id: 'asdd',
      title: 'Tito 6º ano',
      description: 'Charlot Masson'
    },
  ]

  async function handleSubmitForm(data) {
      console.log('data!!', data);
/*     setLoadingModalize(true);
    await axios
      .patch(
        `https://simule-api.herokuapp.com/api/licencaPremio/${user.userId}`,
        data,
      )
      .then(function (response) {
        console.log('response&&', response.data);
        user.title = response?.data?.trabalhador?.title;
        setUser(user);
        modalizeRef.current?.close();
        setLoadingModalize(false);

      })
      .catch(function (error) {
        console.log('erroUpdate', error);
        Alert.alert(
          error?.response?.data?.message ||
            'Ocorreu um erro ao salvar, tente novamente mais tarde.',
        );
        setLoading(false);
        setLoadingModalize(false);
      }); */
  }

  const initialData = {
    title: '',
    description: '',
    status: '1'
  };
  return (
    <>
      <Header>
        <Menu />
        <Title ml={25}>Meus Planners</Title>
      </Header> 
      <Body>
         <PlannerList data={dataFetch} /> 
      </Body>

      <WrapperAddPlanner>
        <MaterialCommunityIcon
          name="plus"
          size={35}
          color={colors.blueDark}
          onPress={() => setModalPlannerVisible(true)}
        />
      </WrapperAddPlanner>
      <WrapperModal>
        <Modal visible={modalPlannerVisible} >
          <WrapperModalContent>
          <HeaderModal>
          <Title>Adicionar Planner</Title>
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
              <InputLabel style={{marginBottom: 15, marginTop: 20}}>
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
                  loading={loadingModalize}
                />
              </WrapperButtonSave>
            </>
          )}
        </Formik>
          </WrapperModalContent>
        
      </Modal>
      </WrapperModal>


    </>
  )
}
