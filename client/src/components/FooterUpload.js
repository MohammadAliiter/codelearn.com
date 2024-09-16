import React, { useState } from 'react';
import axios from 'axios';

const FooterUpload = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [code, setCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/footer', { title, description, code })
      .then(response => {
        alert('Footer uploaded successfully');
        setTitle('');
        setDescription('');
        setCode('');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gradient-to-r from-green-400 to-blue-500 p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-white mb-4">Upload Footer</h1>
      <input 
        type="text" 
        placeholder="Title" 
        value={title}
        onChange={(e) => setTitle(e.target.value)} 
        className="block w-full mb-4 p-3 rounded-lg border border-gray-300"
      />
      <textarea 
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="block w-full mb-4 p-3 rounded-lg border border-gray-300"
      ></textarea>
      <textarea 
        placeholder="HTML Code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="block w-full mb-4 p-3 rounded-lg border border-gray-300"
      ></textarea>
      <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
        Upload Footer
      </button>
    </form>
  );
};

export default FooterUpload;
