import { User } from '@/models/user';
import React, { useEffect, useState } from 'react';

export const FetchUserData: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const response = await new Promise<Response>((resolve) => {
        setTimeout(() => {
          resolve(fetch('https://jsonplaceholder.typicode.com/users'));
        }, 1000);
      });

      const data = (await response.json()) as User[];

      setUsers(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Daftar Pengguna</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
