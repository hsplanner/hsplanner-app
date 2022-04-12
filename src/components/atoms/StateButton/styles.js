import styled, {css} from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.white};
  border-width: ${({theme}) => theme.metrics.px(2)}px;
  border-color: ${({theme}) => theme.colors.grey};
  ${props =>
    props.jobOption &&
    css`
      border-color: ${({theme}) => theme.colors.blueDark};
    `}
  ${props =>
    props.leaveOption &&
    css`
      border-color: ${({theme}) => theme.colors.blueDark};
    `}


  /*   ${props =>
    props.isFocused &&
    css`
      border-color: ${({theme}) => theme.colors.blue};
    `}  */

  border-radius: 8px;
  height: ${({theme}) => theme.metrics.px(44)}px;
  margin: 3px;
  width: 45%;
`;

/* export const Container = styled.View`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: rgba(0, 0, 0, 0.05);

  ${props =>
    props.isErrored &&
    css`
      border-color: ${({theme}) => theme.colors.danger};
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: ${({theme}) => theme.colors.blue};
    `}

  flex-direction: row;
  align-items: center;
`; */
