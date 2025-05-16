import { Request, Response } from 'express';
import { BookService } from '../services/BookService';

export class BookController {
    private bookService: BookService;

    constructor() {
        this.bookService = new BookService();
    }

    async createBook(req: Request, res: Response) {
        try {
            const book = await this.bookService.createBook(req.body);
            res.status(201).json(book);
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    }

    async getAllBooks(req: Request, res: Response) {
        try {
            const books = await this.bookService.getAllBooks();
            res.json(books);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

    async getBookById(req: Request, res: Response) {
        try {
            const book = await this.bookService.getBookById(Number(req.params.id));
            res.json(book);
        } catch (error: any) {
            res.status(404).json({ message: error.message });
        }
    }
}