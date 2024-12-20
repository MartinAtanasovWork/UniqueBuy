const mongoose = require('mongoose');

const ArtworkSchema = new mongoose.Schema(
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
    medium: {
      type: String, 
    },
    dimensions: {
      type: String, 
    },
    framing_options: {
      type: String, 
    },
    style: {
      type: String, 
    },
    year_created: {
      type: Number, 
      min: 1600,
      max: new Date().getFullYear(),
    },
    edition: {
      type: String, 
    },
  },
  {
    timestamps: true, 
    collation: { locale: 'en', strength: 2 }, 
  }
);

const Artwork = mongoose.model('Artwork', ArtworkSchema);

module.exports = { Artwork }; 
