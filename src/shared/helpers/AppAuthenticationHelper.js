import jwtDecode from 'jwt-decode';



const getUser = () => {
  return sessionStorage.getItem('name');
};

const storeUser = (name) => {
  sessionStorage.setItem('name', name);
};

const getRole = () => {
  return sessionStorage.getItem('role');
};

const storeRole = (role) => {
  sessionStorage.setItem('role', role);
};

const isJwtTokenStored = () => {
  return sessionStorage.getItem('jwtToken') ? true : false;
};

const getJwtToken = () => {
  return isJwtTokenStored() ? sessionStorage.getItem('jwtToken') : null;
};

const storeJwtToken = (jwtToken) => {
  if (jwtToken.includes('Bearer')) {
    jwtToken = jwtToken.replace('Bearer ', '');
  }
  sessionStorage.setItem('jwtToken', jwtToken);
};


export default {getUser, getRole, storeUser, storeRole, getJwtToken, storeJwtToken}

