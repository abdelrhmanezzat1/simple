"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const videoSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    des: { type: String, required: true },
    url: { type: String, required: true, unique: true },
}, { timestamps: true });
const Video = (0, mongoose_1.model)("videos", videoSchema);
exports.default = Video;
