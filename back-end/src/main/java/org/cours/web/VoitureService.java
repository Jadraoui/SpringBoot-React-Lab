package org.cours.web;

import java.util.ArrayList;
import java.util.List;

import org.cours.modele.Voiture;
import org.cours.modele.VoitureRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VoitureService {
	
	@Autowired
	VoitureRepo voitureRepo;
	
	public List<Voiture> getAllVoituress() {
		List<Voiture> voitures = new ArrayList<>();
		//moduleRepository.findAll().forEach(modules::add);
		voitureRepo.findAll().forEach(m->voitures.add(m));
		return voitures;
	}
	
	public void ajouterVoiture(Voiture voiture) {
		voitureRepo.save(voiture);
	}

}
