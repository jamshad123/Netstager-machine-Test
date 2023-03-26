import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

function NavbarMain() {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/"><b>Todo App</b></Navbar.Brand>
      <Nav className="ms-auto">
        <Nav.Link href="/"><b>Home</b></Nav.Link>
        <Nav.Link href="/addtodo"><b>Add Todo</b></Nav.Link>
        <Nav.Link href="/wishlist"><b>Wishlist</b></Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default NavbarMain