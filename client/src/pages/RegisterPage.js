import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import colors from '../utils/colors';
import Input from '../components/Input';
import Button from '../components/Button';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.bgDark};
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

const Login = styled.a`
  color: ${colors.textActiv};
  margin: 5px;
`;

const RegisterPage = () => {
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
      <Container>
        <Info>Already have an account?</Info>
        <Link to="/login">
          <Login>Log in</Login>
        </Link>
      </Container>
    </Card>
  );
};

export default RegisterPage;
