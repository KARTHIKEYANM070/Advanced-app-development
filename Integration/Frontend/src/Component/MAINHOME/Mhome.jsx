import React from 'react';

const Mhome = () => {
  return (
    <div className="h-screen">
      <div className="w-full h-full flex bg-white">
        <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">Build Your New <span className="text-indigo-600">Career</span></h2>
			<div className="motivational-text-container p-8 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
        Are you ready to embark on a journey towards a fulfilling career?
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Imagine waking up every morning excited to tackle new challenges, eager to make a meaningful impact, and enthusiastic about the possibilities that lie ahead. That's the power of finding the right job – it's not just about earning a paycheck, but about finding purpose and fulfillment in what you do.
      </p>
    </div>
            <div className="flex justify-center lg:justify-start mt-6">
              <a className="px-4 py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800" href="/login">User</a>
              <a className="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400" href="/login">Admin</a>
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/2" style={{ clipPath: 'polygon(10% 0, 100% 0%, 100% 100%, 0 100%)' }}>
          <div className="h-full object-cover" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80)' }}>
            <div className="h-full bg-black opacity-25"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mhome;
