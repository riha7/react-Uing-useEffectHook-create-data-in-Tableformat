import React, { useState, useEffect } from 'react';
import './style.css';
import axios from 'axios';
export default function App() {
  const [count, setcount] = useState([]);
  //useEffect contain 2 parameters
  //1st parameter function
  //2nd parameter dependencies
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        let data = response.data;
        setcount(data);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div>
      <h1>Testing UseEffect Hook calling </h1>
      <div>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>address</th>
            </tr>
          </thead>
          <tbody>
            {count.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td style={{ backgroundColor: 'orange', color: 'white' }}>
                    {item.name}
                  </td>
                  <td style={{ paddingLeft: '50px' }}>{item.address.street}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
