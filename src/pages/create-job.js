import React, { useState } from 'react';
import { useRouter } from 'next/router';

const CreateJob = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const [service, setService] = useState('Moving');

  const submitData = async (e) => {
    e.preventDefault();
    try {
      // const salt = bcrypt.genSaltSync(10);
      // const hash = bcrypt.hashSync(password, salt);
      const body = {
        firstName,
        lastName,
        email,
        password,
      };
      let res = await fetch('http://localhost:3000/api/users/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      let user = await res.json();
      let userId = user.id;

      const jobBody = {
        service,
        userId,
      };

      await fetch('http://localhost:3000/api/jobs/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(jobBody),
      });

      //   console.log(user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div>
        <form onSubmit={submitData}>
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
          <input
            autoFocus
            onChange={(e) => setService(e.target.value)}
            placeholder="Service"
            type="text"
            value={service}
          />
          <input disabled={!email || !password} type="submit" value="Create" />
          <a className="back" href="#" onClick={() => router.push('/')}>
            or Cancel
          </a>
        </form>
      </div>
      <style jsx>
        {`
          .page {
            background: white;
            padding: 3rem;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          input[type='text'],
          password {
            width: 100%;
            padding: 0.5rem;
            margin: 0.5rem 0;
            border-radius: 0.25rem;
            border: 0.125rem solid rgba(0, 0, 0, 0.2);
          }

          input[type='submit'] {
            background: #ececec;
            border: 0;
            padding: 1rem 2rem;
          }

          .back {
            margin-left: 1rem;
          }
        `}
      </style>
    </>
  );
};

export default CreateJob;
