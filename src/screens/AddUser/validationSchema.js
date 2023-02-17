import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  username: yup.string().required('Usuário é obrigatório'),
});
