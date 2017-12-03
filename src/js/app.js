import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';

import React from 'react';
import ReactDom from 'react-dom';

import Navbar from './navbar/navbar.component.js';
import Carousel from './carousel/carousel.component.js';
import Footer from './footer/footer.component.js';

class Layout extends React.Component {
    render() {
	return (
	    <div>
	      <Navbar/>
	      <Carousel/>
	      <Footer/>
	    </div>
	);
    }
}

ReactDom.render(<Layout/>, document.getElementById('root'));
