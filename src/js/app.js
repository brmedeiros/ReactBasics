import 'bootstrap';

import React from 'react';
import ReactDom from 'react-dom';

class Layout extends React.Component {
    render() {
	return (
	    <div className = 'col'>
	      <h1 className = 'text-center border border-primary rounded bg-primary p-2'>Hello react world!</h1>
	      <button type="button" className="btn btn-primary btn-sm" id="back-btn">back</button>

	      <div className="card">
		<div className="card-body">
		  <h4 className="card-title">Card title</h4>
		  <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
		  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
		  <a href="#" className="card-link">Card link</a>
		  <a href="#" className="card-link">Another link</a>
		</div>
	      </div>

	      <div className="dropdown">
		<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		  Dropdown button
		</button>
		<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
		  <a className="dropdown-item" href="#">Action</a>
		  <a className="dropdown-item" href="#">Another action</a>
		  <a className="dropdown-item" href="#">Something else here</a>
		</div>
	      </div>
	    </div>
	);
    }
}

ReactDom.render(<Layout/>, document.getElementById('root'));
