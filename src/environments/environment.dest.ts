export const environment = {
  production: false,
  version: 0,
  name: 'ENV_NAME',
  debug: true,
  slack: {
    enable: false,
    url: '',
    author_name: 'NS_APP',
  },  
  mock: {
    token: 'dummy_token',
    user: {
      id: 999,
      firstName: 'Dummy',
      lastName: 'User',      
    },
  },
  apiUrl: 'http://localhost:3000/api',
  stripe: {
    publishedKey: ''
  }  
};