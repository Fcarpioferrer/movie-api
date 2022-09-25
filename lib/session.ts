import {NextApiRequest} from "next";
import Axios, {AxiosResponse} from "axios";

export enum METHOD {
  POST = "POST",
  GET = "GET",
  DELETE = "DELETE",
  PUT = "PUT"
}

export const API_URL = process.env.REACT_APP_API_URL!;
export default async function handlerRequest(req: NextApiRequest, path = ""): Promise<AxiosResponse> {

  const http = Axios.create({
    baseURL: API_URL,
  });

  let response: any;
  switch (req.method as METHOD) {
    case METHOD.POST:
      response = await http.post(path, req.body)
      break;
    case METHOD.PUT:
      response = await http.put(path, req.body)
      break;
    case METHOD.GET:
      response = await http.get(path);
      break;
    case METHOD.DELETE:
      response = await http.delete(path)
      break;
    default:
      response = new Promise((resolve, reject) => reject({success: false}));
      break;
  }

  return (response as AxiosResponse).data;
}