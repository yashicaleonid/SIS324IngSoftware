import { Database } from '../config/database';
import { Book } from '../models/BookModel';

export class BookRepository {
    async create(book: Book): Promise<Book> {
        const result = await Database.query(
            'INSERT INTO books (title, author, description, price, stock, imageUrl, category, isbn) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
            [book.title, book.author, book.description, book.price, book.stock, book.imageUrl, book.category, book.isbn]
        );
        return result.rows[0];
    }

    async findAll(): Promise<Book[]> {
        const result = await Database.query('SELECT * FROM books');
        return result.rows;
    }

    async findById(id: number): Promise<Book | null> {
        const result = await Database.query(
            'SELECT * FROM books WHERE id = $1',
            [id]
        );
        return result.rows[0] || null;
    }

    async updateStock(id: number, quantity: number): Promise<void> {
        await Database.query(
            'UPDATE books SET stock = stock - $1 WHERE id = $2',
            [quantity, id]
        );
    }
}