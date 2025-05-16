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
exports.PaymentController = void 0;
const PaymentService_1 = require("../services/PaymentService");
class PaymentController {
    constructor() {
        this.paymentService = new PaymentService_1.PaymentService();
    }
    processPayment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const success = yield this.paymentService.processPayment(req.body);
                if (success) {
                    res.json({ message: 'Pago procesado exitosamente' });
                }
                else {
                    throw new Error('Error al procesar el pago');
                }
            }
            catch (error) {
                res.status(400).json({ message: error.message });
            }
        });
    }
}
exports.PaymentController = PaymentController;
