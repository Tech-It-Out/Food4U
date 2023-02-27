let apiUrl
const apiUrls = {
  production: 'https://gskdahngmj.execute-api.us-east-1.amazonaws.com/prod',
  development: 'http://localhost:3001'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
