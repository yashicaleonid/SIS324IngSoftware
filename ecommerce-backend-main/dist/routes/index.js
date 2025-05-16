"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
const BookController_1 = require("../controllers/BookController");
const PurchaseController_1 = require("../controllers/PurchaseController");
const PaymentController_1 = require("../controllers/PaymentController");
const router = (0, express_1.Router)();
const userController = new UserController_1.UserController();
const bookController = new BookController_1.BookController();
const purchaseController = new PurchaseController_1.PurchaseController();
const paymentController = new PaymentController_1.PaymentController();
// Rutas de usuarios
router.post('/user', userController.register.bind(userController));
router.post('/login', userController.login.bind(userController));
// Rutas de libros
router.get('/books', bookController.getAllBooks.bind(bookController));
router.get('/books/:id', bookController.getBookById.bind(bookController));
router.post('/books', bookController.createBook.bind(bookController));
// Rutas de compras
router.post('/compra', purchaseController.createPurchase.bind(purchaseController));
router.get('/compras/:userId', purchaseController.getUserPurchases.bind(purchaseController));
// Rutas de pagos
router.post('/payment', paymentController.processPayment.bind(paymentController));
exports.default = router;
