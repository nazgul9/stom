import React from 'react'
import './Appcontainer.scss'
import {Navbar, Container, Nav, NavDropdown, Col, Row} from 'react-bootstrap'
import image from '../Image/doctor.jpg'

function AppContainers(props) {
  return (
    <Container>
      <Navbar style={{
        backgroundColor: '#060608',
      }} bg="dark" variant="dark" expand="lg" fixed="top">
        <Container className={'d-flex justify-content-between align-items-center w-100'}>
          <Navbar.Brand href="/">
            <img
              style={{width: '70px', borderRadius: '50%'}} alt={''}
              src={image}/>
            {' '}DR.Aidarov
          </Navbar.Brand>
          <Navbar.Collapse style={{flexGrow: 0}}>
            <Nav bg="dark">
              <Nav.Link href="/aboutClinic" className="nav_text bg-dark" bg="dark"
              >О Клинике</Nav.Link>
              <NavDropdown bg="dark" title="Услуги" id="basic-nav-dropdown" className="nav_text">
                <NavDropdown.Item href="/Chec_Up">Чекап</NavDropdown.Item>
                <NavDropdown.Item href="/Vinery">Винеры</NavDropdown.Item>
                {/* <NavDropdown.Item href="/Elainery">Элайнеры</NavDropdown.Item> */}
                <NavDropdown.Item href="/Brekety">Брекеты</NavDropdown.Item>
                <NavDropdown.Item href="/whiting">Отбеливание</NavDropdown.Item>
                <NavDropdown.Item href="/Iplant">Имплантация</NavDropdown.Item>
                <NavDropdown.Item href="/Protez">Протезирования</NavDropdown.Item>
                <NavDropdown.Item href="/Lechenie">Лечениие</NavDropdown.Item>

              </NavDropdown>
              <Nav.Link href="price" className="nav_text">Прайс</Nav.Link>
              <Nav.Link href="stuff" className="nav_text">Врачи</Nav.Link>

              <Nav.Link href="results" className="nav_text">Результаты</Nav.Link>
              <Nav.Link href="contact" className="nav_text">Контакты</Nav.Link>

            </Nav>
          </Navbar.Collapse>
          <a href={'tel:+996776000000'} className={'p-2 rounded'} style={{
            color: 'white',
            backgroundColor: '#c2b285',
            width: '270px',
            fontSize: '25px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            +996 (776) 000 000
          </a>
        </Container>
      </Navbar>
      <div style={{background: '#c2b285', height: '30px', marginTop: 100, border: '1px solid #c2b285', width: '100%'}}>
        <Row>
          <Col style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>

            <p className="textdiv"> Хиты услуг : </p>
            <p className="textdiv">Голливудская улыбка</p>
            <p className="textdiv">Выравнивание зубов</p>
            <p className="textdiv">Отбеливание зубов</p>

          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default AppContainers
