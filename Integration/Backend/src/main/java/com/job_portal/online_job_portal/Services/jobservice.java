package com.job_portal.online_job_portal.Services;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.job_portal.online_job_portal.model.Job;
import com.job_portal.online_job_portal.repository.JobPosrRepository;





@Service
public class jobservice {

    @Autowired(required=true)
	JobPosrRepository r;
	
	public String add(Job e)
	{
		r.save(e);
		return "Added";
	}
	
	public List<Job> getDetails()
	{
		return r.findAll();
	}
	
	public Job updateDetails(Job newUser ,int id) 
	{
		Job up=r.findById(id).get();		
		 up.setType(newUser.getType());
		 up.setId(newUser.getId());
		 up.setTitle(newUser.getTitle());
		 up.setCompany(newUser.getCompany());
		 up.setExperience(newUser.getExperience());
		 up.setLocation(newUser.getLocation());
		 up.setSkills(newUser.getSkills());
		 up.setJob_Link(newUser.getJob_Link());
         return r.saveAndFlush(up);
	}
	
   
	
	
	
	
	public void deleteDetails(int id) {
		r.deleteById(id);
	}
	
	
	
	public Job getDetail(int id) {
	
		return r.findById(id).get();
	}
	

    
}