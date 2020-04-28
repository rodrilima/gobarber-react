import React, { useCallback, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import {
  FiArrowLeft, FiMail, FiLock, FiUser,
} from 'react-icons/fi';
import api from '../../services/api';

import { Container, Background, Content, AnimationContainer } from './styles';
import logo from '../../assets/logo.svg';
import { useToast } from '../../hooks/toast'
import getValidationErrors from '../../utils/getValidationErrors';
import Input from '../../components/Input';
import Button from '../../components/Button';

interface SignUpProps {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(async ({ name, email, password }: SignUpProps) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string().email('Digite um email válido').required('E-mail obrigatório'),
        password: Yup.string().min(6, 'No mínimo 6 dígitos'),
      });
      await schema.validate({ name, email, password }, {
        abortEarly: false,
      });
      await api.post('/users', {
        name,
        email,
        password
      });
      history.push('/');
      addToast({
        type: 'success',
        title: 'Cadastro Realizado!',
        description: 'Você já pode fazer seu logon no GoBarber!'
      });
    } catch (err) {
      if( err instanceof Yup.ValidationError ) {
        return formRef.current?.setErrors(getValidationErrors(err));
      }

      addToast({
        title: 'Erro no cadastro.',
        description: 'Ocorreu um erro ao fazer seu cadastro. Tente novamente.',
        type: 'error'
      });
    }
  }, [addToast, history]);

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <img src={logo} alt="GoBarber" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu cadastro</h1>

            <Input icon={FiUser} name="name" placeholder="Nome" />

            <Input icon={FiMail} name="email" placeholder="E-mail" />

            <Input icon={FiLock} name="password" type="password" placeholder="Senha" />

            <Button type="submit">Cadastrar</Button>
          </Form>

          <Link to="/">
            <FiArrowLeft />
            Voltar para logon
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
