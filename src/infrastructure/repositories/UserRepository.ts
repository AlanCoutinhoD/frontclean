import { IUserRepository } from '../../domain/repositories/IUserRepository';
import { User } from '../../domain/entities/User';
import { api } from '../api/axios-config';

export class UserRepository implements IUserRepository {
    async getUsers(): Promise<User[]> {
        const response = await api.get('/users');
        return response.data;
    }

    async getUserById(id: number): Promise<User> {
        const response = await api.get(`/users/${id}`);
        return response.data;
    }
} 