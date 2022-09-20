"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
require("./db/db");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const Port = 5000 || process.env.PORT;
app_1.default.listen(Port, () => {
    console.log(`server is running at port ${Port}..!`);
});
