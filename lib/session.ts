import {NextApiRequest} from "next";
import Axios from "axios";

enum METHOD {
  POST = "POST",
  GET = "GET",
  DELETE = "DELETE",
  PUT = "PUT"
}

const API_URL = process.env.REACT_APP_API_URL!;
export default async function handlerRequest(req: NextApiRequest, path = "") {

  const http = Axios.create({
    baseURL: API_URL,
  });


  let response;
  switch (req.method as METHOD) {
    case METHOD.POST:
      response = await http.post(path, req.body)
      break;
    case METHOD.PUT:
      response = await http.put(path, req.body)
      break;
    case METHOD.GET:
      response = await http.get(path)
      break;
    case METHOD.DELETE:
      response = await http.delete(path)
      break;
  }


  return response;
}