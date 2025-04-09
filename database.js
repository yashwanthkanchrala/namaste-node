const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = "mongodb+srv://yashwanth24710:30359790@namastenode.qy7chj8.mongodb.net/?retryWrites=true&w=majority&appName=namastenode";
const client = new MongoClient(url);

// Database Name
const dbName = 'HelloWorld';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('user');

  // the following code examples can be pasted here...

  const data = {
    firstame: "tinku",
    lastname: "kancharla",
    city: "sircilla",
    mobile: "789654321"
  };
  const insertResult = await collection.insertMany([data]);
  console.log('Inserted documents =>', insertResult)

  const findResult = await collection.find({}).toArray();
  console.log('Found documents =>', findResult);

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());