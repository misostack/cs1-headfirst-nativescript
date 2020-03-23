export const environment = {
  production: false,
  name: 'ENV_NAME',
  debug: true,
  slack: {
    enable: false,
    url: '',
    author_name: 'NS_APP',
  },  
  mock: {
    token: '',
    user: '',
    password: ''
  },
  apiUrl: 'http://localhost:3000/api',
  stripe: {
    publishedKey: ''
  }  
};