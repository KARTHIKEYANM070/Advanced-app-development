import React, { useState, useEffect } from 'react';

const Create = () => {
  // State to manage job data
  const [jobData, setJobData] = useState({
    title: '',
    type: '',
    subject: '',
    experience: '',
    location: '',
    company: '',
    job_Link: '' // Updated field name
  });

  // State to manage list of added jobs
  const [jobList, setJobList] = useState([]);
  
  // State to manage edit mode
  const [editIndex, setEditIndex] = useState(null);

  // Function to fetch jobs from backend
  const fetchJobs = async () => {
    try {
      const response = await fetch('http://localhost:8080/addJobDetails/get/job');
      if (response.ok) {
        const data = await response.json();
        setJobList(data);
      }
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  // Fetch jobs when the component mounts
  useEffect(() => {
    fetchJobs();
  }, []);

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let response;
      if (editIndex !== null) {
        // Update job if in edit mode
        response = await fetch(`http://localhost:8080/addJobDetails/update/job/${jobList[editIndex].id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(jobData),
        });
      } else {
        // Add new job if not in edit mode
        response = await fetch('http://localhost:8080/addJobDetails/add/job', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(jobData),
        });
      }
      if (response.ok) {
        fetchJobs(); // Refresh job list
        setJobData({ // Clear form after submission
          title: '',
          type: '',
          subject: '',
          experience: '',
          location: '',
          company: '',
          job_Link: '' // Updated field name
        });
        setEditIndex(null); // Exit edit mode
      } else {
        console.error('Failed to add/update job:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding/updating job:', error);
    }
  };

  // Function to handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setJobData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Function to delete a job
  const handleDeleteJob = async (index) => {
    try {
      const response = await fetch(`http://localhost:8080/addJobDetails/delete/job/${jobList[index].id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        fetchJobs(); // Refresh job list
      } else {
        console.error('Failed to delete job:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting job:', error);
    }
  };

  // Function to edit a job
  const handleEditJob = (index) => {
    // Set edit mode and fill form with job details
    setEditIndex(index);
    setJobData(jobList[index]);
  };

  return (
    <div className="w-full bg-gray-800 h-screen">
      <div className="bg-gradient-to-b from-blue-800 to-blue-600 h-96"></div>
      <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gray-900 w-full shadow rounded p-8 sm:p-12 -mt-72">
          <p className="text-3xl font-bold leading-7 text-center text-white">{editIndex !== null ? 'Update Job' : 'Post Job'}</p>
          <form onSubmit={handleSubmit}>
            <div className="md:flex items-center mt-12">
              <div className="w-full md:w-1/2 flex flex-col">
                <label className="font-semibold leading-none text-gray-300">Title</label>
                <input
                  type="text"
                  name="title"
                  value={jobData.title}
                  onChange={handleInputChange}
                  className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                <label className="font-semibold leading-none text-gray-300">Type</label>
                <input
                  type="text"
                  name="type"
                  value={jobData.type}
                  onChange={handleInputChange}
                  className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
                />
              </div>
            </div>
            <div className="md:flex items-center mt-8">
              <div className="w-full flex flex-col">
                <label className="font-semibold leading-none text-gray-300">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={jobData.subject}
                  onChange={handleInputChange}
                  className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
                />
              </div>
            </div>
            <div className="md:flex items-center mt-8">
              <div className="w-full flex flex-col">
                <label className="font-semibold leading-none text-gray-300">Experience</label>
                <input
                  type="text"
                  name="experience"
                  value={jobData.experience}
                  onChange={handleInputChange}
                  className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
                />
              </div>
            </div>
            <div className="md:flex items-center mt-8">
              <div className="w-full flex flex-col">
                <label className="font-semibold leading-none text-gray-300">Location</label>
                <input
                  type="text"
                  name="location"
                  value={jobData.location}
                  onChange={handleInputChange}
                  className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
                />
              </div>
            </div>
            <div className="md:flex items-center mt-8">
              <div className="w-full flex flex-col">
                <label className="font-semibold leading-none text-gray-300">Company</label>
                <input
                  type="text"
                  name="company"
                  value={jobData.company}
                  onChange={handleInputChange}
                  className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
                />
              </div>
            </div>
            <div className="md:flex items-center mt-8">
              <div className="w-full flex flex-col">
                <label className="font-semibold leading-none text-gray-300">Job Link</label>
                <input
                  type="text"
                  name="job_Link" // Updated field name
                  value={jobData.job_Link} // Updated field name
                  onChange={handleInputChange}
                  className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
                />
              </div>
            </div>
            <div className="flex items-center justify-center w-full">
              <button type="submit" className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                {editIndex !== null ? 'Update JOB' : 'Add JOB'}
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Job list section */}
      <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="mt-12">
          <div className="bg-gray-900 w-full shadow rounded p-8 sm:p-12">
            <p className="text-3xl font-bold leading-7 text-center text-white">Job List</p>
            {jobList.map((job, index) => (
              <div key={index} className="mt-6">
                <p className="text-lg font-semibold text-white">{job.title}</p>
                <p className="text-sm text-gray-400">{job.company}</p>
                <div className="flex mt-2">
                  {/* Edit button */}
                  <button onClick={() => handleEditJob(index)} className="text-blue-500 hover:text-blue-400 focus:outline-none focus:text-blue-400 mx-2">Edit</button>
                  {/* Delete button */}
                  <button onClick={() => handleDeleteJob(index)} className="text-red-500 hover:text-red-400 focus:outline-none focus:text-red-400">Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
