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
exports.PurchaseService = void 0;
const PurchaseRepository_1 = require("../repositories/PurchaseRepository");
const BookRepository_1 = require("../repositories/BookRepository");
class PurchaseService {
    constructor() {
        this.purchaseRepository = new PurchaseRepository_1.PurchaseRepository();
        this.bookRepository = new BookRepository_1.BookRepository();
    }
    createPurchase(purchase) {
        return __awaiter(this, void 0, void 0, function* () {
            const book = yield this.bookRepository.findById(purchase.bookId);
            if (!book) {
                throw new Error('Libro no encontrado');
            }
            if (book.stock < purchase.quantity) {
                throw new Error('Stock insuficiente');
            }
            yield this.bookRepository.updateStock(purchase.bookId, purchase.quantity);
            return this.purchaseRepository.create(purchase);
        });
    }
    getUserPurchases(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.purchaseRepository.findByUserId(userId);
        });
    }
}
exports.PurchaseService = PurchaseService;
