"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.autorSchema = exports.autor = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const autorSchema = new mongoose_1.default.Schema({
    id: { type: mongoose_1.default.Schema.Types.ObjectId },
    nome: { type: String, required: true },
    nacionalidade: { type: String }
}, { versionKey: false });
exports.autorSchema = autorSchema;
const autor = mongoose_1.default.model('autores', autorSchema);
exports.autor = autor;
