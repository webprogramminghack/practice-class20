import { useFetch } from '@/hooks/useFetch';
import React from 'react';

type Post = {
  userId: string;
  id: number;
  title: string;
  body: string;
};

export const PostList: React.FC = () => {
  const { data, loading, error } = useFetch<Post[]>(
    'https://jsonplaceholder.typicode.com/posts'
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>With Custom Hook: Fetch Data</h1>
      {data && data.length > 0 && (
        <ul>
          {data.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
