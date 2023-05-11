import mongoose, { connect } from "mongoose";


export default async function Connect(){

  await  mongoose.connect(process.env.MONGO_URL)
  console.log(`data-Base-Connected`)
}