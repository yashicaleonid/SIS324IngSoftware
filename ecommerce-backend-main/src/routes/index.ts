import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { BookController } from '../controllers/BookController';
import { PurchaseController } from '../controllers/PurchaseController';
import { PaymentController } from '../controllers/PaymentController';

const router = Router();
const userController = new UserController();
const bookController = new BookController();
const purchaseController = new PurchaseController();
const paymentController = new PaymentController();

// Rutas de usuarios
router.post('/users/register', userController.register.bind(userController));
router.post('/users/login', userController.login.bind(userController));

// Rutas de libros
router.get('/books', bookController.getAllBooks.bind(bookController));
router.get('/books/:id', bookController.getBookById.bind(bookController));
router.post('/books', bookController.createBook.bind(bookController));

// Rutas de compras
router.post('/purchases', purchaseController.createPurchase.bind(purchaseController));
router.get('/purchases/:userId', purchaseController.getUserPurchases.bind(purchaseController));

// Rutas de pagos
router.post('/payments', paymentController.processPayment.bind(paymentController));

export default router;