import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDom from 'react-dom';

import Navbar from './navbar/navbar.component.js';

class Layout extends React.Component {
    render() {
	return (
	    <div>
	      <Navbar/>
	    </div>
	);
    }
}

ReactDom.render(<Layout/>, document.getElementById('root'));
