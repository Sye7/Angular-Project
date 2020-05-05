package com.event.management;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.convert.Jsr310Converters;


@EntityScan(basePackageClasses = { WelcomeHelloWorldApplication.class, Jsr310Converters.class })
@SpringBootApplication
public class WelcomeHelloWorldApplication {

	public static void main(String[] args) {
		SpringApplication.run(WelcomeHelloWorldApplication.class, args);
	}

}
