import mongoose from "mongoose";
const { Schema, Types} = mongoose;
const ImageSchema = new Schema({
    url: { type: String, required: true },
    alt: { type: String, default: "" },
    isPrimary: { type: Boolean, default: false },
}, { _id: false });

const AttributeSchema = new Schema({
    name: { type: String, required: true, trim: true },//color
    value: { type: String, required: true, trim: true },//red
    price: { type: Number, default: 0},
}, { _id: false });