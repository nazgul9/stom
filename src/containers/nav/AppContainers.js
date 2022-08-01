import React from 'react';
import { Navbar,Container,Nav ,NavDropdown} from 'react-bootstrap';

function AppContainers(props) {
    return (
        <div>
             <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="">Dr Aidarov</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/aboutClinic">О Клинике</Nav.Link>
            <NavDropdown title="Услуги" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="price">Прайс</Nav.Link>
            <Nav.Link href="stuff">Врачи</Nav.Link>
            <Nav.Link href="results">Результаты</Nav.Link>
            <Nav.Link href="contact">Контакты</Nav.Link>

           
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        </div>
    );
}

export default AppContainers;