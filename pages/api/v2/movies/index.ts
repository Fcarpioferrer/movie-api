import handlerRequest from "../../../../lib/session";
import withSession from "../../../../lib/ironSession";
import {NextApiRequest, NextApiResponse} from "next";
import paths from "../../../../lib/paths";

export default withSession(async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await handlerRequest(req, paths().movies.get());
  res.json(response);
})