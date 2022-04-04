import React, { useState } from 'react';
// import prisma from 'lib/prisma';
import Box from '@mui/material/Box';
import useSWR from 'swr';

// export const getServerSideProps = async () => {
//   const users = await prisma.user.findMany({
//     select: {
//       id: true,
//       email: true,
//       firstName: true,
//       lastName: true,
//     },
//     orderBy: {
//       id: 'asc',
//     },
//   });
//   return {
//     props: { users },
//   };
// };

const getUsers = async () => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/users`);
  const data = await res.json();
  return data.users;
};

const Users = () => {
  const { data, mutate } = useSWR(
    `${process.env.NEXTAUTH_URL}/api/users`,
    getUsers,
  );
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log(process.env.NEXTAUTH_URL);

  const handleDeleteUser = async (id) => {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/users/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });

    const newData = await res.json();

    const filteredUsers = data.filter((u) => u.id !== newData.id);
    await mutate(filteredUsers, { revalidate: false });
    return filteredUsers;
  };

  const handleUpdateUser = async (id) => {
    const body = {
      firstName: 'Serhio12312312',
      lastName: 'SDF',
    };

    try {
      const res = await fetch(`${process.env.NEXTAUTH_URL}/api/users/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      let newData = await res.json();
      await mutate(
        data.map((user) =>
          user.id === newData.id ? { ...data, ...newData } : user,
        ),
        false,
      );
      return newData;
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreateUser = async (body) => {
    try {
      const resp = await fetch(`${process.env.NEXTAUTH_URL}/api/users/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      let newUser = await resp.json();
      return [newUser, ...data];
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="page">
        <h1>Public users</h1>
        <main>
          <Box display="flex">
            <Box>
              <button onClick={() => handleUpdateUser(47)}>
                update user id 38
              </button>
              <ul>
                {data ? (
                  data.map((user, i) => (
                    <div key={i}>
                      <li>
                        <p>
                          {user.id}, {user.firstName}, {user.email}
                        </p>
                        <button onClick={() => handleDeleteUser(user.id)}>
                          delete
                        </button>
                      </li>
                    </div>
                  ))
                ) : (
                  <div>loading...</div>
                )}
              </ul>
            </Box>
            <Box>
              <div>
                <h1>New User </h1>
                <input
                  autoFocus
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First Name"
                  type="text"
                  value={firstName}
                />
                <input
                  autoFocus
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last Name"
                  type="text"
                  value={lastName}
                />
                <input
                  autoFocus
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  type="text"
                  value={email}
                />
                <input
                  autoFocus
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  type="password"
                  value={password}
                />
                <button
                  onClick={async () => {
                    // setText('');

                    const body = {
                      firstName,
                      lastName,
                      email,
                      password,
                      role: 'CUSTOMER',
                    };

                    try {
                      await mutate(handleCreateUser(body), {
                        optimisticData: [body, ...data],
                        rollbackOnError: true,
                        populateCache: true,
                        revalidate: false,
                      });
                      console.log('Successfully added the new user.');
                    } catch (e) {
                      console.log('Failed to add the new user.');
                    }
                  }}
                >
                  create
                </button>

                <a className="back" href="#">
                  or Cancel
                </a>
              </div>
            </Box>
          </Box>
        </main>
      </div>
      <style jsx>{`
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }
      `}</style>
    </>
  );
};

export default Users;
