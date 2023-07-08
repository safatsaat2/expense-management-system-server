const mongoose = require("mongoose");

const transectionSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      require: [true, "amount is required"],
    },
    type: {
      type: String,
      require: [true, "type is required"],
    },
    category: {
      type: String,
      require: [true, "category is required"],
    },
    refrence: {
      type: String,
    },
    description: {
      type: String,
      require: [true, "description is required"],
    },
    date: {
      type: String,
      require: [true, "date is required"],
    },
  },
  { timestamps: true }
);

const transectionModel = mongoose.model("transection", transectionSchema);
