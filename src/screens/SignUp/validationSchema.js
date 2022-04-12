import * as yup from 'yup';

/* cpf, email, nome, password, username */
export const validationSchema = yup.object().shape({
  cpf: yup.string().length(14, 'CPF inválido').required('CPF é obrigatório'),
  email: yup.string().email('E-mail inválido').required('Email é obrigatório'),
  nome: yup.string().required('Nome é obrigatório'),
  sexo: yup.string().required('Sexo é obrigatório'),
  dt_nascimento: yup.string().required('Data de nascimento é obrigatório'),
  username: yup.string().required('Usuário é obrigatório'),
  password: yup.string().required('Senha é obrigatória'),
});
