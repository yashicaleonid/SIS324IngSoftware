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
exports.PurchaseController = void 0;
const PurchaseService_1 = require("../services/PurchaseService");
class PurchaseController {
    constructor() {
        this.purchaseService = new PurchaseService_1.PurchaseService();
    }
    createPurchase(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const purchase = yield this.purchaseService.createPurchase(req.body);
                res.status(201).json(purchase);
            }
            catch (error) {
                res.status(400).json({ message: error.message });
            }
        });
    }
    getUserPurchases(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const purchases = yield this.purchaseService.getUserPurchases(Number(req.params.userId));
                res.json(purchases);
            }
            catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    }
}
exports.PurchaseController = PurchaseController;
