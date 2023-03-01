import Carousel from 'react-bootstrap/Carousel';
import banner1 from 'img/banner1.jpg';
import banner2 from 'img/banner2.jpg';
import { Slider } from './Banner.styled';

function Banner() {
  return (
    <Slider>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Slider>
  );
}

export default Banner;
