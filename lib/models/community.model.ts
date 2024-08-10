import mongoose, { Schema } from "mongoose";

const communitySchema = new Schema({
  id: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  image: { type: String },
  bio: { type: String },
  createdBy: { type: Schema.Types.ObjectId, ref: "User" },
  threads: [
    {
      type: Schema.Types.ObjectId,
      ref: "Thread",
    },
  ],
  members: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

const User =
  mongoose.models.Community || mongoose.model("Community", communitySchema);

export default User;
