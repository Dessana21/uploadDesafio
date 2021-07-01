
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import firebase from './../../Firebase';


class Todolist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: true,
            titulo: '',
            autor: '',
            numident: '',
           
            items: []
        }

        this.addItem = this.addItem.bind(this);
        this.sair = this.sair.bind(this);

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user: user });
            }
        })
    }

    sair() {
        firebase.auth().signOut()
            .then(() => {
                this.setState({ user: null });
            });
    }

    addItem(e) {
        let state = this.state;


        if (this._tituloInput.value === '' || this._autor.value === '' || this._numident.value === '' ) {
            alert('Complete os campos');
        }
        else {
            if (this._tituloInput.value !== '') {
                let newItem = {
                    text: this._tituloInput.value,
                    key: Date.now()
                };
    
    
                this.setState({ items: [...state.items, newItem] });
            }
      
                
            if(this._autor.value !== ''){
                let newItem = {
                    text: this._autor.value,
                    key: Date.now()
                };
    
                this.setState({ items: [...state.items, newItem] });
            }
    
            if(this._numident.value !== ''){
                let newItem = {
                    text: this._numident.value,
                    key: Date.now()
                };
    
                this.setState({ items: [...state.items, newItem] });
            }
    
           
    
    
            firebase.database().ref('projects').child(firebase.auth().currentUser.uid).child(this.state.titulo).set({
                A: this.state.autor,
                N: this.state.numident
                });
    
            e.preventDefault();
            this.setState({ titulo: '', autor:'', numident: ''});
        }
        
    }

    render() {
        return (
            <div>
                {this.state.user
                    ?
                    <div>
                        <h1>Cadastre seu livro :)</h1><br />
                        <form>
                            <label>Título:</label><br />
                            <input type="text" placeholder=" " name="titulo"
                                value={this.state.titulo} onChange={(ev) => this.setState({ titulo: ev.target.value })}
                                ref={(event) => this._tituloInput = event} />
                        </form>


                        <form>
                            <label>Autor:</label><br />
                            <input type="text" placeholder=" " name="autor"
                                value={this.state.autor} onChange={(ev) => this.setState({ autor: ev.target.value })}
                                ref={(event) => this._autor = event} />

                        </form>


                        <form>
                            <label>Número de identificação:</label><br />
                            <input type="number" placeholder=" " name="num"
                                value={this.state.numident} onChange={(ev) => this.setState({ numident: ev.target.value })}
                                ref={(event) => this._numident = event} />

                        </form>

                

                        <button onClick={this.addItem}>Adicionar</button> <br/>
                        <Link to="/Resultado">Livros</Link> <br/>
                        <button onClick={this.sair}>Sair</button>
                    </div>
                    :
                    <div>
                        <Redirect to='/' />
                    </div>
                }
            </div>
        );

    }
}

export default Todolist;