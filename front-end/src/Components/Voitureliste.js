import React from 'react';



class Voitureliste extends React.Component {

    constructor(props) {
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
    }


    render(){
        return (
            <h1>Hi I'm voiture list component</h1>
        );
    }
}

export default Voitureliste;
