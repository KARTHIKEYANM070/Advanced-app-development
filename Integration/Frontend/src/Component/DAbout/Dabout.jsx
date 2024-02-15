import React from 'react';
import { Navbar } from '../../Navbarmain';
import { FaEnvelope, FaPhone, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';

const Dabout = () => {
  return (
    <div>
      <Navbar />
      <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css" />
      <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css" />

      <section className="relative pt-12 bg-blueGray-50">
        <div className="container mx-auto py-8 px-4">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">About Our Job Portal</h1>
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div className="md:w-1/2">
              <p className="text-lg text-gray-700 mb-4">
                Welcome to our job portal, where opportunities meet talent. Our platform is dedicated to connecting job seekers with employers, making the hiring process seamless and efficient.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                At EasyJobs, we believe that finding the right job or candidate shouldn't be a hassle. That's why we've built a user-friendly platform equipped with powerful search tools, advanced filtering options, and personalized recommendations to match employers with qualified candidates and vice versa.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Our mission is to empower individuals to build successful careers and help businesses thrive by finding the best talent. Whether you're a recent graduate looking for your first job, a seasoned professional seeking new opportunities, or a company in need of skilled employees, we're here to support you every step of the way.
              </p>
            </div>
            <div className="md:w-1/2">
            <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 " alt="About Us" className="rounded-lg shadow-lg" />
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Team</h2>
            <p className="text-lg text-gray-700 mb-6">
              Meet the passionate individuals behind EasyJobs who are committed to making a positive impact in the job market.
            </p>
            <div className="flex flex-wrap justify-center">
              {/* Team member cards */}
              <div className="max-w-xs rounded-lg shadow-lg bg-white mx-4 mb-6">
                {/* Placeholder for team member image */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">John Doe</h3>
                  <p className="text-sm text-gray-600">CEO & Co-Founder</p>
                  <div className="flex items-center mt-2">
                    <FaEnvelope className="mr-2" />
                    <span>Email: john@example.com</span>
                  </div>
                  <div className="flex items-center mt-1">
                    <FaPhone className="mr-2" />
                    <span>Phone: +1234567890</span>
                  </div>
                  <div className="flex items-center mt-1">
                    <FaGithub className="mr-2" />
                    <FaInstagram className="mr-2" />
                    <FaFacebook className="mr-2" />
                  </div>
                </div>
              </div>
              {/* Repeat for other team members */}
            </div>
          </div>
        </div>
        <footer className="relative pt-8 pb-6 mt-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center md:justify-between justify-center">
              <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                {/* Footer content */}
              </div>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default Dabout;
