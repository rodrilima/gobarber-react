import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import { AuthProvider } from './hooks/AuthContext';
import Routes from './routes';
import ToastContainer from './components/ToastContainer'

const App: React.FC = () => (
  <>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <AuthProvider>
        <Routes />
        <ToastContainer/>
      </AuthProvider>
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;
