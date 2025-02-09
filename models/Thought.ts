import { Schema, model } from 'mongoose';

const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  createdAt: {
    type: Date,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'valid email address']
  },
  userName: [
    {
      type: String,
      required: true,
    }
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ]
}, {
  toJSON: {
    virtuals: true,
  },
  id: false
});

const User = model('User', userSchema);

export default User;
