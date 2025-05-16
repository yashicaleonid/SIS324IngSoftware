import { Payment } from '../models/PaymentModel';

export class PaymentService {
    async processPayment(payment: Payment): Promise<boolean> {
        // Aquí iría la lógica de procesamiento de pago
        // Por ahora solo simulamos que el pago fue exitoso
        return true;
    }
}