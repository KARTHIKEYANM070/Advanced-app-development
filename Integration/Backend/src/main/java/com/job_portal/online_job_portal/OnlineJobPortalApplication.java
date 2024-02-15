package com.job_portal.online_job_portal;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;

@SpringBootApplication
@OpenAPIDefinition(
		info =@Info(
				title = "Job_portal",
				version = "0.1.2",
				description = "Online_Job_Portal",
				contact = @Contact(
						name = "KARTHIKEYAN",
						email = "m.karthikeyan9363@gmail.com"
						)
				)
		)
public class OnlineJobPortalApplication {

	public static void main(String[] args) {
		SpringApplication.run(OnlineJobPortalApplication.class, args);
	}

}
