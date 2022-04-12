import React from 'react';
import {ButtonContainer} from './styles';
import {StateButtonText} from '../Text';
import Icon from 'react-native-vector-icons/Feather';

export const StateButton = ({text, iconName, size, ...rest}) => {
  return (
    <ButtonContainer {...rest}>
      {/*       <Icon
        name={iconName}
        color="white"
        size={size}
        style={{marginRight: 30}}
      /> */}
      <StateButtonText {...rest}>{text}</StateButtonText>
    </ButtonContainer>
  );
};
