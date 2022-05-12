/* //Les recomiendo esta extensión de react que es mas 
completa para los snippets si es que no les resulta 
el imr ocupen el comando “rafce” para crear el componente.*/

import React from 'react';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import '../styles/global.css';

const App = () => {
  return (
    <Layout>
      <Login />
    </Layout>
  )
}

export default App