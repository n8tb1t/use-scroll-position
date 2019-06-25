import styled from 'styled-components'

const NavbarBase = styled.nav`
  color: white;
  background: #e6513d;

  a {
    color: white;
    text-decoration: none;
  }
  line-height: 1;

  height: 40px;
  position: fixed;
  right: 0;
  left: 0;
  z-index: 1030;

  padding-left: 10px;
  padding-right: 10px;
  display: flex;

  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-evenly;
`

export const Navbar = styled(NavbarBase)`
  top: 0;

  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.65);

  visibility: ${props => (props.show ? 'visible' : 'hidden')};
  //transition: all 200ms ${props => (props.show ? 'ease-in' : 'ease-out')};
  transition: all 200ms ease;
  transform: ${props => (props.show ? 'none' : 'translate(0, -100%)')};
`
export const Footer = styled(NavbarBase)`
  bottom: 0;
`

export const Content = styled.main`
  margin-top: 45px;
`
