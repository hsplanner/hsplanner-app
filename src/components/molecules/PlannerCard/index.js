import React from 'react';
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
  StatusText
} from './styles';

export const PlannerCard = ({item}) => {
  const {navigate} = useNavigation();
  return (
    <CardContainer onPress={() => navigate('Calendar', {item})}>
      <LeftSide>
{/*         <Text>{item.title}</Text>
        <Text>{item.description}</Text> */}
        <CardTextMediumBold>{item.title}</CardTextMediumBold>
        <CardTextSmall>{item.description}</CardTextSmall>
{/*   <FirstText>Testeeeeeeee</FirstText>
      <CardTextMedium>Medium</CardTextMedium> */}
      </LeftSide>
      <RightSide>
        <MaterialCommunityIcon
          name="chevron-right"
          size={35}
          color={colors.blueDark}
          />
        <StatusLabel>
          <StatusText>{item.status === 1 ? 'Privado' : 'Público'}</StatusText>
        </StatusLabel>
      </RightSide>

    </CardContainer>
  );
};
