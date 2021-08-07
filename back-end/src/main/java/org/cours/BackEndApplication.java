package org.cours;

import org.cours.modele.Proprietaire;
import org.cours.modele.ProprietaireRepo;
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
	@Autowired 
	ProprietaireRepo proprietaireRepo;

	public static void main(String[] args) {
		SpringApplication.run(BackEndApplication.class, args);
	}
	

	Proprietaire proprietaire1 = new Proprietaire("Ali" , "Hassan");
	Proprietaire proprietaire2 = new Proprietaire("Najat" , "Bani");
	Voiture v1 = new Voiture("Toyota", "Corolla", "Grise", "A-1-9090", 2018, 95000);
	Voiture v2 = new Voiture("Ford", "Fiesta", "Rouge", "A-2-8090", 2015, 90000);
	Voiture v3 = new Voiture("Honda", "CRV", "Bleu", "A-3-7090", 2016, 140000);

	
	@Bean
	CommandLineRunner runner(){
		return args -> {
			proprietaireRepo.save(proprietaire1);
			proprietaireRepo.save(proprietaire2);
			v1.setProprietaire(proprietaire1);
			v2.setProprietaire(proprietaire1);
			v3.setProprietaire(proprietaire2);
			repository.save(v1);
			repository.save(v2);
			repository.save(v3);
		};
	}

}
