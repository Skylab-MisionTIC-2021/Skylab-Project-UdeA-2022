import React, { useState } from 'react';
import Index from './pages/Index';
import Home from 'pages/Home'
import Products from 'pages/Products';
import Sales from 'pages/Sales';
import Usuarios from 'pages/Usuarios';
import PrivateLayout from 'layouts/PrivateLayout';
import 'bootstrap/dist/css/bootstrap.css';
import 'css/styles.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CrearVenta from 'pages/CrearVenta';
import EditarVenta from 'pages/EditarVenta';
import { Auth0Provider } from "@auth0/auth0-react";
import { userContext } from 'context/userContext';

function App() {
  const {userData, setUserData} = useState({});

  return (
    <Auth0Provider domain="skylabtic.us.auth0.com"
      clientId="oKQDl3OEiRo10vHyzmgrGtVapysBsPGB"
      redirectUri="http://localhost:3000/Home"
      audience= 'api-autenticacion'>
      <userContext.Provider value={{ userData, setUserData }}>
        <Router>
          <Switch>
            <Route path="/Home" exact>
              <PrivateLayout>
                <Home />
              </PrivateLayout>
            </Route>
            <Route path="/usuarios" exact>
              <PrivateLayout>
                <Usuarios />
              </PrivateLayout>
            </Route>
            <Route path="/products" exact>
              <PrivateLayout>
                <Products />
              </PrivateLayout>
            </Route>
            <Route path="/Sales" exact>
              <PrivateLayout>
                <Sales />
              </PrivateLayout>
            </Route>
            <Route path="/CrearVenta" exact>
              <PrivateLayout>
                <CrearVenta />
              </PrivateLayout>
            </Route>
            <Route path="/EditarVenta" exact>
              <PrivateLayout>
                <EditarVenta />
              </PrivateLayout>
            </Route>
            <Index />

          </Switch>
        </Router>
      </userContext.Provider>  

    </Auth0Provider>
  );
}

export default App;
