import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const socialMediaData = [
    {
      name: "Facebook",
      followers: "3.7 M",
    },
    {
      name: "Instagram",
      followers: "2.4 M",
    },
    {
      name: "Twitter",
      followers: "3.7 M",
    },
    {
      name: "Youtube",
      followers: "2.4 M",
    },
  ];

  res.status(200).json(socialMediaData);
}
