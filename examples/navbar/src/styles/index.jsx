import styled from 'styled-components'

const NavbarBase = styled.nav`
  background: #e6513d;
  color: white;

  a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    padding-left: 15px;
  }

  line-height: 1;
  height: 40px;

  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;

  display: flex;

  flex-wrap: nowrap;
  align-items: center;
  justify-content: start;
`

export const Navbar = styled(NavbarBase)`
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.65);

  visibility: ${props => (props.show ? 'visible' : 'hidden')};
  transition: all 200ms ${props => (props.show ? 'ease-in' : 'ease-out')};
  transform: ${props => (props.show ? 'none' : 'translate(0, -100%)')};
`

export const Sidebar = styled(Navbar)`
  background: mediumpurple;
  a {
    padding-top: 15px;
    padding-left: 0;
  }

  writing-mode: vertical-lr;

  width: 40px;
  height: 100%;

  transform: ${props => (props.show ? 'none' : 'translateX(-100%)')};
`

export const Footer = styled(NavbarBase)`
  top: unset;
  bottom: 0;
  justify-content: center;
`

export const Content = styled.main`
  margin-top: ${props => (props.mt ? props.mt : 0)}px;
`

export const Wrapper = styled.div``

export const Position = styled.div`
  background: #e6513d;
  color: white;
  position: absolute;
  padding: 15px;
  top: 150px;
  left: 10px;

  span {
    display: block;
    color: black;
    font-weight: bold;
  }
`

export const RedBox = styled.div`
  background: red;
  color: white;
  position: absolute;
  padding: 15px;
  top: 300px;
  left: 10px;
`
