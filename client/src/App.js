import React from 'react';
import UseRoutes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  const routes = UseRoutes(true);
  return <Router>{routes}</Router>;
}

export default App;
