import { UserRepository } from '../repositories/UserRepository';
import { User } from '../models/UserModel';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export class UserService {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    async register(user: User): Promise<User> {
        const existingUser = await this.userRepository.findByUsername(user.username);
        if (existingUser) {
            throw new Error('El usuario ya existe');
        }
        return this.userRepository.create(user);
    }

    async login(username: string, password: string): Promise<string> {
        const user = await this.userRepository.findByUsername(username);
        if (!user) {
            throw new Error('Usuario no encontrado');
        }

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            throw new Error('Contraseña incorrecta');
        }

        return jwt.sign(
            { id: user.id, username: user.username },
            process.env.JWT_SECRET || 'secret',
            { expiresIn: '1d' }
        );
    }
}