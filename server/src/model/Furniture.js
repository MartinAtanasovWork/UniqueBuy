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
    dimensions: {
      type: Object, 
    },
    weight: {
      type: mongoose.Schema.Types.Decimal128,
    },
    type: {
      type: String, 
    },
    assembly_required: {
      type: Boolean, 
      default: false,
    },
    load_capacity: {
      type: mongoose.Schema.Types.Decimal128, 
    },
  },
  {
    timestamps: true, 
    collation: { locale: 'en', strength: 2 }, 
  }
);

const Furniture = mongoose.model('Furniture', FurnitureSchema);

module.exports = { Furniture };
