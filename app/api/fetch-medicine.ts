// // pages/api/fetch-bids.ts
// import { NextApiRequest, NextApiResponse } from 'next';
// import { connectToDatabase } from './db';

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   try {
//     const client = await connectToDatabase();
//     const db = client.db();
//     const collection = db.collection('bids');

//     const bids = await collection.find().toArray();

//     res.status(200).json(bids);
//   } catch (error) {
//     console.error('Error fetching bids:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };
