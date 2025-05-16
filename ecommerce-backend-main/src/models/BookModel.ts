export interface Book {
    id?: number;
    title: string;
    author: string;
    description: string;
    price: number;
    stock: number;
    imageUrl: string;
    category: string;
    isbn: string;  // Agregamos este campo
}