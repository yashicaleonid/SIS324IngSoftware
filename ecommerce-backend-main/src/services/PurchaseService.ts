import { PurchaseRepository } from '../repositories/PurchaseRepository';
import { BookRepository } from '../repositories/BookRepository';
import { Purchase } from '../models/PurchaseModel';

export class PurchaseService {
    private purchaseRepository: PurchaseRepository;
    private bookRepository: BookRepository;

    constructor() {
        this.purchaseRepository = new PurchaseRepository();
        this.bookRepository = new BookRepository();
    }

    async createPurchase(purchase: Purchase): Promise<Purchase> {
        const book = await this.bookRepository.findById(purchase.bookId);
        if (!book) {
            throw new Error('Libro no encontrado');
        }
        if (book.stock < purchase.quantity) {
            throw new Error('Stock insuficiente');
        }

        await this.bookRepository.updateStock(purchase.bookId, purchase.quantity);
        return this.purchaseRepository.create(purchase);
    }

    async getUserPurchases(userId: number): Promise<Purchase[]> {
        return this.purchaseRepository.findByUserId(userId);
    }
}