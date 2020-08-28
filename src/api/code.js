import http from './http';

export const randomCode = (data) => {
  console.log(data);
  return http.get('/get-random-code');
};

export const postCode = (data) => {
  console.log(data);
  return http.post('/post-screen-1', data);
};
