import styled, {css} from 'styled-components/native';

const BaseText = styled.Text`
  margin-top: ${({theme, mt}) => theme.metrics.px(mt || 0)}px;
  margin-bottom: ${({theme, mb}) => theme.metrics.px(mb || 0)}px;
  margin-left: ${({theme, ml}) => theme.metrics.px(ml || 0)}px;
  margin-right: ${({theme, mr}) => theme.metrics.px(mr || 0)}px;
`;

export const Text = styled(BaseText)`
  font-size: 13px;
  color: ${({theme}) => theme.colors.greyDark};
  font-family: 'Montserrat-SemiBold';
`;

export const ErrorText = styled(BaseText)`
  font-size: 13px;
  color: ${({theme}) => theme.colors.danger};
  font-family: 'Montserrat-SemiBold';
`;

export const Title = styled(BaseText)`
  font-size: 21px;
  color: ${({theme}) => theme.colors.blueDark};
  font-family: 'Montserrat-Bold';
  text-align: left;
`;

export const SubTitle = styled(BaseText)`
  font-size: ${({theme}) => theme.metrics.px(16)}px;
  color: ${({theme}) => theme.colors.greyDark};
  font-family: 'Montserrat-Bold';
`;

export const InputLabel = styled(BaseText)`
  font-size: 15px;
  color: ${({theme}) => theme.colors.greyDark};
  font-family: 'Montserrat-SemiBold';
`;

export const ButtonText = styled(BaseText)`
  font-size: 16px;
  color: white;
  font-family: 'Montserrat-Bold';
`;

export const StateButtonText = styled(BaseText)`
  font-size: 16px;
  color: ${({theme}) => theme.colors.grey};
  ${props =>
    props.jobOption &&
    css`
      color: ${({theme}) => theme.colors.blueDark};
    `}
  ${props =>
    props.leaveOption &&
    css`
      color: ${({theme}) => theme.colors.blueDark};
    `}
  
  font-family: 'Montserrat-Bold';
`;
// Details Texts

export const DetailTitle = styled(BaseText)`
  font-size: ${({theme}) => theme.metrics.px(24)}px;
  color: white;
  font-family: 'Montserrat-Bold';
`;

export const DetailSubtitle = styled(BaseText)`
  font-size: ${({theme}) => theme.metrics.px(18)}px;
  color: white;
  font-family: 'Montserrat-SemiBold';
`;

export const DetailText = styled(BaseText)`
  font-size: ${({theme}) => theme.metrics.px(14)}px;
  color: white;
  font-family: 'Montserrat-Regular';
`;

export const DetailSectionTitle = styled(BaseText)`
  font-size: ${({theme}) => theme.metrics.px(20)}px;
  color: white;
  font-family: 'Montserrat-Bold';
`;

// CardTexts:

export const CardTitle = styled(BaseText)`
  font-size: ${({theme}) => theme.metrics.px(14)}px;
  color: white;
  font-family: 'Montserrat-Bold';
`;

export const CardDescription = styled(BaseText)`
  font-size: ${({theme}) => theme.metrics.px(10)}px;
  color: white;
  font-family: 'Montserrat-Regular';
`;

export const CardText = styled(BaseText)`
  font-size: 17px;
  color: white;
  font-family: 'Montserrat-Regular';
`;

export const CardTextSmall = styled(BaseText)`
  font-size: 13px;
  color: ${({theme}) => theme.colors.greyDark};
  font-family: 'Montserrat-Regular';
`;

export const CardTextMedium = styled(BaseText)`
  font-size: 16px;
  color: ${({theme}) => theme.colors.greyDark};
  font-family: 'Montserrat-Regular';
`;

export const CardTextMediumBold = styled(BaseText)`
  font-size: 16px;
  color: ${({theme}) => theme.colors.greyDark};
  font-family: 'Montserrat-Bold';
`;

export const CardTextLarge = styled(BaseText)`
  font-size: 19px;
  color: ${({theme}) => theme.colors.greyDark};
  font-family: 'Montserrat-SemiBold';
`;
