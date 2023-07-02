import AuthenticationHelper from '../../helpers/AppAuthenticationHelper.js'
import Request from '../../helpers/AppRequest'

const LoginApi = {
  Login: (email, password) => {
    return Request.post('/auth/login', { email, password })
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