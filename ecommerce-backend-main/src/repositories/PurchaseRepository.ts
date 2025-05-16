import { Database } from '../config/database';
interface Purchase {
    userId: number;
    bookId: number;
    quantity: number;
    totalAmount: number;
    purchaseDate?: Date;
}

export class PurchaseRepository {
    async create(purchase: Purchase): Promise<Purchase> {
        const result = await Database.query(
            'INSERT INTO purchases (user_id, book_id, quantity, total_amount, purchase_date) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [purchase.userId, purchase.bookId, purchase.quantity, purchase.totalAmount, new Date()]
        );
        return result.rows[0];
    }

    async findByUserId(userId: number): Promise<Purchase[]> {
        const result = await Database.query(
            'SELECT p.*, b.title FROM purchases p JOIN books b ON p.book_id = b.id WHERE p.user_id = $1',
            [userId]
        );
        return result.rows;
    }
}