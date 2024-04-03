// // pages/api/medicines/index.ts

// import { NextApiRequest, NextApiResponse } from 'next';
// import { getMedicines } from '@/models/Medicine';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'GET') {
//     try {
//       const medicines = await getMedicines();
//       res.status(200).json(medicines);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   } else {
//     res.setHeader('Allow', ['GET']);
//     res.status(405).json({ message: `Method ${req.method} Not Allowed` });
//   }
// }
