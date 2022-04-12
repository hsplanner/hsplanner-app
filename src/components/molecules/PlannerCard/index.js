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

import {useNavigation} from '@react-navigation/native';

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
} from './styles';

export const PlannerCard = ({item}) => {
  const {navigate} = useNavigation();
  console.log('item!', item);
  return (
    <CardContainer onPress={() => navigate('Calendar')}>
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
    </CardContainer>
  );
};
