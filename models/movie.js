const Joi = require("joi");
const mongoose = require("mongoose");
const { genreSchema } = require("./genre");

const Movie = mongoose.model(
  "Movie",
  new mongoose.Schema({
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 225
    },
    genre: {
      type: genreSchema,
      required: true
    },
    numberinStock: {
      type: Number,
      required: true,
      min: 0,
      max: 225
    },
    dailyRentalRate: {
      type: Number,
      required: true,
      min: 0,
      max: 225
    }
  })
);

function validateMovie(movie) {
  const schema = {
    title: Joi.string()
      .min(5)
      .max(50)
      .required(),
    genreId: Joi.string().required(),
    numberinStock: Joi.number()
      .min(0)
      .required(),
    dailyRentalRate: Joi.number()
      .min(0)
      .required()
  };
  return Joi.validate(movie, schema);
}

exports.Movie = Movie;
exports.validate = validateMovie;
