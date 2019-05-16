import React from 'react';

const Noticia = ({noticia}) => { // si aqui ponemos props
  const {urlToImage, url, title, descrition, source} = noticia; // esto seria igual a props.noticia
  console.log(title);
  return (
    <div>
      Hola Desde NOTICIA sin S
    </div>
  );
};

export default Noticia;