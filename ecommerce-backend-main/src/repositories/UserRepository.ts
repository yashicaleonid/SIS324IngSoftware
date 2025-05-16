import { Database } from '../config/database';
import { User } from '../models/UserModel';
import bcrypt from 'bcrypt';

export class UserRepository {
    async create(user: User): Promise<User> {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        const result = await Database.query(
            'INSERT INTO users (name, username, email, password) VALUES ($1, $2, $3, $4) RETURNING *',
            [user.name, user.username, user.email, hashedPassword]
        );
        return result.rows[0];
    }

    async findByUsername(username: string): Promise<User | null> {
        const result = await Database.query(
            'SELECT * FROM users WHERE username = $1',
            [username]
        );
        return result.rows[0] || null;
    }

    async findById(id: number): Promise<User | null> {
        const result = await Database.query(
            'SELECT * FROM users WHERE id = $1',
            [id]
        );
        return result.rows[0] || null;
    }
}