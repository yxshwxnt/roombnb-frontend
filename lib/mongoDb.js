const { MongoClient, ServerApiVersion } = require('mongodb');

const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017"
const mongoDB = process.env.MONGO_DB || "roombnb"

const client = new MongoClient(mongoURI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

let cashedClient = null;
let cashedDB = null;

export async function connectDB() {
    if (cashedClient && cashedDB) {
        return {
            client: cashedClient,
            db: cashedDB
        }
    }
    await client.connect();
    let db = client.db(mongoDB);
    console.log("Successfully connected to MongoDB!");
    cashedClient = client;
    cashedDB = db;
    return {
        client: cashedClient,
        db: cashedDB
    }
} 