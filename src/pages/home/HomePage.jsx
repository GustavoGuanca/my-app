import React from 'react';
import AuthenticationHelper from '../../shared/helpers/AppAuthenticationHelper';

const HomePage = () => (
  <>
    <h1> HOME PAGE </h1>
    <p> Bienvenido: <b>{AuthenticationHelper.getUser()}</b> </p>
  </>
);

export default HomePage;
