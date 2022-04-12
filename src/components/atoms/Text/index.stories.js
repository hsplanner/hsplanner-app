import styled from 'styled-components/native';
import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {
  Title,
  CardDescription,
  CardHightLightText,
  CardTitle,
  DetailSectionTitle,
  DetailSubtitle,
  DetailText,
  DetailTitle,
  InputLabel,
} from './index';

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.backgroundLight};
`;

const stories = storiesOf('Text', module);

stories.addDecorator(getStory => <Wrapper>{getStory()}</Wrapper>);

stories.add('Title', () => {
  const value = text('Title', 'Exemplo de Titulo');
  return <Title>{value}</Title>;
});

stories.add('InputLabel', () => {
  const value = text('InputLabel', 'Exemplo de InputLabel');
  return <InputLabel>{value}</InputLabel>;
});

// Detail Texts

stories.add('DetailTitle', () => {
  const value = text('DetailTitle', 'Exemplo de Titulo Detail');
  return <DetailTitle>{value}</DetailTitle>;
});

stories.add('DetailSectionTitle', () => {
  const value = text('DetailSectionTitle', 'Exemplo de Titulo Detail');
  return <DetailSectionTitle>{value}</DetailSectionTitle>;
});

stories.add('DetailSubtitle', () => {
  const value = text('DetailSubtitle', 'Exemplo de Titulo Detail');
  return <DetailSubtitle>{value}</DetailSubtitle>;
});

stories.add('DetailText', () => {
  const value = text('DetailText', 'Exemplo DetailText');
  return <DetailText>{value}</DetailText>;
});

// Card Texts

stories.add('CardTitle', () => {
  const value = text('CardTitle', 'Exemplo de Titulo Cartão');
  return <CardTitle>{value}</CardTitle>;
});

stories.add('CardDescription', () => {
  const value = text('CardDescription', 'Exemplo de Descrição');
  return <CardDescription>{value}</CardDescription>;
});

stories.add('CardHightLightText', () => {
  const value = text('CardHightLightText', 'U$ 222.22');
  return <CardHightLightText>{value}</CardHightLightText>;
});
