import React from 'react';
import GlobalStyles from './GlobalStyles';
import { BrowserRouter as Router } from 'react-router-dom';
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/AuthContext';
import { AuthRoutes } from './AuthRoutes';

function App() {
  const { token, userId, login, logout } = useAuth();
  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        logout,
        userId,
        isAuthenticated,
      }}
    >
      <Router>
        <GlobalStyles />
        <AuthRoutes isAuthenticated={isAuthenticated} />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
