import mongoose from "mongoose";

const MedSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Description: { type: String, required: true },
  Strength: { type: String, required: true },
  Availability: { type: String, default: true },
  Photo: { type: String, required: false },
  MRP: { type: String, required: true },
  Key: { type: Number, required: true },
  DosageForm: { type: String, required: true }, // if the
});

const medicine = mongoose.model('Medicine', MedSchema)

export default medicine