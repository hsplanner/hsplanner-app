import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  description: yup.string().required('Descrição é obrigatório'),
});
