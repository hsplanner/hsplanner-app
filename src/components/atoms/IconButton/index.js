import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {IconButtonContainer} from './styles';

export const IconButton = ({transparent, iconName, color, size, ...rest}) => {
  return (
    <IconButtonContainer transparent={transparent} {...rest}>
      <Icon name={iconName} color={color} size={size} />
    </IconButtonContainer>
  );
};
