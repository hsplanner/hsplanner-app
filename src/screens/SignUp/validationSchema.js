import * as yup from 'yup';

/* cpf, email, nome, password, username */
export const validationSchema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório'),
  email: yup.string().email('E-mail inválido').required('Email é obrigatório'),
  birthdate: yup.string().required('Data de nascimento é obrigatório'),
  username: yup.string().required('Usuário é obrigatório'),
  password: yup.string().required('Senha é obrigatória'),
});
