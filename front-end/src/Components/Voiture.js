import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave,faUndo,faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import {Card,Form,Col,Button} from 'react-bootstrap'; 
const axios = require('axios');

class Voiture extends React.Component {

    constructor(props) { 
            super(props);
            this.state=this.initialState;
            this.voitureChange = this.voitureChange.bind(this);
            this.submitVoiture = this.submitVoiture.bind(this);
    }

    initialState = {
        marque:"", modele:"",immatricule:"",couleur:"", annee:"", prix:""
    }

    resetVoiture = () => {
        this.setState(()=> this.initialState
        );
    }

    submitVoiture = event => { 
        event.preventDefault(); 
        const voiture = {
            marque:this.state.marque,
            modele:this.state.modele,
            immatricule:this.state.immatricule,
            couleur:this.state.couleur,
            annee:this.state.annee,
            prix:this.state.prix
        };
        axios.post('http://localhost:8080/voitures',voiture)
            .then(response => {
                if(response.data != null){
                    this.setState(this.initialState);
                    alert("Voiture Enregistré avec succès");
                }
        });
    }

    voitureChange(event) { 
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    
    
    render(){
        return (
            <Card> 
                <Card.Header><FontAwesomeIcon icon={faPlusSquare}/> Ajouter Voiture</Card.Header>
                <Card.Body> 
                <Form onReset={this.resetVoiture} onSubmit={this.submitVoiture} id="VoitureFormId">
                    <Card.Body>
                        <Form.Row> 
                            <Form.Group as={Col} controlId="formGridMarque">
                                <Form.Label>Marque</Form.Label> 
                                <Form.Control required name ="marque" type="text"  placeholder= "Entrez Marque Voiture" value={this.state.marque} autoComplete="off" onChange={this.voitureChange}/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridModele">
                                <Form.Label>Modele</Form.Label> 
                                <Form.Control required autoComplete="off" name ="modele" type="text"  placeholder= "Entrez modele Voiture" value={this.state.modele} onChange={this.voitureChange}/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridImmatricule">
                                <Form.Label>Immatricule</Form.Label> 
                                <Form.Control required autoComplete="off" name ="immatricule" type="text"  placeholder= "Entrez Immatricule Voiture" value={this.state.immatricule} onChange={this.voitureChange}/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridCouleur">
                                <Form.Label>Couleur</Form.Label> 
                                <Form.Control required autoComplete="off" name ="couleur" type="text"  placeholder= "Entrez Couleur Voiture" value={this.state.couleur} onChange={this.voitureChange}/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridAnnee">
                                <Form.Label>Annee</Form.Label> 
                                <Form.Control required autoComplete="off" name ="annee" type="text"  placeholder= "Entrez Annee Voiture" value={this.state.annee} onChange={this.voitureChange}/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPrix">
                                <Form.Label>Prix</Form.Label> 
                                <Form.Control required autoComplete="off" name ="prix" type="text"  placeholder= "Entrez Prix Voiture" value={this.state.prix} onChange={this.voitureChange}/>
                            </Form.Group>
                        </Form.Row>
                    </Card.Body>
                        <Card.Footer style={{"textAlign":"right"}}>
                            <Button size="sm" variant="success" type = "submit"><FontAwesomeIcon icon={faSave}/> Submit</Button>
                            <Button size="sm" variant="info" type = "reset"><FontAwesomeIcon icon={faUndo}/> Reset</Button>
                        </Card.Footer>
                </Form> 
                </Card.Body> 
            </Card>
        );
    }
}

export default Voiture;
