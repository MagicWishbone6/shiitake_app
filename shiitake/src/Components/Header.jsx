import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
		<Navbar 
			collapseOnSelect 
			expand="lg" 
			bg='light' 
			variant='light'>
			<Navbar.Brand 
				href='/' 
				id='navTitle'>
				shiitake!
			</Navbar.Brand>
			<Nav 
				fill 
				className='mr-auto' 
				variant='pills'
				defaultActiveKey='/home'>
				<Nav.Link 
					id='homeNav' 
					href='/home'>
					Home
				</Nav.Link>
			</Nav>
		</Navbar>
    );
}

export default Header;