import React from 'react';

export default class Navbar extends React.Component {
    render() {
	return(
	    <nav className='navbar sticky-top navbar-expand-md navbar-light bg-light'>

	      <a className='navbar-brand' href='#'>
		<img src='assets/logo/logo.png' width='30' height='30' className='d-inline-block align-top mr-1' alt='Logo'/>
		Newer Site
	      </a>
	      <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarDropdown'>
		<span className='navbar-toggler-icon'></span>
	      </button>

	      <div className='collapse navbar-collapse' id='navbarDropdown'>

		<ul className='navbar-nav mr-auto'>
		  <li className='nav-item active'>
		    <a className='nav-link' href='#'>Home</a>
		  </li>
		  <li className='nav-item dropdown'>
		    <a className='nav-link dropdown-toggle' href='#' id='navbarDropdown' role='button' data-toggle='dropdown'>
		      Dropdown
		    </a>
		    <div className='dropdown-menu'>
		      <a className='dropdown-item' href='#'>Action</a>
		      <a className='dropdown-item' href='#'>Another action</a>
		      <div className='dropdown-divider'></div>
		      <a className='dropdown-item' href='#'>Something else here</a>
		    </div>
		  </li>
		  <li className='nav-item'>
		    <a className='nav-link' href='#'>Link</a>
		  </li>
		  <li className='nav-item'>
		    <a className='nav-link disabled' href='#'>Disabled</a>
		  </li>
		</ul>

		<form className='form-inline'>
		  <input className='form-control mr-sm-2' type='search' placeholder='Search'/>
		  <button className='btn btn-outline-success my-2 my-sm-0' type='button'>Search</button>
		</form>

	      </div>
	    </nav>

	);
    };
}
