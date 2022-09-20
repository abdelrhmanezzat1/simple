"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.delVideos = exports.updataVideos = exports.getVideo = exports.getVideos = exports.cereteVideos = void 0;
const Videos_1 = __importDefault(require("../modules/Videos"));
const cereteVideos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const exitsvideo = yield Videos_1.default.findOne({ url: req.body.url });
        if (exitsvideo) {
            return res.status(401).json({ message: "this Url is Already exits" });
        }
        const video = new Videos_1.default(req.body);
        const SavedVideo = yield video.save();
        res.status(200).json(SavedVideo);
    }
    catch (error) {
        res.status(301).json(error);
    }
});
exports.cereteVideos = cereteVideos;
const getVideos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getVideo = yield Videos_1.default.find();
        res.status(200).json(getVideo);
    }
    catch (error) {
        res.status(400).json(error);
    }
});
exports.getVideos = getVideos;
const getVideo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const findVideo = yield Videos_1.default.findById(req.params.id);
        res.status(200).json(findVideo);
    }
    catch (error) {
        res.status(401).json(error);
    }
});
exports.getVideo = getVideo;
const updataVideos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updataVideo = yield Videos_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updataVideo);
    }
    catch (error) {
        res.status(401).json(error);
    }
});
exports.updataVideos = updataVideos;
const delVideos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const delvideo = yield Videos_1.default.findByIdAndDelete(req.params.id);
    if (!exports.delVideos)
        return res.status(204).json();
    return res.status(200).json(exports.delVideos);
});
exports.delVideos = delVideos;
