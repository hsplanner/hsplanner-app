import React from 'react';

import {CardTitle, CardHightLightText, CardDescription} from '../../atoms/Text';
import {
  CardContainer,
  CardImage,
  TextContainer,
  TextContainerLeft,
  TextContainerRight,
} from './styles';

export const HouseCard = ({imgSource}) => {
  return (
    <CardContainer>
      <CardImage source={{uri: imgSource}} />
      <TextContainer>
        <TextContainerLeft>
          <CardTitle>Casa a venda</CardTitle>
          <CardDescription>L Norte QNL 17 Casa E, Taguatinga</CardDescription>
        </TextContainerLeft>
        <TextContainerRight>
          <CardHightLightText>U$ 200.56</CardHightLightText>
        </TextContainerRight>
      </TextContainer>
    </CardContainer>
  );
};
