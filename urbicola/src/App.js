import React from 'react';
import { Initial } from './pages/initial/Initial';
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Servicos } from './pages/servico/Servicos';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Initial/>
          </Route>
          <Route path='/servicos'>
            <Header/>
            <Servicos/>
            <Footer/>
          </Route>
          <Route path='/projetos'>

          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
