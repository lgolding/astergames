import express from 'express';
import Game from '../../models/Game';

const router = express.Router();

// @route GET api/games
// @desc Gets all games
// @access Public
router.get('/', async (_req, res) => {
  try {
    let games = await Game.find().sort({ date: -1 });
    res.json(games);
  } catch (err) {
    console.log(`Failed to GET games: ${err}`);
  }
});

export default router;
