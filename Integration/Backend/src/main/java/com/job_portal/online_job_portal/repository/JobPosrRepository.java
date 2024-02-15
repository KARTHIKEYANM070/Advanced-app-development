package com.job_portal.online_job_portal.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.job_portal.online_job_portal.model.Job;
@Repository
public interface JobPosrRepository extends JpaRepository<Job,Integer>{

 
    
}
