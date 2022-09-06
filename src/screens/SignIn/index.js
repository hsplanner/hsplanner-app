import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  ActivityIndicator,
  Platform,
  TextInput,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {Formik, Field} from 'formik';
import axios from 'axios';

import {CustomInput, Button, Text} from '../../components';

import {
  ScreenContainer,
  ImageTop,
  WrapperRegister,
  InputContainer,
} from './styles';
import {validationSchema} from './validationSchema';
import logo from '../../assets/img/logo.png';
import {useAuthInfoStore} from '../../services/stores/auth';
import api from '../../services/api';

export const SignIn = () => {
  const {navigate} = useNavigation();
  const [loading, setLoading] = useState(false);
  const [loadingStorage, setLoadingStorage] = useState(false);
  const {setUser, user} = useAuthInfoStore();

  useEffect(() => {
    async function loadStorageData() {
      setLoadingStorage(true);
      const storageUser = await AsyncStorage.getItem('@RNAuth:user');

      if (storageUser) {
        setUser(JSON.parse(storageUser));
        setLoadingStorage(false);
      } else {
        setLoadingStorage(false);
      }
      setLoadingStorage(false);
    }

    loadStorageData();
  }, []);

  const handleSubmitForm = async values => {
    const body = {
      username: values.username,
      passwordHash: values.password 
    }
   setLoading(true);
    api
      .post('/login', body)
      .then(async function (response) {
        console.log('respLogin', response?.data);
        setLoading(false);
        setUser(response?.data);
        await AsyncStorage.setItem(
          '@RNAuth:user',
          JSON.stringify(response?.data),
        );
      })
      .catch(function (error) {
        console.log('erroPost', error);
        Alert.alert(
          'Ocorreu um erro ao Logar, verifique suas credenciais ou tente novamente mais tarde.',
        );
        setLoading(false);
      }); 
  };

  return (
    <>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{flex: 1}}>
          <ScreenContainer>
            <ImageTop source={logo} />
            {/*    <InputContainer> */}
            <Formik
              validationSchema={validationSchema}
              initialValues={{
                username: '',
                password: '',
              }}
              onSubmit={handleSubmitForm}>
              {({handleSubmit, isValid, isSubmitting}) => (
                <>
                  <Field
                    component={CustomInput}
                    name="username"
                    placeholder="Usuário"
                    label="Usuário"
                    autoCapitalize="none"
                  />
                  <Field
                    component={CustomInput}
                    name="password"
                    placeholder="Senha"
                    label="Senha"
                    secureTextEntry={true}
                    autoCapitalize="none"
                  />
                  <Button
                    style={{marginTop: 16}}
                    text="Entrar"
                    onPress={handleSubmit}
                    loading={loading}
                    disabled={isSubmitting}
                  />
                  <WrapperRegister>
                    <Text onPress={() => navigate('SignUp')} mr={8}>
                      Criar conta
                    </Text>
                  </WrapperRegister>
                </>
              )}
            </Formik>
          </ScreenContainer>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};
