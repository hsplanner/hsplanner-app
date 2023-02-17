import React from 'react';
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

import api from '../../../services/api';
import { useAuthInfoStore } from '../../../services/stores';

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
  StatusText
} from './styles';

export const PlannerExplorerCard = ({item, setLoading}) => {
  const {navigate} = useNavigation();
  console.log("ITEM CARD", item)
  const { user } = useAuthInfoStore(); 

  const importPlanner = async () => {
    try {

      console.log("CHEGOU ADICIONAR")
      setLoading(true);

      const body = {
        idTutor: user.id
      }
      console.log("importPlanner", body)
      const result = await api.post(`/planner/${item._id}`, body);
      console.log("resultAddStudent", result?.data)
      Alert.alert('Planner importado com sucesso.');
      setLoading(false);
      navigate.repl
      return;
    } catch (error) {
      console.log('importError', {error});
      console.log('importError2', error?.response?.data);
      Alert.alert(
          error?.response?.data?.message ||
             'Erro ao importar planner',
         );
      setLoading(false);
      return error;
    }
  };

  return (
    <CardContainer onPress={() => navigate('Calendar', {item})}>
      <LeftSide>
        <CardTextMediumBold>{item.title}</CardTextMediumBold>
        <CardTextSmall>{item.description}</CardTextSmall>
      </LeftSide>
      <RightSide>
        <MaterialCommunityIcon
          name="download"
          size={35}
          color={colors.blueDark}
          onPress={importPlanner}
          />
        {/* <StatusLabel>
          <StatusText>{item.status === 1 ? 'Privado' : 'Público'}</StatusText>
        </StatusLabel> */}
      </RightSide>

    </CardContainer>
  );
};
