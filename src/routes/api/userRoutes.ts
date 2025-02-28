import { Router } from 'express';
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} from '../../controllers/user-controller.js';

const router = Router();

router.route('/')
  .get(async (req, res, next) => {
    try {
      await getAllUsers(req, res);
    } catch (err) {
      next(err);
    }
  })
  .post(async (req, res, next) => {
    try {
      await createUser(req, res);
    } catch (err) {
      next(err);
    }
  });

router.route('/:userId')
  .get(async (req, res, next) => {
    try {
      await getUserById(req, res);
    } catch (err) {
      next(err);
    }
  })
  .put(async (req, res, next) => {
    try {
      await updateUser(req, res);
    } catch (err) {
      next(err);
    }
  })
  .delete(async (req, res, next) => {
    try {
      await deleteUser(req, res);
    } catch (err) {
      next(err);
    }
  });

router.route('/:userId/friends/:friendId')
  .post(async (req, res, next) => {
    try {
      await addFriend(req, res);
    } catch (err) {
      next(err);
    }
  })
  .delete(async (req, res, next) => {
    try {
      await removeFriend(req, res);
    } catch (err) {
      next(err);
    }
  });

export default router;
