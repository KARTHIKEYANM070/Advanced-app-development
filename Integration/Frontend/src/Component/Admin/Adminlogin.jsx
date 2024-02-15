import React from 'react'
import { NavLink } from 'react-router-dom';

const Adminlogin = () => {
  return (
    <div>
<main
  class="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
  <section class="flex w-[30rem] flex-col space-y-10">
    <div class="text-center text-4xl font-medium">Please Login Your Admin Account</div>

    <div
      class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
      <input
        type="text"
        placeholder="Email or Username"
        class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"/>
    </div>

    <div
      class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"  >
      <input
        type="password"
        placeholder="Password"
        class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none" />
    </div>

    <button
      class="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400">
       <NavLink to={'/Admin'}> LOG IN </NavLink>
    </button>
  </section>
</main>
    </div>
  )
}

export default Adminlogin;