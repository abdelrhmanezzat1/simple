import {
  getVideos,
  cereteVideos,
  updataVideos,
  delVideos,
  getVideo
} from "./video.conrol";

import express from "express";
const routervideo = express.Router();
//POST VIDEO
routervideo.post("/videos", cereteVideos);
//GET VIDEOS
routervideo.get("/videos", getVideos);
//GET ONE VIDEO
routervideo.get("/videos/:id", getVideo);
// PUT VIDEO
routervideo.put("/videos/:id", updataVideos);
//DELETE VIDEO
routervideo.delete("/videos/:id", delVideos);

export default routervideo;
