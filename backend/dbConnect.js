

// Replace the uri string with your connection string.
const uri = process.env.MONGODB_CONNECT;

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('AmazingMernApp.');
    const animals = database.collection('animals');

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);