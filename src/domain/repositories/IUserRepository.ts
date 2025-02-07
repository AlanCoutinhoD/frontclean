import { User } from '../entities/User';

export interface IUserRepository {
    getUsers(): Promise<User[]>;
    getUserById(id: number): Promise<User>;
} 