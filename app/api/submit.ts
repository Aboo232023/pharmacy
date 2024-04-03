// import { NextApiRequest, NextApiResponse } from 'next';
// import { connectToDatabase } from './db';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     const { title, description, image } = req.body;

//     const client = await connectToDatabase();
//     const collection = client.db().collection('medicines'); 

//     try {
//       const result = await collection.insertOne({ title, description, image });
//       console.log('Form data inserted with _id:', result.insertedId);
//       res.status(200).json({ message: 'Form data inserted successfully' });
//     } catch (error) {
//       console.error('Error inserting data into MongoDB:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   } else {
//     res.status(405).json({ error: 'Method Not Allowed' });
//   }
// }
