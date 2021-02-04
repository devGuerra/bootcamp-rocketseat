import React from 'react';
import { FiLogIn, FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => (
  <Container>
    <Background />

    <Content>
      <img src={logoImg} alt="goBarber" />

      <form action="">
        <h1>Faça seu cadastro</h1>

        <Input Icon={FiUser} name="nome" placeholder="Nome" />
        <Input Icon={FiMail} name="email" placeholder="E-mail" />

        <Input
          Icon={FiLock}
          name="password"
          type="password"
          placeholder="Senha"
        />

        <Button type="submit">Cadatrar</Button>
      </form>

      <a href="conta">
        <FiArrowLeft />
        Voltar para logon
      </a>
    </Content>
  </Container>
);

export default SignUp;
