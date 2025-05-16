import { Request, Response } from 'express';
import { PaymentService } from '../services/PaymentService';

export class PaymentController {
    private paymentService: PaymentService;

    constructor() {
        this.paymentService = new PaymentService();
    }

    async processPayment(req: Request, res: Response) {
        try {
            const success = await this.paymentService.processPayment(req.body);
            if (success) {
                res.json({ message: 'Pago procesado exitosamente' });
            } else {
                throw new Error('Error al procesar el pago');
            }
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    }
}