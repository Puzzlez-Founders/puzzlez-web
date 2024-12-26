import { connectToDatabase } from "../../lib/mongodb";

export default async function handler(req: any, res: any) {
  try {
    const db = await connectToDatabase();
    const employeesCollection = db.collection("employees");

    if (req.method === "GET") {
      const employees = await employeesCollection.find({}).toArray();
      res.status(200).json(employees);
    } else if (req.method === "POST") {
      const { name, position } = req.body;
      const result = await employeesCollection.insertOne({ name, position });
      res.status(201).json(result);
    } else {
      res.status(405).end(); // Method Not Allowed
    }
  } catch (error) {
    res.status(500).json({ error: "Database connection failed" });
  }
}
