import React from 'react';
import {Alert, Modal as NativeModal} from 'react-native';

export const Modal = ({modalVisible, setModalVisible, children, ...rest}) => {
  return (
    <NativeModal
      style={{position: 'absolute'}}
      animationType="slide"
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}
      {...rest}>
      {children}
    </NativeModal>
  );
};
