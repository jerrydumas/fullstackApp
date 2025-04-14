import express from 'express'
import { MongoClient } from "mongodb"
import 'dotenv/config'

const port = process.env.PORT || 5000
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send("Hello World")
})

app.get('/api/animals', (req, res) => {
  res.send("Hola From Doras World")
  const database = client.db('krislen');
  const listings = database.collection('listings').find({}).toArray();
    console.log(listings)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

const uri = process.env.MONGODB_CONNECT
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri)


async function run() {
  
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);