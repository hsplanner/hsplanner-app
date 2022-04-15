import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  title: yup.string().required('Titulo é obrigatório'),
  description: yup.string().required('Descrição é obrigatório'),
  status: yup.string().required('Status é obrigatório'),
});
