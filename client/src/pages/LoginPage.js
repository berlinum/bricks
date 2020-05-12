import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import cogoToast from 'cogo-toast';
import { display } from '../utils/animations';
import colors from '../utils/colors';
import useHttp from '../hooks/useHttp.hook';
import AuthContext from '../context/AuthContext';
import IntroAnimation from '../components/IntroAnimation';
import Input from '../components/Input';
import Button from '../components/Button';
import Message from '../components/Message';

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.bgDark};
`;

const InputContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  opacity: 0;
  animation: ${display} 1s ease-in;
  animation-delay: 4s;
  animation-fill-mode: forwards;
`;

const LogInButton = styled(Button)`
  margin-top: 52px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  font-family: SF Pro Display Regular;
  font-size: 18px;
`;

const Info = styled.span`
  color: ${colors.textInfoDark};
  margin: 5px;
`;

const RegisterLink = styled(Link)`
  color: ${colors.textActive};
  margin: 5px;
`;

const LoginPage = () => {
  const auth = useContext(AuthContext);
  const { loading, request, error, clearError } = useHttp();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    error && cogoToast.warn(<Message>{error}</Message>);
    clearError();
  }, [error, clearError]);

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const loginHandler = async () => {
    try {
      const data = await request('/api/auth/login', 'POST', { ...form });
      auth.login(data.token, data.userId);
    } catch (e) {
      // empty
    }
  };

  return (
    <IntroContainer>
      <IntroAnimation />
      <InputContainer>
        <Input
          placeholder="Email"
          name="email"
          type="text"
          onChange={changeHandler}
        />
        <Input
          placeholder="Password"
          name="password"
          type="password"
          onChange={changeHandler}
        />
        <LogInButton onClick={loginHandler} disabled={loading}>
          Log In
        </LogInButton>
        <Container>
          <Info>Don&apos;t have an account?</Info>
          <RegisterLink to="/register">Register now</RegisterLink>
        </Container>
      </InputContainer>
    </IntroContainer>
  );
};

export default LoginPage;
