import handlerRequest from "../../../../../lib/session";
import {NextApiRequest, NextApiResponse} from "next";
import {Movie} from "../../../../../types/Movie";
import paths from "../../../../../lib/paths";

export default async function handler(req: NextApiRequest, res: NextApiResponse<Movie>) {
  const {id} = req.query as any as { id: number };
  const response = await handlerRequest(req, paths(id).movies.get());
  res.json(response.data);
}