import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

class Navigation extends React.Component {
	render() {
    	return (
        	<Navbar collapseOnSelect fixed='top' expand='lg' bg='dark' variant="dark">
        		<Container>
        			<Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        			<Navbar.Toggle aria-controls='basic-navbar-nav' />
        			<Navbar.Collapse id='basic-navbar-nav'>
        				<Nav className='me-auto'>
        					<Nav.Link href='/'>Home</Nav.Link>
        					<Nav.Link href='/gallery'>Gallery</Nav.Link>
        				</Nav>
        			</Navbar.Collapse>
        		</Container>
        	</Navbar>
    	);
  	}
}

export default Navigation;