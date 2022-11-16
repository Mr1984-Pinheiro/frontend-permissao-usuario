import React from 'react';
import { AuthProvider } from './context/AuthContext';
import Login from './Login';


function App() {
  return (
    <AuthProvider>
      <Login />
    </AuthProvider>
  );
}

export default App;
