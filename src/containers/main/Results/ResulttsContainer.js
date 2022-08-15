import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AutoVideo from "../../../components/Vidoe/AutoVideo"

function ResulttsContainer(props) {
    return (
        <div className='container '>
            <div className='container mt-5 '>
                <>
                    <span className='h1 mt-3'>Страница находится<br />в разработке</span>
                    <Row>
                        <Col xs={12} md={6} >
                            <div className=' mt-4' >
                                <Link to={'/'} className="div_a">
                                    Перейти на главную

                                </Link>
                            </div>
                        </Col>

                        <Col xs={12} md={6}>
                            <AutoVideo />
                        </Col>
                    </Row>
                </>
            </div>
        </div>
    );
}

export default ResulttsContainer;