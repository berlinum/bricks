import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../components/Button';
import { AuthContext } from '../context/AuthContext';

const CollectionPage = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);
  const logoutHandler = (event) => {
    event.preventDefault();
    auth.logout();
    history.push('/');
  };
  return (
    <div>
      <h1>Collection Page</h1>
      <Button onClick={logoutHandler}>Log Out</Button>
    </div>
  );
};

export default CollectionPage;
