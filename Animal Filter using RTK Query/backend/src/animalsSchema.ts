import mongoose from "mongoose";

const animalsSchema = new mongoose.Schema({
  name: {
    type: String,
    maxLength: 20,
    require: true,
  },
  image: {
    type: String,
    maxLength: 250,
    require: true,
  },
  specie: {
    type: String,
    maxLength: 20,
    require: true,
  },
});

export default mongoose.model("animals", animalsSchema);