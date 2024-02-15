import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const About = ({ display }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:8081/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        // Check if login was successful and if the user is an admin
        if (email === 'Adminlogin@123' && password === 'admin') {
          // Redirect to admin page
          window.location.href = '/Admin';
        } else {
                    // Redirect to home page for regular users
          window.location.href = '/home';
        }
      } else {
        //Show error message
        setPopupMessage('Email or password mismatch');
        setShowPopup(true);
        //window.location.href = '/Admin';
      }
    } catch (error) {
      console.error('Error:', error);
      // Show error message
      setPopupMessage('Error occurred. Please try again later.');
      setShowPopup(true);
    }
  };

  return (
    <div>
      <div>
        <main className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
          <section className="flex w-[30rem] flex-col space-y-10">
            <div className="text-center text-4xl font-medium">Log In</div>

            <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
              <input
                type="text"
                placeholder="Email or Username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
              />
            </div>

            <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
              />
            </div>

            <button
              className="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400"
              onClick={handleSubmit}
            >
              LOG IN
            </button>

            <a href="#" className="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300">
              FORGOT PASSWORD?
            </a>

            <p className="text-center text-lg">
              No account?
              <Link to="/Signup" className="font-medium text-indigo-500 underline-offset-4 hover:underline">
                Create One
              </Link>
            </p>
          </section>
        </main>
        {showPopup && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="bg-white rounded-lg p-6">
              <p className="text-lg font-semibold">{popupMessage}</p>
              <button className="mt-4 py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md" onClick={() => setShowPopup(false)}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
