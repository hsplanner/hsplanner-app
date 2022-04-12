import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {Text} from '../../../components';
import {Styles} from '../../../styles/input';
import {ErrorText} from '../../atoms';

export const CustomInput = props => {
  const {
    label,
    field: {name, onBlur, onChange, value},
    form: {errors, touched, setFieldTouched},
    ...inputProps
  } = props;

  const hasError = errors[name] && touched[name];

  return (
    <>
      {label && (
        <Text mt={5} mb={4} ml={4}>
          {label}
        </Text>
      )}
      <TextInput
        style={[Styles.textInput, hasError && Styles.errorInput]}
        value={value}
        onChangeText={text => onChange(name)(text)}
        onBlur={() => {
          setFieldTouched(name);
          onBlur(name);
        }}
        {...inputProps}
      />
      {hasError && <ErrorText>{errors[name]}</ErrorText>}
    </>
  );
};
