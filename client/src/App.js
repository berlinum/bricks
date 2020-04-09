import React from 'react';
import styled from '@emotion/styled';
import Input from './components/Input';
import Button from './components/Button';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 375px;
  height: 812px;
  background-color: #1d1d1b;
`;

function App() {
  return (
    <Card>
      <Input placeholder="Name" id="name" type="text" />
      <Input placeholder="Email" id="email" type="text" />
      <Input placeholder="Password" id="password" type="password" />
      <Button>Sign Up</Button>
    </Card>
  );
}

export default App;
