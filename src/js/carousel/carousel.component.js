import React from 'react';

export default class Carousel extends React.Component {
    render() {
	return(
	    <div id='carouselControls' className='carousel slide container mx-auto' data-ride='carousel' data-interval='5000'>
	      <div className='carousel-inner'>
		<div className='carousel-item active'>
		  <img className='d-block w-100' src='assets/carousel/gruyere.jpg' alt='First slide'/>
		  <div className="carousel-caption">
		    <h4>First Thumbnail label</h4>
		    <p>This is the caption</p>
		  </div>
		</div>
		<div className='carousel-item'>
		  <img className='d-block w-100' src='assets/carousel/chasm.jpg' alt='Second slide'/>
		  <div className="carousel-caption">
		    <h4>Second Thumbnail label</h4>
		    <p>This is the caption</p>
		  </div>
		</div>
		<div className='carousel-item'>
		  <img className='d-block w-100' src='assets/carousel/seaside.jpg' alt='Third slide'/>
		  <div className="carousel-caption">
		    <h4>Third Thumbnail label</h4>
		    <p>This is the caption</p>
		  </div>
		</div>
	      </div>
	      <a className='carousel-control-prev' href='#carouselControls' role='button' data-slide='prev'>
		<span className='carousel-control-prev-icon'></span>
	      </a>
	      <a className='carousel-control-next' href='#carouselControls' role='button' data-slide='next'>
		<span className='carousel-control-next-icon'></span>
	      </a>
	    </div>
	);
    }
}
