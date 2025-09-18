import express from 'express';
import CommentController from './comment-controller.js';
import { jwtAuth } from '../../middleware/jwt.js';

const commentController = new CommentController();
export const commentRouter = express.Router();

// postComment 
commentRouter.post('/', jwtAuth, (req, res, next) => {
  commentController.postComment(req, res, next);
});

// fetch comment 
commentRouter.get('/', jwtAuth, (req, res, next) => {
  commentController.fetchComment(req, res, next);
});

// delete comment 
commentRouter.delete('/', jwtAuth, (req, res, next) => {
  commentController.deleteComment(req, res, next);
});

// like comment 
commentRouter.post('/like', jwtAuth, (req, res, next) => {
  commentController.likeComment(req, res, next);
});
