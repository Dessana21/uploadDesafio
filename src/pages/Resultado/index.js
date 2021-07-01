import React, { Component } from 'react';
import firebase from './../../Firebase';

class Resultado extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lista: []
        };

        firebase.database().ref('projects').child(firebase.auth().currentUser.uid).on('value', (snapshot) => {
            let state = this.state;
            state.lista = [];
            snapshot.forEach((childItem) => {
                state.lista.push({
                    key: childItem.key,
                  
                })
            });
            this.setState(state);
        });

}




    render() {
        return (
            <div>
                <h1>Detalhes</h1>
                {this.state.lista.map((item) => {
                    return (
                        <div key={item.key}>
                            <h2>Livro: {item.key}</h2>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Resultado;