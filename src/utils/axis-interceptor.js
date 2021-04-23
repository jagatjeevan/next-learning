import axios from 'axios';

const requestFunction = (req) => {
  // You can intercept all teh request. For any specific type, have your code here
  // console.log(`${req.method} ${req.url}`);
  // req.headers.authorization = 'my secret token';
  console.log(req);
  return req;
};

const errorFunction = (err) => Promise.reject(err);

axios.interceptors.request.use(requestFunction, errorFunction);
