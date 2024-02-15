package com.job_portal.online_job_portal.model;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Post_Job")
public class Job {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name="Title")
    private String title;
    @Column(name = "Company")
    private String Company;
    @Column(name = "type")
    private String type;
    @Column(name = "experience")
    private String experience;
    @Column(name = "location")
    private String location;
    @Column(name = "Skills")
    private String skills;
    @Column(name = "JobLink")
    private String JobLink;
    public Job(int id, String title, String company, String type, String experience, String location, String skills,
            String jobLink) {
        this.id = id;
        this.title = title;
        this.Company = company;
        this.type = type;
        this.experience = experience;
        this.location = location;
        this.skills = skills;
        JobLink = jobLink;
    }
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getCompany() {
        return Company;
    }
    public void setCompany(String company) {
        Company = company;
    }
    public String getType() {
        return type;
    }
    public void setType(String type) {
        this.type = type;
    }
    public String getExperience() {
        return experience;
    }
    public void setExperience(String experience) {
        this.experience = experience;
    }
    public String getLocation() {
        return location;
    }
    public void setLocation(String location) {
        this.location = location;
    }
    public String getSkills() {
        return skills;
    }
    public void setSkills(String skills) {
        this.skills = skills;
    }
    public String getJob_Link() {
        return JobLink;
    }
    public void setJob_Link(String jobLink) {
        JobLink = jobLink;
    }

    public Job()
    {

    }

    
}
