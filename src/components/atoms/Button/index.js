import React from 'react';
import {ButtonContainer, Loader} from './styles';
import {ButtonText} from '../Text';
import {colors} from '../../../styles/colors';

export const Button = ({text, loading, ...rest}) => {
  return (
    <>
      <ButtonContainer {...rest}>
        <ButtonText>
          {text}
          {loading && <Loader size="large" color={colors.white} />}
        </ButtonText>
      </ButtonContainer>
    </>
  );
};
