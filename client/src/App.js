import React from 'react';
import styled from '@emotion/styled';
import Input from './components/Input';

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
      <Input placeholder="Email" />
      <Input placeholder="Password" />
    </Card>
  );
}

export default App;
