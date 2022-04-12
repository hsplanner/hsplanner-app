import React, {useRef, useState} from 'react';
import {RadioButton} from 'react-native-paper';
import {ScrollView, Alert} from 'react-native';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {Formik, Field} from 'formik';
import {TextInputMask} from 'react-native-masked-text';
/* import DropdownAlert from 'react-native-dropdownalert'; */
/* import {parse, formatISO} from 'date-fns'; */

import {
  CustomInput,
  Button,
  ErrorText,
  InputLabel,
  Text,
} from '../../components';
import {Styles} from '../../styles/input';

import {ScreenContainer, ContentForm, ImageTop, ContainerRadio} from './styles';
import {validationSchema} from './validationSchema';
import logo from '../../assets/img/logo.png';

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

  function retiraMascara(cpf) {
    return cpf.replace(/\D/g, '');
  }

  const handleSubmitForm = async values => {
/*     try {
      console.log(values);
      values.dt_nascimento = formatISO(
        parse(values.dt_nascimento, 'dd/MM/yyyy', new Date()),
      );
      values.cpf = retiraMascara(values.cpf);
      console.log('valuesCa', values);
      const result = await callSaveUser(values);
      console.log('Cadastrou', result.data);
      navigate('SignIn');
    } catch (erro) {
      setLoading(false);
      console.log('erro', erro);
    } */
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
            cpf: '',
            email: '',
            nome: '',
            sexo: '',
            dt_nascimento: '',
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
              <Text mt={8} mb={4} ml={4}>
                CPF
              </Text>
              <TextInputMask
                type={'cpf'}
                style={[
                  Styles.textInput,
                  errors?.cpf && touched.cpf && Styles.errorInput,
                ]}
                name="cpf"
                onBlur={() => {
                  setFieldTouched('cpf');
                }}
                value={values.cpf}
                keyboardType="numeric"
                placeholder="CPF"
                onChangeText={handleChange('cpf')}
              />
              {errors?.cpf && touched.cpf && (
                <ErrorText>{errors?.cpf}</ErrorText>
              )}
              <Field
                component={CustomInput}
                name="email"
                label="Email"
                placeholder="Email"
              />
              <Field
                component={CustomInput}
                name="nome"
                label="Nome"
                placeholder="Nome"
              />
              {/*             <InputLabel style={{marginBottom: 25, marginTop: 10}}>
                Sexo
              </InputLabel> */}
              <RadioButton.Group
                style={{marginTop: 8}}
                onValueChange={handleChange('sexo')}
                value={values.sexo}>
                <ContainerRadio>
                  <InputLabel>Masculino</InputLabel>
                  <RadioButton value="M" />

                  <InputLabel>Feminino</InputLabel>
                  <RadioButton value="F" />
                </ContainerRadio>
              </RadioButton.Group>
              {errors?.sexo && touched.sexo && (
                <ErrorText>{errors?.sexo}</ErrorText>
              )}
{/*               <Text mt={8} mb={4} ml={4}>
                Data de Nascimento
              </Text>
              <TextInputMask
                type={'datetime'}
                options={{
                  format: 'DD/MM/YYYY',
                }}
                label="Data de Nascimento"
                name="dt_nascimento"
                onBlur={() => {
                  setFieldTouched('dt_nascimento');
                }}
                style={[
                  Styles.textInput,
                  errors?.dt_nascimento &&
                    touched.dt_nascimento &&
                    Styles.errorInput,
                ]}
                value={values.dt_nascimento}
                keyboardType="numeric"
                placeholder="Data de Nascimento"
                onChangeText={handleChange('dt_nascimento')}
              />
              {errors?.dt_nascimento && touched.dt_nascimento && (
                <ErrorText>{errors?.dt_nascimento}</ErrorText>
              )} */}
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
