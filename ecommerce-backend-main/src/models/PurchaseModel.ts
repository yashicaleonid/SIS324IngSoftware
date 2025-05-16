export interface Purchase {
    id?: number;
    userId: number;
    bookId: number;
    quantity: number;
    totalAmount: number;
    purchaseDate?: Date;
    title?: string; // Para la unión con la tabla de libros
}