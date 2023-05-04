// Destructing the Schema and model
const { Schema, model } = require("mongoose");

// Creatinga new Schema, same thing as mongoose.Schema
const fruitSchema = new Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  readyToEat: Boolean,
});

// Creating a new model, same thing as mongoose.model
//first param is the name and the second is the Schema
const Fruit = model("Fruit", fruitSchema);

module.exports = Fruit;
