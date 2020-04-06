import React from 'react';
import Header from './Components/Header';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Generos from './Components/genres/Generos';
import NovoGenero from "./Components/genres/NovoGenero";
import EditarGenero from './Components/genres/EditarGenero';
import Series from './Components/series/Series';
import NovaSerie from './Components/series/NovaSerie';
import InfoSeries from './Components/series/InfoSeries';




const Home = () => {
  return <h1>HOME</h1>
}


function App() {
  return(
    <Router>
      <div>
        <Header />
        <Switch>
        <Route path ="/" exact /*Exact quer dizer que é exatamente a barra*/ component = {Home}></Route>
        <Route path ="/generos" exact component = {Generos}></Route>
        <Route path ="/generos/novo" exact component = {NovoGenero}></Route>
        <Route path ="/generos/:id" exact component = {EditarGenero}></Route>
        <Route path ="/series" exact component = {Series}></Route>
        <Route path ="/series/novo" exact component = {NovaSerie}></Route>
        <Route path ="/series/:id" exact component = {InfoSeries}></Route>

        </Switch>
      </div>
    </Router>
   
  );
}

export default App;
