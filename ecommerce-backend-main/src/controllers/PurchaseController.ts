import { Request, Response } from 'express';
import { PurchaseService } from '../services/PurchaseService';

export class PurchaseController {
    private purchaseService: PurchaseService;

    constructor() {
        this.purchaseService = new PurchaseService();
    }

    async createPurchase(req: Request, res: Response) {
        try {
            const purchase = await this.purchaseService.createPurchase(req.body);
            res.status(201).json(purchase);
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    }

    async getUserPurchases(req: Request, res: Response) {
        try {
            const purchases = await this.purchaseService.getUserPurchases(Number(req.params.userId));
            res.json(purchases);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }
}