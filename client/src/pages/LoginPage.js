import React, { useState } from 'react';
import styled from '@emotion/styled';
import Input from '../components/Input';
import Button from '../components/Button';
import colors from '../utils/colors';
import IntroAnimation from '../components/IntroAnimation';
import { display } from '../utils/animations';

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

const LoginPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const loginHandler = async () => {};

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
        <Button onClick={loginHandler}>Log In</Button>
      </InputContainer>
    </IntroContainer>
  );
};

export default LoginPage;
