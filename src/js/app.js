import React from 'react';
import ReactDom from 'react-dom';

class Layout extends React.Component {
    render() {
	return (
	    <h1>Is it Working???</h1>
	);
    }
}

ReactDom.render(<Layout/>, document.getElementById('root'));
