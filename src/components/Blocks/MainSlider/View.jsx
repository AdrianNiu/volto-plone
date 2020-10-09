import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { Icon } from '@plone/volto/components';
import sliderPNG from './slider-image.png';
import rightSVG from '@plone/volto/icons/right-key.svg';
import leftSVG from '@plone/volto/icons/left-key.svg';

const NextArrow = ({ className, style, onClick }) => (
  <Button
    className={className}
    style={{ ...style, display: 'block' }}
    onClick={onClick}
  >
    <Icon name={rightSVG} size="70px" color="#fff" />
  </Button>
);

const PrevArrow = ({ className, style, onClick }) => (
  <Button
    className={className}
    style={{ ...style, display: 'block' }}
    onClick={onClick}
  >
    <Icon name={leftSVG} size="70px" color="#fff" />
  </Button>
);

const View = props => {
  return (
    <div
      className="tile view mainslider full-width"
      style={{
        background: `url(${sliderPNG}) center no-repeat`,
      }}
    >
      <Slider
        customPaging={dot => <div />}
        dots={true}
        fade
        dotsClass="slick-dots slick-thumb"
        infinite
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        nextArrow={<NextArrow />}
        prevArrow={<PrevArrow />}
      >
        <div>
          <div className="slide slide1">
            <h3>GPTRAC</h3>
            <h1>
              VOLTO TESTING <br />
              UMN testing
            </h1>
            <Link to="/plone5">Newsletter</Link>
          </div>
        </div>
        <div>
          <div className="slide slide1">
            <h3>GPTRAC UMN</h3>
            <h1>
              The newsletter <br />
              Minnesota
            </h1>
            <Link to="https://www.gptrac.org/">Learn about GPTRAC</Link>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default View;
