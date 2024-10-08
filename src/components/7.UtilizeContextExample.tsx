import { useUserContext } from '@/hooks/useUserContext';
import React, { useState } from 'react';

// type UserType = {
//   user: string;
//   setUser: React.Dispatch<React.SetStateAction<string>>;
// };

// export const GrandParent = () => {
//   const [user, setUser] = useState('John');

//   return (
//     <div>
//       <h2>GrandParent</h2>
//       <Parent {...{ user, setUser }} />
//     </div>
//   );
// };

// const Parent: React.FC<UserType> = ({ user, setUser }) => {
//   return (
//     <div>
//       <h2>Parent</h2>
//       <Child {...{ user, setUser }} />
//     </div>
//   );
// };

// const Child: React.FC<UserType> = ({ user, setUser }) => {
//   return (
//     <div>
//       <h2>Child</h2>
//       <GrandChild {...{ user, setUser }} />
//     </div>
//   );
// };

// const GrandChild: React.FC<UserType> = ({ user, setUser }) => {
//   return (
//     <div>
//       <h2>GrandChild</h2>
//       <h3>User: {user}</h3>
//       <input
//         type='text'
//         value={user}
//         onChange={(e) => setUser(e.target.value)}
//       />
//     </div>
//   );
// };

export const GrandParent = () => {
  return (
    <div>
      <h2>GrandParent</h2>
      <Parent />
    </div>
  );
};

const Parent: React.FC = () => {
  return (
    <div>
      <h2>Parent</h2>
      <Child />
    </div>
  );
};

const Child: React.FC = () => {
  return (
    <div>
      <h2>Child</h2>
      <GrandChild />
    </div>
  );
};

const GrandChild: React.FC = () => {
  const { user, setUser } = useUserContext();

  return (
    <div>
      <h2>GrandChild</h2>
      <h3>User: {user}</h3>
      <input
        type='text'
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
    </div>
  );
};
