// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

type Data = {
  name: string;
  description: string;
};

import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: "Michiberto", description: "El mas wapo" });
}
