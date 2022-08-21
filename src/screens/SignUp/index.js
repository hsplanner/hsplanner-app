import React, {useRef, useState} from 'react';
import {RadioButton} from 'react-native-paper';
import {ScrollView, Alert} from 'react-native';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {Formik, Field} from 'formik';
import {TextInputMask} from 'react-native-masked-text';
/* import DropdownAlert from 'react-native-dropdownalert'; */
import {parse, formatISO} from 'date-fns';
import moment from 'moment';

import {
  CustomInput,
  Button,
  ErrorText,
  InputLabel,
  Text,
} from '../../components';
import { Styles } from '../../styles/input';

import {ScreenContainer, ContentForm, ImageTop, ContainerRadio} from './styles';
import {validationSchema} from './validationSchema';
import logo from '../../assets/img/logo.png';
import api from '../../services/api'

export const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const {navigate} = useNavigation();

  let dropDownAlertRef = useRef();

  const callSaveUser = async data => {
/*     console.log('save', data);
    setLoading(true);
    const result = await axios
      .post('https://simule-api.herokuapp.com/api/user', data)
      .then(function (response) {
        console.log('resp', response);
        setLoading(false);
        Alert.alert('Usuário cadatrado com sucesso.');
        navigate('SignIn');
      })
      .catch(function (error) {
        console.log('erroPost', error);
        Alert.alert(
          'Ocorreu um erro ao salvar o Usuário, tente novamente mais tarde.',
        );
        setLoading(false);
      });
    return result; */
  };

  const onCloseAlert = () => {
    navigate('SignIn');
  };

  const handleSubmitForm = async values => {
    try {
      setLoading(true)
      let iso = formatISO(parse(values.birthdate, 'dd/MM/yyyy', new Date()))
      const birthFormatToMongo= moment(iso).format('YYYY-MM-DD[T00:00:00.000Z]')
      const body = {
        name: values.name,
        email: values.email,
        birthdate: birthFormatToMongo,
        username: values.username,
        passwordHash: values.password,
        userType: 1
      }
      console.log('values$$', values)
      console.log('values$$2', birthFormatToMongo)
      const result = await api.post('/user', body);
      console.log('Cadastrou', result.data);
      setLoading(false)
      Alert.alert('Usuário cadatrado com sucesso.');
      navigate('SignIn');
    } catch (erro) {
      setLoading(false);
      console.log('erro', erro?.message || erro);
    } 
  };

  return (
    <ScreenContainer>
      <ScrollView
        keyboardShouldPersistTaps="always"
        style={{width: '100%', height: '100%'}}>
        <ImageTop source={logo} />
        <Formik
          validationSchema={validationSchema}
          initialValues={{
            name: '',
            email: '',
            birthdate: '',
            username: '',
            password: '',
          }}
          onSubmit={handleSubmitForm}>
          {({
            handleSubmit,
            isValid,
            errors,
            touched,
            values,
            isSubmitting,
            setFieldTouched,
            handleChange,
          }) => (
            <ContentForm>
              <Field
                component={CustomInput}
                name="name"
                label="Nome"
                placeholder="Nome"
              />
              <Field
                component={CustomInput}
                name="email"
                label="Email"
                placeholder="Email"
              />
               <Text mt={8} mb={4} ml={4}>
                Data de Nascimento
              </Text>
              <TextInputMask
                type={'datetime'}
                options={{
                  format: 'DD/MM/YYYY',
                }}
                label="Data de Nascimento"
                name="birthdate"
                onBlur={() => {
                  setFieldTouched('birthdate');
                }}
                style={[
                  Styles.textInput,
                  errors?.birthdate &&
                    touched.birthdate &&
                    Styles.errorInput,
                ]}
                value={values.birthdate}
                keyboardType="numeric"
                placeholder="Data de Nascimento"
                onChangeText={handleChange('birthdate')}
              />
              {errors?.birthdate && touched.birthdate && (
                <ErrorText>{errors?.birthdate}</ErrorText>
              )} 
              <Field
                component={CustomInput}
                name="username"
                label="Usuário"
                placeholder="Usuário"
              />
              <Field
                component={CustomInput}
                name="password"
                label="Senha"
                placeholder="Senha"
              />
              <Button
                style={{marginTop: 16}}
                text="Cadastrar"
                onPress={handleSubmit}
                loading={loading}
                disabled={isSubmitting}
              />
            </ContentForm>
          )}
        </Formik>
      </ScrollView>
      {/*       <DropdownAlert
        ref={ref => {
          if (ref) {
            dropDownAlertRef = ref;
          }
        }}
        onClose={onCloseAlert}
      /> */}
    </ScreenContainer>
  );
};
