// SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchParams, setSearchParams] = useState({
    role: '',
    type: '',
    location: '',
    experience: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSearch = () => {
    onSearch(searchParams);
  };

  return (
    <div className='flex gap-4 my-10 justify-center px-10'>
      <input type="text" name="role" value={searchParams.role} onChange={handleInputChange} placeholder="Job Role" className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md' />
      <input type="text" name="type" value={searchParams.type} onChange={handleInputChange} placeholder="Job Type" className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md' />
      <input type="text" name="location" value={searchParams.location} onChange={handleInputChange} placeholder="Location" className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md' />
      <input type="text" name="experience" value={searchParams.experience} onChange={handleInputChange} placeholder="Experience" className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md' />
      <button onClick={handleSearch} className='w-64 bg-blue-500 text-white font-bold py-3 rounded-md'>Search</button>
    </div>
  );
};

export default SearchBar;
