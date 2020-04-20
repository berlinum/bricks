import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import colors from '../utils/colors';
import Input from '../components/Input';
import Button from '../components/Button';
import LogoImg from '../assets/icons/logo.svg';

const LogoBox = styled.div`
  display: flex;
  align-items: baseline;
  margin: 0 0 60px 0;
`;

const Logo = styled.div`
  width: 44px;
  height: 44px;
  margin: 7px;
  background-image: url(${LogoImg});
`;

const Name = styled.span`
  margin: 7px;
  font-family: 'Ornitons Heavy Regular';
  font-size: 60px;
  color: ${colors.textActiv};
`;

const Title = styled.span`
  margin: 0 0 45px 0;
  font-family: SF Pro Display Regular;
  font-size: 23px;
  color: ${colors.textInfoDark};
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.bgDark};
`;

const SignUpButton = styled(Button)`
  margin-top: 52px;
`;

const ContainerLink = styled.div`
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
      <LogoBox>
        <Logo />
        <Name>BRICKS</Name>
      </LogoBox>
      <Title>Create your account</Title>
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
      <Input
        placeholder="Confirm password"
        name="passwordConfirmation"
        type="password"
        onChange={changeHandler}
      />
      <SignUpButton onClick={registerHandler}>Sign Up</SignUpButton>
      <ContainerLink>
        <Info>Already have an account?</Info>
        <Link to="/login">
          <Login>Log in</Login>
        </Link>
      </ContainerLink>
    </Card>
  );
};

export default RegisterPage;
