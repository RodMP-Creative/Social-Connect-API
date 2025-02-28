import { Router } from 'express';
import {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction
} from '../../controllers/thought-Controller.js';

const router = Router();

router.route('/')
  .get(async (req, res, next) => {
    try {
      await getAllThoughts(req, res);
    } catch (err) {
      next(err);
    }
  })
  .post(async (req, res, next) => {
    try {
      await createThought(req, res);
    } catch (err) {
      next(err);
    }
  });

router.route('/:thoughtId')
  .get(async (req, res, next) => {
    try {
      await getThoughtById(req, res);
    } catch (err) {
      next(err);
    }
  })
  .put(async (req, res, next) => {
    try {
      await updateThought(req, res);
    } catch (err) {
      next(err);
    }
  })
  .delete(async (req, res, next) => {
    try {
      await deleteThought(req, res);
    } catch (err) {
      next(err);
    }
  });

router.route('/:thoughtId/reactions')
  .post(async (req, res, next) => {
    try {
      await addReaction(req, res);
    } catch (err) {
      next(err);
    }
  })
  .delete(async (req, res, next) => {
    try {
      await removeReaction(req, res);
    } catch (err) {
      next(err);
    }
  });

export default router;
