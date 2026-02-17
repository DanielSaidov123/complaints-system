import { getTodosCollection } from "../db/connect.js";

export async function createComplaint(req, res) {
  const collection = getTodosCollection();
  const complaint = req.body;
  const result = await collection.insertOne(complaint);
  res.send({ insertedId: result.insertedId });
}


export async function getComplaint(req, res) {
  const collection = getTodosCollection();
  const complaint = await collection.find({}).toArray();
  res.send(complaint);
}
