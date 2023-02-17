import React, {useState} from 'react';
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

export const UserCardStudent = ({item}) => {
  const {navigate} = useNavigation();
  const [loading, setLoading] = useState(false);

  const { user } = useAuthInfoStore(); 

  const approveTutor = async () => {
    try {

      console.log("CHEGOU APROVAR")
      setLoading(true);

      const body = {
        idTutor: item?.idTutor,
        idAluno: user?.id
      }
      console.log("approve", body)
      const result = await api.patch(`/student`, body);
      setLoading(false);
      return;
    } catch (error) {
      console.log('approveError', {error});
      setLoading(false);
      return error;
    }
  };
  
  return (
    <CardContainer onPress={() => {}}>
      <LeftSide>
        <LeftSide>
          <Circle>
            <CardTextLarge>{item.name.charAt(0)}</CardTextLarge>
          </Circle>
        </LeftSide>
        <RightSide>
        <CardTextMediumBold>{item.name}</CardTextMediumBold>
        <CardTextSmall>@{item.username}</CardTextSmall>
        </RightSide>
      </LeftSide>
      <RightSide>

        <StatusLabel>
          <StatusText>{item.ativo === 0 ? 'Não ativo' : 'Ativo'}</StatusText>
        </StatusLabel>

      </RightSide>
    </CardContainer>
  );
};
