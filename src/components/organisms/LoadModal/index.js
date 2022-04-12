import React from 'react';
import {Modal, ActivityIndicator} from 'react-native';
import {colors} from '../../../styles/colors';

import {Wrapper, Content} from './styles';

export const LoadModal = ({animationType, modalVisible}) => {
  return (
    <Modal animationType={animationType} transparent visible={modalVisible}>
      <Wrapper>
        <Content>
          <ActivityIndicator size="large" color={colors.blueDark} />
        </Content>
      </Wrapper>
    </Modal>
  );
};
