import React, { Component } from 'react';
import Noticia from './Noticia';

class Noticias extends Component {
  render() {
    return (
      <div className="row">
        hola desde noticias.js
        <Noticia />
    </div>
    );
  }
}

export default Noticias;