import React, {useRef, useEffect, useCallback} from 'react';
import {Text, TextInput} from 'react-native';
import {useField} from '@unform/core';

export const Input = ({name, label, onChangeText, ...rest}) => {
  const inputRef = useRef(null);

  const {fieldName, registerField, defaultValue, error} = useField(name);

  useEffect(() => {
    inputRef.current.value = defaultValue;
  }, [defaultValue]);

  useEffect(() => {
    if (inputRef.current) inputRef.current.value = defaultValue;
  }, [defaultValue]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      getValue() {
        if (inputRef.current) return inputRef.current.value;

        return '';
      },
      setValue(ref, value) {
        if (inputRef.current) {
          inputRef.current.setNativeProps({text: value});
          inputRef.current.value = value;
        }
      },
      clearValue() {
        if (inputRef.current) {
          inputRef.current.setNativeProps({text: ''});
          inputRef.current.value = '';
        }
      },
    });
  }, [fieldName, registerField]);

  const handleChangeText = useCallback(
    text => {
      if (inputRef.current) inputRef.current.value = text;

      if (onChangeText) onChangeText(text);
    },
    [onChangeText],
  );

  return (
    <>
      {label && <Text>{label}</Text>}

      <TextInput
        ref={inputRef}
        onChangeText={handleChangeText}
        defaultValue={defaultValue}
        {...rest}
      />
    </>
  );
};
/* 
export default Input; */

/* import React, {
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
  useCallback,
} from 'react';
import {TextInputProps} from 'react-native';
import {useField} from '@unform/core';
import Feather from 'react-native-vector-icons/Feather';

import {Wrapper, Container, TextInput, Icon, TextError} from './styles';
import {colors} from '../../../styles/colors';
export const Input = forwardRef(
  (
    {
      name,
      icon,
      securityInput = false,
      onChangeText,
      rawText,
      onInitialData,
      containerStyle = {},
      ...rest
    },
    ref,
  ) => {
    const inputRef = useRef(null);

    const {defaultValue = '', error, fieldName, registerField} = useField(name);
    const inputValueRef = useRef({value: defaultValue});

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [eyePassword, setEyePassword] = useState(true);

    useEffect(() => {
      inputRef.current.value = defaultValue;
    }, [defaultValue]);

    useEffect(() => {
      if (inputRef.current) inputRef.current.value = defaultValue;
    }, [defaultValue]);

    useImperativeHandle(ref, () => ({
      focus() {
        inputRef.current.focus();
      },
    }));

    useEffect(() => {
      if (onInitialData) onInitialData(defaultValue);
    }, [defaultValue, onInitialData]);

    console.log('ERRRInput', error);

    useEffect(() => {
      registerField({
        name: fieldName,
        ref: inputRef.current,
        getValue() {
          if (rawText) return rawText;

          if (inputRef.current) return inputRef.current.value;
          return '';
        },
        setValue(_, value) {
          if (inputRef.current) {
            inputRef.current.setNativeProps({text: value});
            inputRef.current.value = value;
          }
        },
        clearValue() {
          if (inputRef.current) {
            inputRef.current.setNativeProps({text: ''});
            inputRef.current.value = '';
          }
        },
      });
    }, [fieldName, rawText, registerField]);

    const handleChangeText = useCallback(
      text => {
        if (inputRef.current) inputRef.current.value = text;
        if (onChangeText) onChangeText(text);
      },
      [onChangeText],
    );

    const handleInputFocus = useCallback(() => {
      setIsFocused(true);
    }, []);

    const handleInputBlur = useCallback(() => {
      setIsFocused(false);

      setIsFilled(!!inputValueRef.current.value);
    }, []);

    return (
      <Wrapper>
        <Container
          style={containerStyle}
          isFocused={isFocused}
          isErrored={!!error}>
          <Icon
            name={icon}
            size={20}
            color={isFilled || isFocused ? colors.blue : '#666360'}
          />

          <TextInput
            ref={inputRef}
            keyboardAppearance="dark"
            placeholderTextColor="#666360"
            onChangeText={handleChangeText}
            defaultValue={defaultValue}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            secureTextEntry={securityInput ? eyePassword : false}
            {...rest}
          />
          {securityInput ? (
            <Feather
              name={!eyePassword ? 'eye-off' : 'eye'}
              color={isFocused || isFilled ? colors.blue : '#666360'}
              onPress={() => setEyePassword(!eyePassword)}
              size={20}
              style={{marginRight: 13}}
            />
          ) : null}
        </Container>
        {error && <TextError>{error}</TextError>}
      </Wrapper>
    );
  },
);

 */

/* import React, {useRef, useEffect, useCallback} from 'react';
import {Text, TextInput} from 'react-native';
import {useField} from '@unform/core';

export const Input = ({name, label, onChangeText, ...rest}) => {
  const inputRef = useRef(null);

  const {fieldName, registerField, defaultValue, error} = useField(name);

  useEffect(() => {
    inputRef.current.value = defaultValue;
  }, [defaultValue]);

  useEffect(() => {
    if (inputRef.current) inputRef.current.value = defaultValue;
  }, [defaultValue]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      getValue() {
        if (inputRef.current) return inputRef.current.value;

        return '';
      },
      setValue(ref, value) {
        if (inputRef.current) {
          inputRef.current.setNativeProps({text: value});
          inputRef.current.value = value;
        }
      },
      clearValue() {
        if (inputRef.current) {
          inputRef.current.setNativeProps({text: ''});
          inputRef.current.value = '';
        }
      },
    });
  }, [fieldName, registerField]);

  const handleChangeText = useCallback(
    text => {
      if (inputRef.current) inputRef.current.value = text;

      if (onChangeText) onChangeText(text);
    },
    [onChangeText],
  );

  return (
    <>
      {label && <Text>{label}</Text>}

      <TextInput
        ref={inputRef}
        onChangeText={handleChangeText}
        defaultValue={defaultValue}
        {...rest}
      />
    </>
  );
};
 */
/* import React from 'react';
import { InputLabel } from '../../atoms/Text';
import { InputContainer, InputText } from './styles';

export const Input = ({ label, placeholder }) => {
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <InputText placeholder={placeholder} placeholderTextColor="white" />
    </InputContainer>
  );
};
 */
