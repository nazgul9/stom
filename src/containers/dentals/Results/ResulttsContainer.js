import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AutoVideo from '../../../components/Vidoe/AutoVideo';

function ResulttsContainer(props) {
    return (
        <div className='container 'style={{ marginTop: "100px" }}>
            <div className='container mt-5 '>
                <>
                    <span className='h1 mt-3'>Страница находится<br />в разработке</span>
                    <Row>
                        
                            <Col  md={6} xs={10}>
                                <Link to={'/'} className="div_a">
                                    Перейти на главную
                                </Link>
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