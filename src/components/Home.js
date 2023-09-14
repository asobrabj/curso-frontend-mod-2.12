import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Carousel.css';
import '../Pag_Inicial.css';

import imagem1 from '../img/img1.jpg';
import imagem2 from '../img/img2.jpg';
import imagem3 from '../img/img3.jpg';
import imagem4 from '../img/img4.jpg';
import imagem5 from '../img/img5.jpg';
import imagem6 from '../img/img6.jpg';


const images = [imagem1, imagem2, imagem3, imagem4, imagem5, imagem6];

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000, // Velocidade de transição (2 segundos)
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Reprodução automática
    autoplaySpeed: 5000, // Ttransições (5 segundos)
  };

  return (
    <div className='pag_ini'>
      <h2>Página Inicial</h2>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Imagem ${index}`} className="carousel-img" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Home;
