/* //Les recomiendo esta extensión de react que es mas 
completa para los snippets si es que no les resulta 
el imr ocupen el comando “rafce” para crear el componente.*/
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import React from 'react';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import RecoveryPassword from '../containers/recoveryPassword';
import '../styles/global.css';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
          <Layout>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/RecoveryPassword' component={RecoveryPassword} />
            <Route component={NotFound} />
          </Layout>
      </Switch>
    </BrowserRouter>
  )
}

export default App