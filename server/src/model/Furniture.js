const mongoose = require('mongoose');

const FurnitureSchema = new mongoose.Schema(
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
      type: Number, 
      required: true,
    },
    stock_quantity: {
      type: Number,
      required: true,
    },
    image_url: {
      type: String,
      required: true
    },
    artisan_id: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Artisan',
      required: true,
    },
    material: {
      type: String, 
    },
    dimensions: {
      type: String, 
    },
    weight: {
      type: Number,
    },
    type: {
      type: String, 
    },
    assembly_required: {
      type: Boolean, 
      default: false,
    },
    load_capacity: {
      type: Number, 
    },
  },
  {
    timestamps: true, 
    collation: { locale: 'en', strength: 2 }, 
  }
);

const Furniture = mongoose.model('Furniture', FurnitureSchema);

module.exports = { Furniture };
