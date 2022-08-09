
import React from 'react';
import './Appcontainer.scss';
import { Navbar, Container, Nav, NavDropdown, Col, Row } from 'react-bootstrap';

function AppContainers(props) {
  return (
    <div className="тзь ыефке">
      <Navbar bg="dark" variant="dark" style={{ backgroundColor: "#060608" }} expand="lg" fixed='top'  >
        <Container >
          <Navbar.Brand > <img src="https://static.tildacdn.com/tild6462-6533-4166-a665-376166353633/logo.svg" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="/aboutClinic" className='nav_text'>О Клинике</Nav.Link>
              <NavDropdown title="Услуги" id="basic-nav-dropdown" className='nav_text'>
                <NavDropdown.Item href="/Chec_Up">Чекап</NavDropdown.Item>
                <NavDropdown.Item href="/Vinery">Винеры</NavDropdown.Item>
                {/* <NavDropdown.Item href="/Elainery">Элайнеры</NavDropdown.Item> */}
                <NavDropdown.Item href="/Brekety">Брекеты</NavDropdown.Item>
                {/* <NavDropdown.Item href="/Отбеливание">Отбеливание</NavDropdown.Item>
                <NavDropdown.Item href="/Iplant">Имплантация</NavDropdown.Item>
                <NavDropdown.Item href="/Protez">протезирования</NavDropdown.Item>
                <NavDropdown.Item href="/Lechenie">Лечениие</NavDropdown.Item> */}

              </NavDropdown>
              <Nav.Link href="price" className='nav_text'>Прайс</Nav.Link>
              <Nav.Link href="stuff" className='nav_text'>Врачи</Nav.Link>

              <Nav.Link href="results" className='nav_text'>Результаты</Nav.Link>
              <Nav.Link href="contact" className='nav_text'> Контакты </Nav.Link>

            </Nav>
            <div style={{ color: "white", backgroundColor: "#c2b285", width: "270px", height: "80px", fontSize: "25px", display: "flex", justifyContent: "center", alignItems: "center" }}>
              +996(776)000 000</div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div style={{ background: "#c2b285", height: "30px", marginTop: 100, border: "1px solid #c2b285", width: "100%" }} >
        <Row>
          <Col style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>

            <p className="textdiv"> Хиты услуг : </p>
            <p className="textdiv">Голливудская улыбка</p>
            <p className="textdiv">Выравнивание зубов</p>
            <p className="textdiv">Отбеливание зубов</p>

          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AppContainers;