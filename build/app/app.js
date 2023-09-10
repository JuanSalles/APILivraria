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
const express_1 = __importDefault(require("express"));
const dbConnect_1 = __importDefault(require("../config/dbConnect"));
const index_1 = __importDefault(require("../routes/index"));
function dbConection() {
    return __awaiter(this, void 0, void 0, function* () {
        const conexao = yield (0, dbConnect_1.default)();
        conexao.on("erro", (erro) => {
            console.error("Erro de conexão", erro);
        });
        conexao.once("open", () => {
            console.log("Conexão com o banco OK");
        });
    });
}
dbConection();
const app = (0, express_1.default)();
(0, index_1.default)(app);
exports.default = app;
