import axios from 'axios'
import config from "../config";

export const signUp = credentials => {
  return axios({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: {
      credentials: {
        email: credentials.email,
        password: credentials.password,
        password_confirmation: credentials.passwordConfirmation
      }
    }
  })
}

export const signIn = credentials => {
  return axios({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: {
      credentials: {
        email: credentials.email,
        password: credentials.password
      }
    }
  })
}

export const signOut = user => {
  return axios({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}

export const changePassword = (passwords, user) => {
  return axios({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: {
      passwords: {
        old: passwords.oldPassword,
        new: passwords.newPassword
      }
    }
  })
}

export const updateUser = (data, user) => {
  return axios({
    url: config.apiUrl + '/update',
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: {
      user: {
        firstName: data.firstName,
        surname: data.surname,
        street: data.street,
        apartment: data.apartment,
        state: data.state,
        country: data.country
      }
    }
  })
}

export const getUserDataFromAPI = token => {
  return axios({
    url: config.apiUrl + '/user',
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
}
