import express from 'express';
import HttpStatus from '../../HttpStatus';
import Game from '../../models/Game';

const router = express.Router();

// @route GET api/games
// @desc Gets all games
// @access Public
router.get('/', async (_req, res) => {
  try {
    const games = await Game.find().sort({ date: -1 });
    res.json(games);
  } catch (err) {
    console.log(`Failed to GET games: ${err}`);
    res.status(HttpStatus.InternalServerError);
  }
});

// @route POST api/games
// @desc Creates a game
// @access Public
router.post('/', async (req, res) => {
  const newGame = new Game({
    player1: req.body.player1,
    player2: req.body.player2,
  });

  try {
    const createdGame = await newGame.save();
    res.status(HttpStatus.Created).json(createdGame);
  } catch (err) {
    console.log(`Failed to POST a game: ${err}`);
    res.status(HttpStatus.InternalServerError);
  }
});

export default router;
