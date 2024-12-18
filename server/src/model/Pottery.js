const mongoose = require('mongoose');

const PotterySchema = new mongoose.Schema(
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
    finish: {
      type: String, 
    },
    usage: {
      type: String, 
    },
    weight: {
      type: Number, 
    },
    customizable: {
      type: Boolean, 
      default: false,
    },
  },
  {
    timestamps: true, 
    collation: { locale: 'en', strength: 2 }, 
  }
);

const Pottery =mongoose.model('Pottery', PotterySchema);

module.exports = { Pottery }; 
