import { Document, Schema, model } from "mongoose";

interface iProps {
  title: string;
  readTime: string;
  image: string;
  likes: Array<string>;
  category: string;
}

interface iPropsData extends iProps, Document {}

const webModel = new Schema<iPropsData>(
  {
    title: {
      type: String,
    },
    readTime: {
      type: String,
    },
    image: {
      type: String,
    },
    likes: {
      type: [],
    },
    category: {
      type: String,
    },
  },
  { timestamps: true }
);

export default model<iPropsData>("webs", webModel);
