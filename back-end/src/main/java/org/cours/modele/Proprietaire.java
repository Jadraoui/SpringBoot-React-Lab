package org.cours.modele;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;


@Entity
@Data
@RequiredArgsConstructor
@NoArgsConstructor
public class Proprietaire {
	
	@OneToMany(cascade = CascadeType.ALL, mappedBy="proprietaire")
	@JsonIgnore
	private List<Voiture> voitures;
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	
	@NonNull
	private String nom;
	
	@NonNull
	private String prenom;
	
	

}
