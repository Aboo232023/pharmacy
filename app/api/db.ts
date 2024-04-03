// // import { MongoClient, MongoClientOptions } from 'mongodb';

// // let cachedClient: MongoClient;

// // const uri = process.env.MONGODB_URI || '';

// // const options: MongoClientOptions = {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// // };

// // export async function connectToDatabase() {
// //   if (cachedClient) {
// //     return cachedClient;
// //   }

// //   const client = new MongoClient(uri, options);

// //   await client.connect();

// //   cachedClient = client;
// //   return client;
// // }
// import { MongoClient } from 'mongodb';
// import { getMedicines } from '@/models/Medicine';

// let cachedClient: MongoClient;

// const uri: any | string | "undefined" = process.env.MONGODB_URI;

// export async function connectToDatabase() {
//   if (cachedClient) {
//     return cachedClient;
//   }
// // assign a client variable for the new Mongo client
//   const client = new MongoClient(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });

//   await client.connect();

//   cachedClient = client;
//   return client;
// }

// // Export BId as type ( to be used in the useState type annotation where it is imported)

// export type { getMedicines }; 

