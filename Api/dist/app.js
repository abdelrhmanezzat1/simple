"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const video_routers_1 = __importDefault(require("./routers/video.routers"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// if(process.env.NODE_ENV === 'production'){
// }
app.use(express_1.default.static(path_1.default.join(__dirname, "../../client", "build")));
app.get('*', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "../../client", "build", "index.html"));
});
app.use((0, morgan_1.default)("dev"));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(video_routers_1.default);
exports.default = app;
