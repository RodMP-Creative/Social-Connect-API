import { Schema, model } from 'mongoose';
import ReactionSchema from './Reaction.js';
import { formatDate } from '../utils/dateFormatter.js';

const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    maxlength: 280
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: formatDate
  },
  userName: {
    type: String,
    required: true
  },
  reactions: [ReactionSchema]
}, {
  toJSON: {
    virtuals: true,
    getters: true
  },
  id: false
});

ThoughtSchema.virtual('reactionCount').get(function() {
  return (this.reactions as Array<any>).length;
});

const Thought = model('Thought', ThoughtSchema);

export default Thought;
