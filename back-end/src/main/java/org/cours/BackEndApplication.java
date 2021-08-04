package org.cours;

import org.cours.modele.Voiture;
import org.cours.modele.VoitureRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
public class BackEndApplication {
	
	@Autowired
	private VoitureRepo repository;

	public static void main(String[] args) {
		SpringApplication.run(BackEndApplication.class, args);
	}
	
	@Bean
	CommandLineRunner runner(){
		return args -> {
			repository.save(new Voiture("Toyota", "Corolla", "Grise", "A-1-9090", 2018, 95000));
			repository.save(new Voiture("Ford", "Fiesta", "Rouge", "A-2-8090", 2015, 90000));
			repository.save(new Voiture("Honda", "CRV", "Bleu", "A-3-7090", 2016, 140000));
		};
	}

}
