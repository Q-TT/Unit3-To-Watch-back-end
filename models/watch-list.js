const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
    {
      text: {
        type: String,
        required: true
      },
      author: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
      },
      review: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'WatchList'
      },
    },
    { timestamps: true }
  );

const watchListSchema = new mongoose.Schema(
    {
        Title: {
            type: String,
            required: true,
        },
        Year: {
            type: String,
            required: true,
        },
        Type: {
            type: String,
            required: true,
        },
        Review: {
            type: String,
            required: true,
        },
        likes: {
            type: Array, 
        },
        author: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'User' 
        },
        Comments: [commentSchema]
    }, 
    { timestamps: true }
  );


const WatchList = mongoose.model('WatchList', watchListSchema);
module.exports = WatchList;
