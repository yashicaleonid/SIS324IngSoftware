import { Request, Response } from 'express';
import { UserService } from '../services/UserService';

export class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    async register(req: Request, res: Response) {
        try {
            const user = await this.userService.register(req.body);
            res.status(201).json(user);
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    }

    async login(req: Request, res: Response) {
        try {
            const { username, password } = req.body;
            const token = await this.userService.login(username, password);
            res.json({ token });
        } catch (error: any) {
            res.status(401).json({ message: error.message });
        }
    }
}