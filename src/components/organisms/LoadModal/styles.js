import styled from 'styled-components/native';

export const Wrapper = styled.View`
  z-index: 9;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

export const Content = styled.View`
  width: 90px;
  height: 90px;
  background-color: #fff;
  border-radius: 15px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -45px;
  margin-top: -45px;
  justify-content: center;
`;
