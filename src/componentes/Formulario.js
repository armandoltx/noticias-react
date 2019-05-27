import React, { Component } from 'react';

class Formulario extends Component {

  // refs para los campos del formulario
  categoriaRef = React.createRef();

  cambiarCategoria = (e) => {
    e.preventDefault();
    // console.log("categoriaRef ", this.categoriaRef);
    // console.log("categoriaRef ", this.categoriaRef.current.value);
    // Agregarlo y enviarlo por props hacia el padre
    // en este caso no tenemos que crear un metodo en el padre, pq "consultarNoticias" es el metodo que tiene q recibir las  categorias
    this.props.consultarNoticias(this.categoriaRef.current.value);
  }


  render() {
    return (
      <div className="buscador row">
        <div className="col s12 m8 offset-m2">
          <form onSubmit={this.cambiarCategoria}>
            <h2>Noticias por Categoria</h2>
            <div className="imput-field col s12 m8">
              <select name="" id="" ref={this.categoriaRef}>
                <option value="general" defaultValue>General</option>
                <option value="business">Negocios</option>
                <option value="entertainment">Entretenimiento</option>
                <option value="health">Salud</option>
                <option value="science">Ciencia</option>
                <option value="sports">Deportes</option>
                <option value="technology">Tecnologia</option>
              </select>
            </div>
            <div className="input-field col s12 m4 enviar">
            <input type="submit" className="btn amber darken-2" value="Buscar"/>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Formulario;