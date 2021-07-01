import React from 'react';
//import { BrowserRouter, Switch, Route, Redirec} from 'react-router-dom';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Todolist from './components/Todolist';
import Header from './components/Header';
import Erro from './pages/Erro';
import Resultado from './pages/Resultado';


const Routes = () => {

    return (
        <BrowserRouter>
        <Header/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/Todolist" component={Todolist} />
                <Route path="/Resultado" component={Resultado} />
                <Route path="*" component={Erro} />
            </Switch>
        </BrowserRouter>

    );

}

export default Routes;