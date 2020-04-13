import React, { useState } from 'react';
import styled from '@emotion/styled';
import Input from '../components/Input';
import Button from '../components/Button';
import colors from '../utils/colors';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 375px;
  height: 812px;
  background-color: ${colors.bgDark};
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
    <Card>
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
    </Card>
  );
};

export default LoginPage;
