import React from 'react'
import HeroPic from "../Nav/bussearch.jpg";
import Footer from './footer';
import { NavLink } from 'react-router-dom';
import { Navbar } from '../../Navbarmain';
const About = () => {
  return (
    <div>
    <Navbar/>
     <section className='flex justify-around items-center p-10 space-x-10lg:flex-row ssm:flex-col ssm:space-y-10 text-white'>
     <div className='lg:w-1/3 ssm:w-fit'>
     <p className='text-4xl mb-5 text-slate-300'> Find the perfect</p>
     <p className='text-4xl mb-5 text-slate-300'>   <span style={{ fontWeight: 'bold', color:'skyblue' }}>Job</span> for you</p>
     <hr/>
     <p className='mt-10 text-xl text-slate-300 font-sans'>
     Search your career opportunity through 12,000 jobs
     </p>
     <br/>
     
     <button className='w-64 bg-blue-500 text-white font-bold py-3 rounded-md'><NavLink to={'/search'}>Search</NavLink></button>
     </div>
     
     <div className='w-1/4 items-center ssm:w-fit '>
      <img src={HeroPic} alt="" width={100} height={100} className='rounded-full w-full border-8 border-white'/>
     </div>
     </section>
     <Footer/>
    </div>
  )
}

export default About