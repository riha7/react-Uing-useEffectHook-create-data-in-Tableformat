import React, { useState, useEffect } from 'react';
import './style.css';
import axios from 'axios';
export default function App() {
  const [increment, setincrement] = useState(0);
  const [count, setcount] = useState([]);
  //useEffect contain 2 parameters
  //1st parameter function
  //2nd parameter dependencies
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos').then(response => {
      let data = response.data;
      setcount(data);
    });
  }, [increment]);
  console.log(increment);
  return (
    <div>
      <h1>Testing UseEffect Hook calling </h1>
      <div>
        {/* conditional rendering */}
        {increment > 2 ? (
          <table>
            <thead>
              <tr>
                <th>userId</th>
                <th>id</th>
                <th>title</th>
              </tr>
            </thead>
            <tbody>
              {count.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.userId}</td>
                    <td style={{ backgroundColor: 'orange', color: 'white' }}>
                      {item.id}
                    </td>
                    <td style={{ paddingLeft: '50px' }}>{item.title}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <p>data not getting press button again</p>
        )}
      </div>
      <button
        onClick={() => {
          setincrement(increment + 1), console.log('updaed');
        }}
      >
        {increment}:times
      </button>
    </div>
  );
}
