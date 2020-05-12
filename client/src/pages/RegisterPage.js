import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import cogoToast from 'cogo-toast';
import useHttp from '../hooks/useHttp.hook';
import colors from '../utils/colors';
import Input from '../components/Input';
import Button from '../components/Button';
import Message from '../components/Message';
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
  color: ${colors.textActive};
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

const Login = styled(Link)`
  color: ${colors.textActive};
  margin: 5px;
`;

const RegisterPage = () => {
  const history = useHistory();
  const { loading, request, error, clearError } = useHttp();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confPassword: '',
  });

  useEffect(() => {
    error && cogoToast.warn(<Message>{error}</Message>);
    clearError();
  }, [error, clearError]);

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const registerHandler = async () => {
    try {
      const { name, email, password, confPassword } = form;
      if (password !== confPassword) {
        cogoToast.warn(<Message>Passwords don&apos;t match</Message>);
      } else {
        const data = await request('/api/auth/register', 'POST', {
          name,
          email,
          password,
        });
        cogoToast.success(<Message>{data.message}</Message>);
        history.push('/auth/login');
      }
    } catch (error) {
      // empty
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
        name="confPassword"
        type="password"
        onChange={changeHandler}
      />
      <SignUpButton onClick={registerHandler} disabled={loading}>
        Sign Up
      </SignUpButton>
      <ContainerLink>
        <Info>Already have an account?</Info>
        <Login to="/login">Log in</Login>
      </ContainerLink>
    </Card>
  );
};

export default RegisterPage;
