import React, { useState } from 'react';
import styled from '@emotion/styled';
import Input from '../components/Input';
import Button from '../components/Button';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #1d1d1b;
`;

const AuthPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const registerHandler = async () => {
    try {
      fetch(`/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...form }),
      }).then((response) => response.json());
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card>
      <Input
        placeholder="Name"
        name="name"
        type="text"
        onChange={changeHandler}
      />
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
      <Button onClick={registerHandler}>Sign Up</Button>
    </Card>
  );
};

export default AuthPage;
