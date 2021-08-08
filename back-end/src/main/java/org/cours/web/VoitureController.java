package org.cours.web;

import java.util.List;

import org.cours.modele.Voiture;
import org.cours.modele.VoitureRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class VoitureController {
	
	@Autowired
	private VoitureService voitureService;
	
	@RequestMapping("/voitures")
	public List<Voiture> getVoitures() {
		return voitureService.getAllVoituress();
	}
	
	@RequestMapping(method=RequestMethod.POST, value="/voitures")
	public void addVoiture(@RequestBody Voiture voiture) {
		System.out.println(voiture);
		voitureService.ajouterVoiture(voiture);
	}
	

}
