import Axios, {AxiosResponse} from 'axios';
import {Response} from "../types/Response";

const http = Axios.create({});

http.interceptors.response.use(function (response: AxiosResponse) {
  return response;
}, error => {
  console.error(error);
});


export function get(url: string, params?: any): Promise<Response> {
  return http.get(url, {params}).then(res => res.data)
    .catch((err) => {
      return Promise.resolve({success: false})
    });
}

export function post(url: string, params?: any): Promise<Response> {
  return http.post(url, params).then(res => {
    return res?.data ? res.data : res;
  }).catch(reason => {
    return Promise.reject(reason);
  });
}

export function put(url: string, params?: any): Promise<Response> {
  return http.put(url, params).then(res => {
    return (res.data ? res.data : res) ?? {};
  }).catch(reason => {
    return Promise.reject(reason);
  });
}

export function deleteReq(url: string, params?: any): Promise<Response> {
  return http.delete(url, params).then(res => res.data).catch(reason => {
    console.error(reason.message);
  });
}
