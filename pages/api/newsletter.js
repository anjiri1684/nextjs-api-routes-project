import { MongoClient } from "mongodb";

async function connectDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://anjiri:38836510@cluster0.enouw.mongodb.net/events?retryWrites=true&w=majority&appName=Cluster0"
  );

  return client;
}

async function insertDocument(client, document) {
  const db = client.db();

  await db.collection("newsletter").insertOne({ email: userEmail });
}

async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email address" });
      return;
    }
    let client;

    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ message: "connecting to the database failed!" });
      return;
    }

    try {
      await insertDocument(client, { email: userEmail });
      client.close();
    } catch (error) {
      res.status(500).json({ message: "Inserting data failed!" });
      return;
    }

    res.status(201).json({ message: "Signed up" });
  }
}

export default handler;
