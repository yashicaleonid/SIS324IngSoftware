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
exports.BookService = void 0;
const BookRepository_1 = require("../repositories/BookRepository");
class BookService {
    constructor() {
        this.bookRepository = new BookRepository_1.BookRepository();
    }
    createBook(book) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.bookRepository.create(book);
        });
    }
    getAllBooks() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.bookRepository.findAll();
        });
    }
    getBookById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const book = yield this.bookRepository.findById(id);
            if (!book) {
                throw new Error('Libro no encontrado');
            }
            return book;
        });
    }
}
exports.BookService = BookService;
