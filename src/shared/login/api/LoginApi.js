import AuthenticationHelper from '../../helpers/AppAuthenticationHelper.js'
import Request from '../../helpers/AppRequest'

const LoginApi = {
  Login: (email, contraseña) => {
    return Request.post('/login', { email, contraseña })
      .then(response => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText)
        }
        AuthenticationHelper.storeUser(email)
        AuthenticationHelper.storeRole(response.user.role)
        AuthenticationHelper.storeJwtToken(response.token)
        return response;
      })
      .catch(error => {
        throw error
      })
  }
}

export default LoginApi