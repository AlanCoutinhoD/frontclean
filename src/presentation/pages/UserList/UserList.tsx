import { useEffect, useState } from 'react';
import { User } from '../../../domain/entities/User';
import { UserRepository } from '../../../infrastructure/repositories/UserRepository';
import { MainLayout } from '../../components/layouts/MainLayout';
import { Button } from '../../components/common/Button/Button';

export const UserList: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const userRepository = new UserRepository();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const data = await userRepository.getUsers();
                setUsers(data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <MainLayout>
            <div className="user-list">
                <h1>Lista de Usuarios</h1>
                <div className="user-grid">
                    {users.map(user => (
                        <div key={user.id} className="user-card">
                            <h3>{user.name}</h3>
                            <p>{user.email}</p>
                            <Button onClick={() => console.log('Ver detalles')}>
                                Ver detalles
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </MainLayout>
    );
}; 