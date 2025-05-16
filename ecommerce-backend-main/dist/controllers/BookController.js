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
exports.BookController = void 0;
const BookService_1 = require("../services/BookService");
class BookController {
    constructor() {
        this.bookService = new BookService_1.BookService();
    }
    createBook(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const book = yield this.bookService.createBook(req.body);
                res.status(201).json(book);
            }
            catch (error) {
                res.status(400).json({ message: error.message });
            }
        });
    }
    getAllBooks(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const books = yield this.bookService.getAllBooks();
                res.json(books);
            }
            catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    }
    getBookById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const book = yield this.bookService.getBookById(Number(req.params.id));
                res.json(book);
            }
            catch (error) {
                res.status(404).json({ message: error.message });
            }
        });
    }
}
exports.BookController = BookController;
