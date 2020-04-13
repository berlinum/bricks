import React from 'react';
import AuthRoutes from './AuthRoutes';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <AuthRoutes isAuthenticated={false} />
    </Router>
  );
}

export default App;
