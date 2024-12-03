import { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Home</h1>
      <hr />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
        }}
      >
        <b style={{ fontSize: '50px' }}>Learn React</b>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          voluptates natus cum possimus consequatur. Facilis laudantium possimus
          tempora. Deleniti quas illo nemo, voluptatum libero a. Eaque
          voluptatibus numquam harum eligendi.
        </span>
        <Link
          data-testid="user-link"
          to={'/users'}
          style={{
            backgroundColor: '#3498db',
            color: 'white',
            paddingTop: '10px',
            paddingBottom: '10px',
            maxWidth: ' 100px',
            border: 0,
            borderRadius: '3px',
            textDecoration: 'none',
            textAlign: 'center',
          }}
        >
          User List
        </Link>
      </div>
      <hr />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
        }}
      >
        <b style={{ fontSize: '50px' }}>Counter</b>
        <div
          style={{
            maxWidth: '150px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h3 data-testid="counter">{counter}</h3>
          <div
            style={{
              display: 'flex',
              gap: '10px',
            }}
          >
            <button data-testid="minus" onClick={() => setCounter(counter - 1)}>
              -
            </button>
            <button data-testid="plus" onClick={() => setCounter(counter + 1)}>
              +
            </button>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Home;
