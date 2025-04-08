import mongoose from "mongoose";
import "dotenv";

const mongoURL =
  process.env.MONGO_URL || "mongodb://127.0.0.1:27017/saveAddress";

async function main() {
  await mongoose.connect(mongoURL);
  console.log("Connected with success!");
}

main().catch((error) => console.log(`Error: ${error}`));

export default mongoose;
