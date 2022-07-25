import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import CardMenu from '../cardMenu/CardMenu';
function _Navbar(props) {
  return (
    <>
    <div className={"d-flex container "}>
      <Navbar bg="" variant="">
        <>
          <div className='container'>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src="https://stomcity.ru/templates/smolenskoy/images/logo.png"
                className="d-inline-block align-top"
              />{' '}
            </Navbar.Brand>
          </div>
          <div className='container'>
            <Navbar.Brand href="#home">
              <h1>СтомСити</h1>
              <p>Стоматология на Братиславской</p>
            </Navbar.Brand>
          </div>
          <div className='container'>
            <Navbar.Brand href="#home">
              <p>
                +7 (495) 349-00-70
              </p>
              <p>
                +7 (495) 348-02-08
              </p>
              {' '}
            </Navbar.Brand>
          </div>
         
          <div className='container'>
            <Navbar.Brand href="#home">
              <p>
                г. Москва
              </p>
              <p>
                г. Москва
                ул. Верхние поля, д.4
              </p>
              {' '}
            </Navbar.Brand>
          </div>

          <div className='container'>
            <Navbar.Brand href="#home">
              <Button
              className='bg-light text-dark'
                style={{
                borderRadius: '50px',
              }}>Заказать консультацию</Button>
              {' '}
            </Navbar.Brand>
          </div>
        </>
      </Navbar>
     
    </div>
    <div>
      {/* <CardMenu/> */}
      <CardMenu/>
    </div>
 
    </>
  );
}

export default _Navbar;