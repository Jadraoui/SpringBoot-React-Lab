package org.cours;

import static org.assertj.core.api.Assertions.assertThat;
import org.cours.web.VoitureController;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;


//indique que c’est une classe de test régulier qui exécute les tests à base de Spring boot
@RunWith(SpringRunner.class)
@SpringBootTest

class BackEndApplicationTests {

	@Autowired
	VoitureController voitureController;
	
	//indique que cette méthode peut être exécutée comme un cas de test
	@Test
	void contextLoads() {
		//on teste si l’instance du contrôleur a été créé et injectée avec succès.
		assertThat(voitureController).isNotNull();
	}

}
