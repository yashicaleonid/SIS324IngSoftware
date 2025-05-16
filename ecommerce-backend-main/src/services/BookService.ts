import { BookRepository } from '../repositories/BookRepository';
import { Book } from '../models/BookModel';

export class BookService {
    private bookRepository: BookRepository;

    constructor() {
        this.bookRepository = new BookRepository();
    }

    async createBook(book: Book): Promise<Book> {
        return this.bookRepository.create(book);
    }

    async getAllBooks(): Promise<Book[]> {
        return this.bookRepository.findAll();
    }

    async getBookById(id: number): Promise<Book> {
        const book = await this.bookRepository.findById(id);
        if (!book) {
            throw new Error('Libro no encontrado');
        }
        return book;
    }
}