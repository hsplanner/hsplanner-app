import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  color: yup.string().required('Cor é obrigatória'),
  description: yup.string().required('Descrição é obrigatório'),
});
