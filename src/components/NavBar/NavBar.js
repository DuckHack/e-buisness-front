import React, {Component} from 'react';
import './NavBar.css'
import {Navbar, Nav, NavItem, PageHeader} from 'react-bootstrap'
import Logo from './1200px-Ray-Ban_logo.svg.png'


class NavBar extends Component{
    render(){
        return(
            <div>
                <PageHeader bsClass={'header'}>
                        NEVER HIDE <small>RayBan</small>
                </PageHeader>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <div className={'navLogo'}>
                                <a href={'/'}>
                                    <img src={Logo} />
                                </a>
                            </div>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={1} href='/products'>
                            Products
                        </NavItem>
                        <NavItem eventKey={2} href='/userpage'>
                            User page
                        </NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={3} href='/authenticate'>
                            Auth
                        </NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={4} href='/adminpage'>
                            Admin page
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}


export default NavBar;