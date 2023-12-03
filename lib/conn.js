import { MongoClient } from 'mongodb';

const MONGO_URI = process.env.MONGO_URI
const MONGO_DB = process.env.MONGO_DB

if (!MONGO_URI) {
    throw new Error('Define the MONGODB_URI environmental variable');
}

if (!MONGO_DB) {
    throw new Error('Define the MONGODB_DB environmental variable');
}

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
    if (cachedClient && cachedDb) {
        return {
            client: cachedClient,
            db: cachedDb,
        };
    }
    let client = new MongoClient(MONGO_URI);
    await client.connect();
    let db = client.db(MONGO_DB);
    cachedClient = client;
    cachedDb = db;
    return {
        client: cachedClient,
        db: cachedDb,
    };
}