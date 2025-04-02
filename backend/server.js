import express from 'express'
import { MongoClient } from 'mongodb'

const port = process.env.PORT || 5000
const app = express();

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World');
})

app.get('/api/animals', async (req,res)=>{
   await  listDatabases(client);
// const findResult = await collection.find({}).toArray();
// console.log('Found documents =>', findResult);
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
    // Make the appropriate DB calls
   
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

connect();

async function listDatabases(client){
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}