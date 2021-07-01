import React, { Component } from 'react';
import './../../style.css';


class Header extends Component {
    render(){
        return(
            <div className="container">
      <header>
        <strong>Bem vindo(a) ao serviço de empréstimo de livros</strong>
      </header>
            </div>
        )
    }
}

export default Header;