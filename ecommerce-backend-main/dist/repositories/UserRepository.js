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
exports.UserRepository = void 0;
const database_1 = require("../config/database");
const bcrypt_1 = __importDefault(require("bcrypt"));
class UserRepository {
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const hashedPassword = yield bcrypt_1.default.hash(user.password, 10);
            const result = yield database_1.Database.query('INSERT INTO users (name, username, email, password) VALUES ($1, $2, $3, $4) RETURNING *', [user.name, user.username, user.email, hashedPassword]);
            return result.rows[0];
        });
    }
    findByUsername(username) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.Database.query('SELECT * FROM users WHERE username = $1', [username]);
            return result.rows[0] || null;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.Database.query('SELECT * FROM users WHERE id = $1', [id]);
            return result.rows[0] || null;
        });
    }
}
exports.UserRepository = UserRepository;
