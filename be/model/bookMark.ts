import { Document, Schema, model } from "mongoose";

interface iProps {
  bookMark: {}[];
}

interface iPropsData extends iProps, Document {}

const bookMarkModel = new Schema<iPropsData>(
  {
    bookMark: {
      type: [],
    },
  },
  { timestamps: true }
);

export default model<iPropsData>("bookMarks", bookMarkModel);
