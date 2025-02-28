import { Schema, Types } from 'mongoose';
import { formatDate } from '../utils/dateFormatter.js';

const ReactionSchema = new Schema({
  reactionId: {
    type: Types.ObjectId,
    default: () => new Types.ObjectId()
  },
  reactionBody: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280
  },
  userName: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: formatDate
  }
}, {
  toJSON: {
    getters: true
  },
  id: false
});

export default ReactionSchema;