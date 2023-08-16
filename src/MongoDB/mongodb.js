const { MongoClient } = require('mongodb');

// Replace with your MongoDB connection string
const uri = 'mongodb://localhost:27017'; // Replace with your connection string

async function main() {
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const database = client.db('FootballData'); // Replace with your database name
    const playersCollection = database.collection('Players'); // Replace with your collection name

    // Perform database operations here
    // Example: Query all players from Premier League
    const premierLeaguePlayers = await playersCollection.find({ league: 'Premier League' }).toArray();
    console.log(premierLeaguePlayers);
    console.log("Connection success!")
  } finally {
    await client.close();
  }
}

main().catch(console.error);
