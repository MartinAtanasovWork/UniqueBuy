const mongoose = require("mongoose");

const artisanSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true, 
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
    },
    location: {
      type: Object, 
    },
    bio: {
      type: String, 
    },
    profileImageUrl: {
      type: String, 
    },
    specialty: {
      type: String,      
    },    
    socialMediaLinks: {
      type: Object, 
      of: String, 
    }    
  },
  {
    collation: {
      locale: "en",
      strength: 2,
    },
    timestamps: true, 
  }
);

const Artisan = mongoose.model("Artisan", artisanSchema);

module.exports = { Artisan };
