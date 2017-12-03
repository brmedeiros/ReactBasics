import React from 'react';

export default class Footer extends React.Component {
    render() {
	return(

	    <footer className='footer bg-light'>
	      <div className='container'>
		<span className='text-muted'>
		  © 2017 Company, Inc. <a className='float-right' href='#'>Back to top</a>
		</span>
	      </div>
	    </footer>
	);
    }
}
