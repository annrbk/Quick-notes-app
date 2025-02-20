import { ObjectId } from "mongodb";

export interface Note {
  _id: ObjectId;
  text: string;
}
