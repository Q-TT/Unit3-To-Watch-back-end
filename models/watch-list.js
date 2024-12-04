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
        title: {
            type: String,
            required: true,
        },
        year: {
            type: Number,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
        language: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
            enum: ['Action', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', "Documentary", "Drama", "Family", "Fantasy", "Film-Noir", "Game-Show", "History", "Horror", "Music","Musical", "Mystery", "News", "Reality-TV", "Romance","Sci-Fi", "Short","Sport","Talk-show","Thriller","War","Western"],
        },
        plot: {
            type: String,
            required: true,
        },
        director: {
            type: String,
            required: true,
        },
        actors: {
            type: String,
            required: true,
        },
        imdbRating: {
            type: Number,
            required: true,
        },
        review: {
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
        comments: [commentSchema]
    }, 
    { timestamps: true }
  );


const WatchList = mongoose.model('WatchList', watchListSchema);
module.exports = WatchList;
