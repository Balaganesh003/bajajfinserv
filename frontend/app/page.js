'use client';
import React, { useState } from 'react';
import Select from 'react-select';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const filterOptions = [
  { value: 'Alphabets', label: 'Alphabets' },
  { value: 'Numbers', label: 'Numbers' },
  { value: 'Highest alphabet', label: 'Highest alphabet' },
];

function App() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Validate JSON format
      const parsedInput = JSON.parse(input);

      if (!parsedInput.data || !Array.isArray(parsedInput.data)) {
        throw new Error('Invalid input format. Expected {"data": [...]}');
      }

      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/bfhl`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(parsedInput),
      });

      if (!res.ok) {
        throw new Error('Server responded with an error');
      }

      const data = await res.json();
      setResponse(data);
      toast.success('Data processed successfully!');
    } catch (err) {
      toast.error(err.message);
    }
  };

  const renderFilteredResponse = () => {
    if (!response) return null;

    return (
      <div className="mt-4 p-4 bg-gray-100 rounded-lg">
        <h3 className="font-bold mb-5 text-xl">Filtered Response:</h3>
        {selectedFilters.includes('Alphabets') && (
          <p>Alphabets: {response.alphabets.join(', ')}</p>
        )}
        {selectedFilters.includes('Numbers') && (
          <p>Numbers: {response.numbers.join(', ')}</p>
        )}
        {selectedFilters.includes('Highest alphabet') && (
          <p>Highest Alphabet: {response.highest_alphabet[0]}</p>
        ) }
        { selectedFilters.length === 0 && (
          <p className='text-center font-semibold'>No filters selected</p>
        )}
      </div>
    );
  };

  return (
    <div className="container mx-auto max-w-2xl p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Bajaj Finserv Challenge</h1>
      <form onSubmit={handleSubmit} className="mb-6">
        <textarea
          className="w-full p-2 border border-gray-400 rounded mb-4 shadow-sm outline-blue-500"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Enter JSON input (e.g., { "data": ["A","C","z"] })'
          rows={5}
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
      </form>
      <div className="mb-4">
        <h3 className="font-bold mb-2">Select filters:</h3>
        <Select
          isMulti
          options={filterOptions}
          onChange={(selected) => setSelectedFilters(selected.map(option => option.value))}
          className="basic-multi-select"
          classNamePrefix="select"
        />
      </div>
      {renderFilteredResponse()}
      <ToastContainer />
    </div>
  );
}

export default App;
