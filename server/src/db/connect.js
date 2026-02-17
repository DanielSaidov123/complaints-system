import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const client = new MongoClient(process.env.MONGO_URL);
const dbName = "Complaints";   
let collection;

export async function connectDB() {
  await client.connect();
  console.log("Connected to MongoDB Atlas");
  const db = client.db(dbName);
  collection = db.collection("Complaints");
}

export function getTodosCollection() {
  return collection;
}
