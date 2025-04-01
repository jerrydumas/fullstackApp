import express from 'express'
import { MongoClient } from 'mongodb'

const port = process.env.PORT || 5000
const app = express();

app.use(express.json())

// Connection URL
const url = process.env.MONGODB_CONNECT;
const client = new MongoClient(url);

// Database Name
const dbName = 'AmazingMernApp';

async function main() {
	
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('animals');
  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

app.get('/', (req, res) => {
  res.send('Hello World');
})

app.get('/api/animals', async (req,res)=>{
const findResult = await collection.find({}).toArray();
console.log('Found documents =>', findResult);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})

