"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const video_conrol_1 = require("./video.conrol");
const express_1 = __importDefault(require("express"));
const routervideo = express_1.default.Router();
//POST VIDEO
routervideo.post("/videos", video_conrol_1.cereteVideos);
//GET VIDEOS
routervideo.get("/videos", video_conrol_1.getVideos);
//GET ONE VIDEO
routervideo.get("/videos/:id", video_conrol_1.getVideo);
// PUT VIDEO
routervideo.put("/videos/:id", video_conrol_1.updataVideos);
//DELETE VIDEO
routervideo.delete("/videos/:id", video_conrol_1.delVideos);
exports.default = routervideo;
