import React from 'react';
import { Navbar, Nav, Offcanvas, Form, FormControl, Button } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import './Navigation.css';

class Navigation extends React.Component {
	render() {
    	return (
        	<Navbar collapseOnSelect fixed='top' bg='dark' variant="dark" expand={false}>
    			<Navbar.Brand href="/" className='font_ths p-2'>React-Bootstrap</Navbar.Brand>
    			<Navbar.Toggle aria-controls="offcanvasNavbar"/>
    			<Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbar" placement="end">
    				<Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel" className='font_ths'>React-Bootstrap</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Form className="d-flex">
                            <Button variant="outline-success"><Icon icon="oi:magnifying-glass" className='mb-1'/></Button>
                            <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
                        </Form>
                        <Nav className='justify-content-end flex-grow-1 me-auto pe-3'>
        					<Nav.Link href='/'>Home</Nav.Link>
        					<Nav.Link href='/gallery/artist'>Artist Corner</Nav.Link>
                            <Nav.Link href='/gallery/craft'>Crafts</Nav.Link>
        				</Nav>
                    </Offcanvas.Body>
    			</Navbar.Offcanvas>
        	</Navbar>
    	);
  	}
}

export default Navigation;