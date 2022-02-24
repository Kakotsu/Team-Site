import Link from 'next/link';
import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from 'mdbreact';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
        <>
          <MDBNavbar color='light' light expand='md'>
            <MDBNavbarBrand>
              <strong className='black-text'>Kakotsu</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBCollapse id='navbarCollapse3' isOpen={this.state.isOpen} navbar>
              <MDBNavbarNav left>
                <MDBNavItem>
                  <Link href='/'>
                    <a className='nav-link'>Home</a>
                  </Link>
                </MDBNavItem>
                <MDBNavItem>
                  <Link href='/team'>
                    <a className='nav-link'>Team</a>
                  </Link>
                </MDBNavItem>
                <MDBNavItem>
                  <Link href='/projects'>
                    <a className='nav-link'>Projects</a>
                  </Link>
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav right>
                <MDBNavItem>
                  <Link href='https://discord.gg/uMat5FdUTV'>
                    <a><img src='/social/discord.png' height='30px'/></a>
                  </Link>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
        </>
    );
  }
}

export default Navbar;
