import React, { useState } from 'react';
import axios from 'axios';

const Signu = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8081/api/v1/auth/register', formData);
      setSuccessMessage('User signed up successfully');
      setTimeout(() => {
        setSuccessMessage('');
        // Redirect to login page
        window.location.href = '/login';
      }, 3000); // Redirect after 3 seconds
    } catch (error) {
      setErrorMessage('Error signing up user: ' + error.response.data);
    }
  };

  return (
    <div>
      <main className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
        <section className="flex w-[30rem] flex-col space-y-10">
          <div className="text-center text-4xl font-medium">SignUp</div>
          {successMessage && (
            <div className="bg-green-200 text-green-800 p-3 rounded-md">{successMessage}</div>
          )}
          {errorMessage && (
            <div className="bg-red-200 text-red-800 p-3 rounded-md">{errorMessage}</div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border-none bg-transparent outline-none placeholder-italic focus:outline-none"
              />
            </div>
            <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-none bg-transparent outline-none placeholder-italic focus:outline-none"
              />
            </div>
            <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
              <input
                type="password"
                placeholder="Enter a Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border-none bg-transparent outline-none placeholder-italic focus:outline-none"
              />
            </div>
            <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full border-none bg-transparent outline-none placeholder-italic focus:outline-none"
              />
            </div>
            <button
              className="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400"
              type="submit"
            >
              Create Account
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Signu;
