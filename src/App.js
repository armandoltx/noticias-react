import React, { Component } from 'react';
import Header from './componentes/Header';
import Noticias from './componentes/Noticias';


class App extends Component {

  state = {
    noticias: [],
  }

  componentDidMount() {
    this.consultarNoticias();
  }

  consultarNoticias = () => {
    console.log("consultarNoticias");
    // leer la url y agregar el API key
    const appId = 'dfe2d931c07b4e1f8b2fe27eaa49e40d';
    let url = `https://newsapi.org/v2/top-headlines?country=au&category=general&apiKey=${appId}`;


    // query con fetch api
    fetch(url)
      .then(respuesta => {
        console.log("respuesta dentro de fetch ", fetch);
        return respuesta.json();
      })
      .then(noticias => {
        console.log("noticias en fetch ", noticias);
        this.setState({
          noticias: noticias.articles,
        })
      })
      .catch(error => {
        console.log(error);
      })
  }
  
  render() {
    return (
      <div className="contenedor-app">
        <Header titulo={"Noticias"} />
        <div className="container white contenedor-noticias">
          <Noticias noticias={this.state.noticias} />
        </div>
      </div>
    );
  }
}

export default App;