import express from 'express';
import Game from '../../models/Game';

const router = express.Router();

// @route GET api/games
// @desc Gets all games
// @access Public
router.get('/', (_req, res) => {
  Game.find()
    .sort({ date: -1 })
    .then(games => res.json(games));
});

export default router;
