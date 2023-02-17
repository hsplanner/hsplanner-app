import React, {useState} from 'react';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {colors} from '../../../styles/colors';
import Moment from 'moment';
import {
  CardTitle,
  CardTextSmall,
  CardTextMedium,
  CardTextLarge,
  CardHightLightText,
  CardDescription,
  IconButton,
  CardTextMediumBold,
} from '../../atoms';

import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';


import {
  CardContainer,
  TextContainer,
  HeaderCard,
  RowData,
  SecondRowData,
  ContainerDays,
  CardTextDays,
  WrapperFirstText,
  FirstText,
  Text,
  LeftSide,
  RightSide,
  StatusLabel,
  StatusText,
  Circle,
  BorderTrash
} from './styles';
import api from '../../../services/api';
import { useAuthInfoStore } from '../../../services/stores';

export const UserAddCard = ({item}) => {
  const {navigate} = useNavigation();
  const [loading, setLoading] = useState(false);

  const { user } = useAuthInfoStore(); 

  const addStudent = async () => {
    try {

      console.log("CHEGOU ADICIONAR")
      setLoading(true);

      const body = {
        idTutor: user?.id
      }
      console.log("addStudent", body)
      const result = await api.patch(`/user/${item.username}`, body);
      console.log("resultAddStudent", result?.data)
      Alert.alert('Usuário cadatrado com sucesso.');
      setLoading(false);
      return;
    } catch (error) {
      console.log('approveError', {error});
      console.log('addStudentError', error?.response?.data);
      Alert.alert(
          error?.response?.data?.message ||
             'Erro ao adicionar estudante',
         );
      setLoading(false);
      return error;
    }
  };
  
  return (
    <CardContainer onPress={() => {}}>
      {item && (
        <>
          <LeftSide>
            <LeftSide>
              <Circle>
                <CardTextLarge>{item?.name?.charAt(0)}</CardTextLarge>
              </Circle>
            </LeftSide>
            <RightSide>
            <CardTextMediumBold>{item?.name}</CardTextMediumBold>
            <CardTextSmall>@{item?.username}</CardTextSmall>
            </RightSide>
          </LeftSide>
        <RightSide>

        <BorderTrash>
        <MaterialCommunityIcon
          onPress={addStudent}
          name="plus"
          size={22}
          color={colors.green}
          />
        </BorderTrash>

      </RightSide>
    </>
      )}

    </CardContainer>
  );
};
