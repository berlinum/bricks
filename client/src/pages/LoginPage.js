import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import Input from '../components/Input';
import Button from '../components/Button';
import colors from '../utils/colors';
import IntroAnimation from '../components/IntroAnimation';
import { display } from '../utils/animations';
import { useHttp } from '../hooks/http.hook';
import { AuthContext } from '../context/AuthContext';

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

const RegisterLink = styled.a`
  color: ${colors.textActive};
  margin: 5px;
`;

const LoginPage = () => {
  const auth = useContext(AuthContext);
  const { loading, request } = useHttp();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const loginHandler = async () => {
    try {
      const data = await request('/api/auth/login', 'POST', { ...form });
      auth.login(data.token, data.userId);
    } catch (error) {
      console.error(error);
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
          <Link to="/register">
            <RegisterLink>Register now</RegisterLink>
          </Link>
        </Container>
      </InputContainer>
    </IntroContainer>
  );
};

export default LoginPage;
