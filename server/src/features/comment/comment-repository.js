import ErrorHandler from '../../middleware/error-handler.js';
import mongoose from 'mongoose';
import { CommentModel } from './commentSchema.js';

export default class commentRepository {
  //postComment
  async postComment(postId, userId, commentData, commentTime) {
    try {
      const comment = new CommentModel({
        post: postId,
        user: userId,
        comment: commentData,
        commenttime: commentTime,
      });
      await comment.save();
      return comment.populate('user');
    } catch (err) {
      console.log('postComment repository error : ', err);
      throw new ErrorHandler('comment not posted ', 500);
    }
  }

  //fetch comment
  async fetchComment(postId) {
    try {
      const comments = await CommentModel.find({ post: postId }).populate(
        'user'
      );
      return comments;
    } catch (err) {
      console.log('fetchComment repository Errors : ', err);
      throw new ErrorHandler('Something went wrong with database', 500);
    }
  }

  //delete comment
  async deleteComment(commentId) {
    try {
      const comment = await CommentModel.findByIdAndDelete(commentId);
      return comment;
    } catch (err) {
      console.log('deleteComment repository Error : ', err);
      throw new ErrorHandler('Something went wrong with database', 500);
    }
  }

  //find comment
  async findComment(commentId) {
    try {
      const comment = await CommentModel.findById(commentId);
      return comment;
    } catch (err) {
      console.log('findComment repository Error : ', err);
      throw new ErrorHandler('not able to find comment', 500);
    }
  }

  // add like to comment
  async addLikeToComment(commentId, userId) {
    try {
      const comment = await CommentModel.findByIdAndUpdate(
        commentId,
        { $addToSet: { likes: userId } },
        { new: true }
      );

      return comment;
    } catch (err) {
      console.log('addLikeToComment repository Error :', err);
      throw new ErrorHandler('Something went wrong with database', 500);
    }
  }

  //remove like to comment
  async removeLikeToComment(commentId, userId) {
    try {
      const comment = await CommentModel.findByIdAndUpdate(
        commentId,
        { $pull: { likes: new mongoose.Types.ObjectId(userId) } },
        { new: true }
      );

      return comment;
    } catch (err) {
      console.log('deleteLikeToComment repository Error : ', err);
      throw new ErrorHandler('Something went wrong with database', 500);
    }
  }
}
