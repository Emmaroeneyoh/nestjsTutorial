import * as mongoose from "mongoose";

export const chatSchema = new mongoose.Schema({

    chat: {
        type: String,
   
    },

    type: {
        type: String,
        enum:['file', 'text']
    },
    users: Array,
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    messageStatus: {
        type: String,
        default : 'sent'
    },
    
},
{ timestamps: true }
  );