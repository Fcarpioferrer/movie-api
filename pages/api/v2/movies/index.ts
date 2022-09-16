import {NextApiRequest, NextApiResponse} from "next";
import {Movie} from "../../../../types/Movie";
import handlerRequest from "../../../../lib/session";
import paths from "../../../../lib/paths";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Movie>
) {
  const response = await handlerRequest(req, paths().movies());
  res.json(response.data);
}