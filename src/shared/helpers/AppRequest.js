import axios from 'axios'
//import AppAuthenticationHelper from './AppAuthenticationHelper.js'
import { Backend } from '../config/GlobalConfig'
import { notification } from 'antd'

// axios.defaults.baseURL = `${window.location.protocol}//${window.location.host}/api/`
// axios.defaults.baseURL = `${window.location.protocol}//localhost:8000`
axios.defaults.baseURL = `${window.location.protocol}//${Backend.url}`


const errorHandler = error => {
  if (error.response) {
    let message
    try {
      message = typeof error.response.data !== 'object' ? error.response.data
        : error.response.data.error ? error.response.data.error
          : error.response.data.ExceptionMessage ? error.response.data.ExceptionMessage
            : error.response.data.Message ? error.response.data.Message
              : error.response.data.message ? error.response.data.message
                : 'Ocurrio un error...'
    } catch (e) {
      message = 'Ocurrio un error...'
    }

    switch (error.response.status) {
      case 404:
        message = "[Endpoint No encontrado] " 
          + error.response.config.baseURL 
          + error.response.config.url
        notification.error({ message: 'Error', 
          description: message, placement: 'bottomRight' })
        break
      case 500:
        if (message.indexOf('Foreign key violation') > -1) {
          let idxStart = message.indexOf('referenced from table') 
            + 'referenced from table'.length
          let idxEnd = message.indexOf('(SQL:')
          message = 'El registro esta siendo utilizado en otra entidad. ' 
            + message.substring(idxStart, idxEnd)
        }
        message = message.length > 300 ? message.substring(0, 300) + '...' : message
        notification.error({ message: 'Error', 
          description: message, placement: 'bottomRight' })
        break
      default:
        message = message.length > 300 ? message.substring(0, 300) + '...' : message
        notification.error({ message: 'Error', 
          description: message, placement: 'bottomRight' })
    }
    return Promise.reject(error)
  }
  notification.error({ message: 'Error',
    description: error.data ? error.data : error, placement: 'bottomRight' })

  return Promise.reject(error)
}

axios.interceptors.request.use(config => {
  config.headers.mode = "cors"
  config.headers['Access-Control-Origin'] = 'http://localhost:3000'
  config.headers['Access-Control-Allow-Headers'] = 'Content-Type'
  // if (AppAuthenticationHelper.isJwtTokenStored()) {
  //     config.headers['Access-Control-Allow-Credentials'] = "*"
  //     config.headers['Control-Allow-Credentials'] = true
  //     config.headers['withCredentials'] = true
  //     config.headers.Authorization = `Bearer ${AppAuthenticationHelper.getJwtToken()}`
  //   }
    return config
  }
)

axios.interceptors.response.use(
  response => {
    if (response.data.ValidationErrors) {
      let validationMessage = ''
      for (const validationType in response.data.ValidationErrors) {
        validationMessage += response.data.ValidationErrors[validationType] + '\n'
      }
      response.status = 400
      return errorHandler(validationMessage)
    }
    return response
  },
  error => errorHandler(error)
)

const get = (path, callback) => {
  return axios.get(path, { callback })
}

const post = (path, data = {}, callback) => {
  return axios.post(path, data, { callback })
}

const postMultipart = (path, data = {}, callback) => {
  return axios.post(path, data, { callback,
    headers: { 'Content-Type': `multipart/form-data boundary=${data._boundary}` }
  })
}

const put = (path, data = {}, callback) => {
  return axios.put(path, data, { callback })
}

const destroy = (path, callback) => {
  return axios.delete(path, { callback })
}

const patch = (path, data = {}, callback) => {
  return axios.patch(path, data, { callback })
}

const download = path => {
  return axios({ url: path, method: 'GET', responseType: 'blob' })
}

export default { get, post, postMultipart, put, destroy, patch, download }