import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <hr />
      <div
        style={{
          padding: '10px',
          display: 'flex',
          gap: '10px',
          flexDirection: 'column',
        }}
      >
        <Link
          data-testid="back-link"
          to={'/'}
          style={{
            backgroundColor: '#2E865F',
            color: 'white',
            paddingTop: '5px',
            paddingBottom: '5px',
            textDecoration: 'none',
            maxWidth: '100px',
            textAlign: 'center',
          }}
        >
          Back
        </Link>
        <table
          style={{
            borderSpacing: 0,
            textAlign: 'left',
            borderCollapse: 'collapse',
            width: '100%',
          }}
        >
          <thead>
            <tr
              style={{
                backgroundColor: '#1a1a1a',
                color: 'white',
                fontSize: '16px',
                fontWeight: 'normal',
              }}
            >
              <th style={{ padding: '8px 16px' }}>ID</th>
              <th style={{ padding: '8px 16px' }}>Name</th>
              <th style={{ padding: '8px 16px' }}>Username</th>
              <th style={{ padding: '8px 16px' }}>Email</th>
            </tr>
          </thead>
          <tbody data-testid="user-list">
            {users.map((user) => {
              return (
                <tr
                  key={user.id}
                  style={{
                    backgroundColor: user.id % 2 === 0 ? '#ffffff' : '#f2f2f2',
                  }}
                >
                  <td style={{ padding: '8px 16px' }}>{user.id}</td>
                  <td style={{ padding: '8px 16px' }}>{user.name}</td>
                  <td style={{ padding: '8px 16px' }}>{user.username}</td>
                  <td style={{ padding: '8px 16px' }}>{user.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <hr />
    </div>
  );
};

export default Users;
