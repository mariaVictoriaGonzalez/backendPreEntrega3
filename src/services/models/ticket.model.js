import mongoose from "mongoose";

const collection = "ticket";

const schema = new mongoose.Schema({
  code: String,
  purchase_datetime: Date,
  amount: Number,
  purchaser: String,
});

const ticketModel = mongoose.model(collection, schema);

export default ticketModel ;
