const mongoose = require('mongoose');

const JewelrySchema = new mongoose.Schema(
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
    size: {
      type: String,
    },
    type: {
      type: String,
    },
    gemstone: {
      type: String,
    },
    weight: {
      type: mongoose.Schema.Types.Decimal128,
    }
  },
  {
    timestamps: true, 
    collation: { locale: 'en', strength: 2 }, 
  }
);

const Jewelry = mongoose.model('Jewelry', JewelrySchema);

module.exports = { Jewelry };
