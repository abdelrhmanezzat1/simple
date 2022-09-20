import { Schema, model } from "mongoose";
interface Videos {
  title: String;
  des: String;
  url: string;
}
const videoSchema = new Schema<Videos>(
  {
    title: { type: String, required: true },
    des: { type: String, required: true },
    url: { type: String, required: true,unique:true },
  },
  { timestamps: true }
);
const Video = model("videos", videoSchema);

export default Video;
