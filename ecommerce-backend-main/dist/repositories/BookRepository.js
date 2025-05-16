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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRepository = void 0;
// Make sure the path is correct and the file exists; adjust if necessary
const database_1 = require("../config/database");
class BookRepository {
    create(book) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.Database.query('INSERT INTO books (title, author, description, price, stock, imageUrl, category) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *', [book.title, book.author, book.description, book.price, book.stock, book.imageUrl, book.category]);
            return result.rows[0];
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.Database.query('SELECT * FROM books');
            return result.rows;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.Database.query('SELECT * FROM books WHERE id = $1', [id]);
            return result.rows[0] || null;
        });
    }
    updateStock(id, quantity) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.Database.query('UPDATE books SET stock = stock - $1 WHERE id = $2', [quantity, id]);
        });
    }
}
exports.BookRepository = BookRepository;
