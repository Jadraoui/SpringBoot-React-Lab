import React from 'react';
import {Card,Table} from 'react-bootstrap';



class Voitureliste extends React.Component {

    /*constructor(props) {
        super(props);
        this.state = { voitures: [] };
    }

    componentDidMount() {
        fetch('http://localhost:8080/voitures')
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    voitures: responseData
                });
            })
        .catch(err => console.error(err));
    }*/


    render(){
        return (
            <Card > 
                <Card.Header> Liste Voitures </Card.Header>
                <Card.Body>
                    <Table>
                        <thead>
                            <tr>
                                <th>Marque</th>
                                <th>Modele</th>
                                <th>Couleur</th>
                                <th>Annee</th>
                                <th>Prix</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr align="center">
                                <td colSpan="6">Aucune Voiture n'est disponible</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        );
    }
}

export default Voitureliste;
