import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const GameSchema = new Schema({
  player1: {
    type: String,
    required: true
  },
  player2: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Game = mongoose.model('game', GameSchema);

export default Game;
