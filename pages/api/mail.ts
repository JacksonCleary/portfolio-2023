import { NextApiRequest, NextApiResponse } from 'next';

export default function personHandler(
  req: NextApiRequest,
  res: NextApiResponse<Person | ResponseError>
) {
  const { query } = req;
  const { id } = query;

  // User with id exists
  return id
    ? res.status(200).json(id)
    : res.status(404).json({ message: `User with id: ${id} not found.` });
}
