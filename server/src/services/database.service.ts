import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

dotenv.config();

export const collections: { notes?: mongoDB.Collection } = {};

export async function connectToDatabase() {
  const client: mongoDB.MongoClient = new mongoDB.MongoClient(
    process.env.DB_CONN_STRING!
  );
  await client.connect();

  const db: mongoDB.Db = client.db(process.env.DB_NAME);

  const collectionName = process.env.NOTES_COLLECTION_NAME;
  if (!collectionName) {
    throw new Error(
      "NOTES_COLLECTION_NAME is not defined in environment variables"
    );
  }

  const notesCollection: mongoDB.Collection = db.collection(
    collectionName as string
  );

  collections.notes = notesCollection;
  console.log(
    `Successfully connected to database: ${db.databaseName} and collection: ${notesCollection.collectionName}`
  );
}
