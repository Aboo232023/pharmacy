// // models/Medicine.ts

// import clientPromise from '../lib/mongodb';

// interface Medicine {
//   _id: string;
//   name: string;
//   quantity: number;
// }

// export async function getMedicines(): Promise<Medicine[]> {
//   const client = await clientPromise;
//   const db = client.db();
//   const collection = db.collection<Medicine>('medicines');
//   return collection.find({}).toArray();
// }
