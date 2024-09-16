import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Sidebar = ({ onSelectFooter }) => {
  const [footers, setFooters] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/footers')
      .then(response => {
        setFooters(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="sidebar bg-gradient-to-r from-blue-500 to-purple-500 p-4 w-1/4 h-screen text-white">
      <h2 className="text-lg font-semibold mb-4">Footers</h2>
      <ul>
        {footers.map(footer => (
          <li 
            key={footer._id} 
            onClick={() => onSelectFooter(footer)} 
            className="cursor-pointer hover:bg-blue-700 p-2 rounded mb-2"
          >
            <Link to="/preview">{footer.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
