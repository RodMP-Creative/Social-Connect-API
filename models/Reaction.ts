import { Schema, Types } from 'mongoose';

const ReactionSchema = new Schema({
  reactionId: {
    type: Types.ObjectId,
    default: () => new Types.ObjectId()
  },
  reactionBody: {
    type: String,
    required: true,
    minlenght: 1,
    maxlength: 280
  },
  userName: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp: Date) => timestamp.toISOString()
  }
}, {
  toJSON: {
    getters: true
  },
  id: false
});

export default ReactionSchema;