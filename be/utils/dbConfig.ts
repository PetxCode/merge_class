import { connect } from "mongoose";

const url: string = "mongodb://127.0.0.1:27017/mergeDB";

export const connectDB = async () => {
  await connect(url)
    .then(() => {
      console.log("db connected successfully 🚀🚀❤️❤️❤️");
    })
    .catch(() => console.error());
};
