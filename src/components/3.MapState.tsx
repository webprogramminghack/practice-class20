import React, { useState } from 'react';
import { Button } from './Button';

export const MapState: React.FC = () => {
  const [userMap, setUserMap] = useState<Map<string, string>>(new Map());

  const handleAddOrUpdateUser = (username: string, email: string) => {
    const newMap = new Map(userMap);
    newMap.set(username, email);
    setUserMap(newMap);
  };

  const handleDeleteUser = (username: string) => {
    const newMap = new Map(userMap);
    newMap.delete(username);
    setUserMap(newMap);
  };

  return (
    <div>
      <Button onClick={() => handleAddOrUpdateUser('John', 'john@example.com')}>
        Tambahkan atau Update John
      </Button>{' '}
      <Button onClick={() => handleDeleteUser('John')}>Hapus John</Button>
      <h2>Daftar Pengguna</h2>
      <ul>
        {[...userMap.entries()].map(([username, email]) => (
          <li key={username}>
            {username} - {email}
          </li>
        ))}
      </ul>
    </div>
  );
};
