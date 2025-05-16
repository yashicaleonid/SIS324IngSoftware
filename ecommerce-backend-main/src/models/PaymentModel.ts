export interface Payment {
    id?: number;
    purchaseId: number;
    cardholderName: string;
    email: string;
    address: string;
    city: string;
    state: string;
    postalCode: string;
    paymentMethod: string;
    amount: number;
    paymentDate?: Date;
}