import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit,faTrash } from '@fortawesome/free-solid-svg-icons'
import {ButtonGroup, Button,Card,Table} from 'react-bootstrap';
const axios = require('axios');



class Voitureliste extends React.Component {

    constructor(props) {
        super(props);
        this.state = { voitures: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:8080/voitures')
            .then(response => response.data)
            .then((data) => {
                this.setState({voitures:data});
            });
    }

    deleteVoiture = (voitureId) => {
        axios.delete("http://localhost:8080/voitures/"+voitureId)
                .then(response => {
                    if(response.data != null){
                        alert("Voiture supprimée avec succès.");
                        this.setState({
                            voitures: this.state.voitures.filter(voiture => voiture.id !== voitureId)
                        })
                }
             }
        )
    };


    render(){
        return (
            <Card > 
                <Card.Header> Liste Voitures </Card.Header>
                <Card.Body>
                    <Table bordered hover striped variant="gray">
                        <thead>
                            <tr>
                                <th>Marque</th>
                                <th>Immatricule</th>
                                <th>Modele</th>
                                <th>Couleur</th>
                                <th>Annee</th>
                                <th>Prix</th>
                            </tr>
                        </thead>
                        <tbody>
                                {this.state.voitures.length===0 ?
                                <tr align="center">
                                    <td colSpan="6"> Voitures disponibles</td>
                                </tr>: this.state.voitures.map((voiture)=> (
                                    <tr key={voiture.id}>
                                        <td>{voiture.marque}</td>
                                        <td>{voiture.immatricule}</td>
                                        <td>{voiture.modele}</td>
                                        <td>{voiture.couleur}</td>
                                        <td>{voiture.annee}</td>
                                        <td>{voiture.prix}</td>
                                        <td>
                                            <ButtonGroup>
                                                <Button size="sm" variant="outline-primary">
                                                    <FontAwesomeIcon icon={faEdit}/>
                                                </Button>{' '}
                                                <Button size="sm" variant="outline-danger" onClick={this.deleteVoiture.bind(this,voiture.id)}>
                                                    <FontAwesomeIcon icon={faTrash}/>
                                                </Button>
                                            </ButtonGroup>
                                        </td>
                                    </tr>
                                    ))
                                }
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        );
    }
}

export default Voitureliste;
