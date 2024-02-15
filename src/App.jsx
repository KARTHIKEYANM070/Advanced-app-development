// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navbariop } from './Component/Navbar';
import Header from './Component/Header';
import SearchBar from './Component/SearchBar';
import JobCard from './Component/JobCard';
import JobDummyData from './JobDummyData';
import { Navbar } from './Navbarmain';

function App() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/addJobDetails/get/job')
      .then(response => {
        console.log(response.data);
        setJobs(response.data);
        setFilteredJobs(response.data); // Set filteredJobs initially with all jobs
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleSearch = (searchParams) => {
    console.log('Search parameters:', searchParams);
    
    if (jobs && jobs.length > 0) {
      const filteredJobs = jobs.filter(job => {
        // Add filtering logic based on search parameters
        const roleMatch = job.title?.toLowerCase().includes(searchParams.role.toLowerCase());
        const typeMatch = job.type?.toLowerCase().includes(searchParams.type.toLowerCase());
        const locationMatch = job.location?.toLowerCase().includes(searchParams.location.toLowerCase());
        const experienceMatch = job.experience?.toLowerCase().includes(searchParams.experience.toLowerCase());
        
        // Return true if all search parameters match
        return roleMatch && typeMatch && locationMatch && experienceMatch;
      });
      console.log('Filtered jobs:', filteredJobs);
      setFilteredJobs(filteredJobs);
    } else {
      console.warn('No jobs data available');
      setFilteredJobs([]); // Set filteredJobs to empty array if jobs data is not available
    }
  };

  return (
    <>
      <div>
        <Navbar />
        <Navbariop />
        <Header />
        <SearchBar onSearch={handleSearch} />
        {filteredJobs.map(job => (
          <JobCard key={job.id} title={job.title} type={job.type} experience={job.experience} location={job.location} skills={job.skills} job_Link={job.job_Link} company={job.company} />
        ))}
      </div>
    </>
  );
}

export default App;
