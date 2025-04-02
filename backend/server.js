import express from 'express'
import { MongoClient } from 'mongodb'
import 'dotenv/config'

const port = process.env.PORT || 5000
const app = express();

app.use(express.json())

app.get('/', (req, res) => {
  res.send("Hello World");
  
})

app.get('/api/animals', async (req,res)=>{
  // const findResult = await client.db("krislen").collection("contacts").find({}).toArray()

// const findResult = await collection.find({}).toArray();
// console.log('Found documents =>', findResult);
await connect()
await findResult()
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})
  //connect to mongodb
const uri = process.env.MONGODB_CONNECT
const client = new MongoClient(uri)

async function connect() {

  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}


async function findResult() {
  try {
    const findResult = await client.db("krislen").collection("contacts").find({}).toArray()
    console.log('Found documents =>', findResult);
  } catch (err) {
    console.error(`Something went wrong: ${err}`);
  }
}