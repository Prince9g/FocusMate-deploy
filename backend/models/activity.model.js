import mongoose from "mongoose";

const roomActivitySchema = new mongoose.Schema({
  socketId: { type: String, required: true },
  roomId: { type: String, required: true },
  userIP: { type: String },
  joinedAt: { type: Date, default: Date.now },
  leftAt: { type: Date },
});

const RoomActivity = mongoose.model("RoomActivity", roomActivitySchema);

export default RoomActivity;
