import React from 'react';
import AuthRoutes from './AuthRoutes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <AuthRoutes isAuthenticated={true} />
    </Router>
  );
}

export default App;
