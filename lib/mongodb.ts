// // lib/mongodb.ts

// import { MongoClient } from 'mongodb';

// const uri = process.env.MONGODB_URI as string;
// const options = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// };

// let client: MongoClient;
// let clientPromise: Promise<MongoClient>;

// if (!process.env.MONGODB_URI) {
//   throw new Error('Please add your MongoDB URI to the .env file');
// }

// if (!clientPromise) {
//   client = new MongoClient(uri, options);
//   clientPromise = client.connect();
// }

// export default clientPromise;
