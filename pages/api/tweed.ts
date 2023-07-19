import { NextApiRequest, NextApiResponse } from "next";
import tweedService from "@/services/tweed.service";
import { authService } from "@/services";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const authenticatedUser = authService.getAuthUser();
  const tweedClient = await tweedService.initialize();

  const answer = await tweedClient.handleMessageFromFrontend(
    req.body.message,
    authenticatedUser.id,
    authenticatedUser.email
  );
  res.send({ answer });
}
