import React from 'react';
import GlobalStyles from './GlobalStyles';
import { BrowserRouter as Router } from 'react-router-dom';
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/AuthContext';
import { authRoutes } from './authRoutes';

function App() {
  const { token, userId, login, logout } = useAuth();
  const isAuthenticated = !!token;
  const routes = authRoutes(isAuthenticated);
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
        {routes}
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
