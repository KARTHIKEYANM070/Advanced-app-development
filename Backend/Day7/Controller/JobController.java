package com.job_portal.online_job_portal.Controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.job_portal.online_job_portal.Services.jobservice;
import com.job_portal.online_job_portal.model.Job;

import io.swagger.v3.oas.annotations.tags.Tag;
@RestController
// @CrossOrigin("http://localhost:5173/")
 @RequestMapping("/addJobDetails")
class EventController {

    @Autowired
     jobservice r;

@PostMapping("/add/job")
public String addDetails(@RequestBody Job m) {
    r.add(m);
    return "Added product " ;
}
@Tag(name = "Get Users", description = "endpoint for fetching all users")
@GetMapping("/get/job")
public List<Job> showDetails() {
    return r.getDetails();

}
@GetMapping("/get/job/{id}")
public Job showDetail(@PathVariable int id) {
    return r.getDetail(id);

}



@PutMapping("/update/job/{id}")
public Job Details(@RequestBody Job newUser ,@PathVariable int id)
{
     return r.updateDetails(newUser,id);
}

@DeleteMapping("/delete/job/{id}")
public String delete(@PathVariable int id )
{
    r.deleteDetails(id);
    return "your item id "+ "is deleted";
}

}