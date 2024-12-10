const mongoose = require('mongoose');

const ClothesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String, 
      required: true
    },
    price: {
      type: mongoose.Schema.Types.Decimal128, 
      required: true,
    },
    stock_quantity: {
      type: Number,
      required: true,
    },
    image_url: {
      type: String,
    },
    artisan_id: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Artisan',
      required: true,
    },
    material: {
      type: String, 
    },
    size: {
      type: String,
    },
    gender: {
      type: String, 
    },
    color: {
      type: String, 
    },
    fit: {
      type: String, 
    },
    care_instructions: {
      type: String,
    },
  },
  {
    timestamps: true,
    collation: { locale: 'en', strength: 2 }, 
  }
);

const Clothes = mongoose.model('Clothes', ClothesSchema);

module.exports = { Clothes }
