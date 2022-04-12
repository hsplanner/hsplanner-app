import React, {useState, useCallback, forwardRef} from 'react';
import {TextInputMask} from 'react-native-masked-text';

import Input from '../Input';

const InputMask = ({type, ...rest}, inputRef) => {
  const [text, setText] = useState('');
  const [rawText, setRawText] = useState('');

  const handleChangeText = useCallback((maskedText, unmaskedText) => {
    setText(maskedText);
    setRawText(unmaskedText);
  }, []);

  return (
    <TextInputMask
      type={type}
      includeRawValueInChangeText
      value={text}
      onChangeText={handleChangeText}
      customTextInput={Input}
      customTextInputProps={{
        ref: inputRef,
        rawText,
        onInitialData: setText,
      }}
      {...rest}
    />
  );
};

export default forwardRef(InputMask);

/* 
export const InputMask = forwardRef(({type, ...rest}, inputRef) => {
  const [text, setText] = useState('');
  const [rawText, setRawText] = useState('');

  const handleChangeText = useCallback((maskedText, unmaskedText) => {
    setText(maskedText);
    setRawText(unmaskedText);
  }, []);

  return (
    <TextInputMask
      type={type}
      includeRawValueInChangeText
      value={text}
      onChangeText={handleChangeText}
      customTextInput={Input}
      customTextInputProps={{
        ref: inputRef,
        rawText,
        onInitialData: setText,
      }}
      style={{fontSize: 20}}
      {...rest}
    />
  );
});
 */

/* 
export default forwardRef(InputMask); */
/* import React, {useState, useCallback, forwardRef} from 'react';
import {TextInputMask, TextInputMaskProps} from 'react-native-masked-text';

import Input from '../Input';

const InputMask = ({type, ...rest}, inputRef) => {
  const [text, setText] = useState('');
  const [rawText, setRawText] = useState('');
  const handleChangeText = useCallback((maskedText, unmaskedText) => {
    setText(maskedText);
    setRawText(unmaskedText);
  }, []);

  return (
    <TextInputMask
      type={type}
      includeRawValueInChangeText
      value={text}
      onChangeText={handleChangeText}
      customTextInput={Input}
      customTextInputProps={{
        ref: inputRef,
        rawText,
        onInitialData: setText,
      }}
      {...rest}
    />
  );
};
export default forwardRef(InputMask);
 */
