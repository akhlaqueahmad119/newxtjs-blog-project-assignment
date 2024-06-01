import { NextApiRequest, NextApiResponse } from "next";

const generateBlogData = (start: number, count: number) => {
  const baseImagePath = "/images/blogCard";
  const imageExtension = ".png";

  return Array.from({ length: count }, (_, index) => ({
    image: `${baseImagePath}${start + index}${imageExtension}`,
    video: index % 2 !== 0,
    title: "Integer Maecenas Eget Viverra",
    author: "Joanna Wellick",
    profileImage: "/images/profile.png",
    date: "June 28, 2018",
    shares: "1K",
    description:
      "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
  }));
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { start = 0, count = 6 } = req.query;
  const startIdx = parseInt(start as string, 10);
  const countIdx = parseInt(count as string, 10);
  const blogData = generateBlogData(startIdx, countIdx);

  res.status(200).json(blogData);
}
