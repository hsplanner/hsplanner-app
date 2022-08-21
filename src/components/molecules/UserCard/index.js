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
  StatusText,
  Circle
} from './styles';

export const UserCard = ({item}) => {
  const {navigate} = useNavigation();
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
        <CardTextSmall>{item.username}</CardTextSmall>
        </RightSide>
      </LeftSide>
      <RightSide>
        <MaterialCommunityIcon
          name="chevron-right"
          size={35}
          color={colors.blueDark}
          />
      </RightSide>
    </CardContainer>
  );
};
