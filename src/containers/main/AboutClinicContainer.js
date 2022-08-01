import React from 'react';
import { Row, Card, Col, Button } from 'react-bootstrap';
import Accordion from '../../components/accrdion/Accordion';
import RunText from '../../components/runText/RunText';
import AutoVideo from '../../components/Vidoe/AutoVideo';

function AboutClinicContainer(props) {
    return (
        <div className='container aboutClinic'>
            <div className='container  '>
                <>
                    <span className='h1'>С нами вы<br /> улыбаетесь чаще</span>
                    <Row>
                        <Col xs={12} md={6} >
                            <p className='text_nav h5 mt-3'> Команда клиники «Лаборатория улыбок Dr. Elmar»<br />
                                поможет обрести улыбку мечты. Ответственность. <br />
                                Профессионализм. Забота о каждом пациенте.</p>

                            <div className='div_a mt-3'>
                                <a href=''>Запись на консультацию</a>
                            </div>
                        </Col>
{/* 
                        <Col xs={12} md={6}>
                            <AutoVideo className="mt-4" />
                        </Col> */}
                    </Row>
                </>
            </div>
            <RunText />

            <div className='text-center'>
                <h1>5 причин доверить нам улыбку</h1>
            </div>
            {/* <Accordion /> */}
            <div className='container mt-3'>
                <Row>
                    <Col xs={12} md={4} >
                        <img className='w-100 mb-2' src='https://thumb.tildacdn.com/tild6564-6235-4330-b565-353437343734/-/format/webp/IMG_1364_1.jpeg' alt='' />
                    </Col>
                    <Col xs={12} md={4} >
                        <img className='w-100 mb-2' src='https://thumb.tildacdn.com/tild3939-3139-4163-b233-373731323231/-/format/webp/IMG_1368.jpeg' alt='' /></Col>
                    <Col xs={12} md={4}>
                        <img className='w-100 mb-2' src='https://thumb.tildacdn.com/tild3038-6366-4265-a133-616538313461/-/format/webp/IMG_1374.jpeg' alt='' />
                    </Col>
                </Row>
            </div>
            <div className=' container mt-5'>
                <Row>
                    <Col xs={12} md={6} lg={6}>
                        <div className='justify-content-evenly text-center' >
                            <img class=" t013__img t-img" src="https://static.tildacdn.com/tild3930-6162-4164-b738-303531323731/photo_2022-06-30_133.svg" imgfield="img" data-tu-max-width="320" data-tu-max-height="320" data-tu-cover="c" alt="" role="presentation">
                            </img>
                            <Card.Title className='text_nav'>Доктор Эльмар</Card.Title>
                            <span className='text_nav' style={{ fontSize: '14px', lineHeight: '18px' }} data-customstyle="yes">Основатель и<br /> главный врач клиники, <br />стоматолог-ортопед</span>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                        <div className='justify-content-evenly text_nav m-3'>
                            <div >
                                Я хотел, чтобы клиника не напоминала больницу. Поэтому мы создали пространство, которое настраивает<br />
                                на правильную волну совместного творчества. Если люди приходят лечить зубы как на каторгу, то сложно <br />
                                ожидать от них высокогоуровня мотивации. Все мы немного нервничаем, если вокруг больничные<br /> белые стены. А у нас даже зона
                                ресепшена больше похожа на лобби-бар в отеле, где во время ожидания можно <br />послушать музыку, почитать
                                что-нибудь интересное или выпить чашечку кофе.
                            </div>
                            <div className='mt-5'>
                                Все пациенты — наши друзья! Те, кто приходит сюда впервые, знакомятся с нами и, пройдя вместе путь <br />от стоматологического кресла до красивой улыбки и здоровых зубов, остаются с нашей командой в прекрасных отношениях.
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className='container mt-5'>
                <Row >
                    <Col xs={12} md={6} lg={6}>
                        <div className='d-block'><span className='display-3 h1'>Давайте<br />познакомимся <br />поближе</span>
                            <Card className='bg-dark'>
                                <Card.Body>
                                    <Card.Text className='text_nav '>
                                        Стоматологическая клиника «Лаборатория улыбок»<br />
                                        преображает улыбки пациентов с 2015 года. Её основатель <br />
                                        Эльмар Бабаев прошёл путь от работы в государственной<br />
                                        поликлинике до открытия собственной клиники в центре<br />
                                        Москвы и на своём опыте знает, что главными приоритетами<br />
                                        в работе врача являются забота о пациентах и качество услуг.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                        <img className='w-100' src="https://thumb.tildacdn.com/tild3734-6164-4733-a634-663535363130/-/cover/1000x1200/center/center/-/format/webp/IMG_0723.JPG" />
                        <div className='d-block'><h2 className='display-5 mt-5 text-white'>Со дня основания в клинике доктора Эльмара созданы сотни красивых улыбок.</h2>

                            <Card.Text className='text_nav'>
                                Зачастую пациенты становятся нашими друзьями и приводят к нам членов семьи, а также рекомендуют клинику знакомым.
                            </Card.Text>
                            <Card.Text className='text_nav mt-5'>Каждая деталь в клинике, от оборудования до интерьера, служит для того, чтобы вы почувствовали себя комфортно и свободно. Мы создали расслабляющую атмосферу, которую вы почувствуете уже в зоне ресепшена.
                            </Card.Text>
                        </div>
                    </Col>
                </Row>
            </div>
            <h1 className='text_nav text-center mt-5'>Здесь вы можете:</h1>
            <div className='container row m-3 p-2'>
                <Col xs={10} md={6} lg={5}>
                    <h3 class="tn-atom text-center  p-2 m-2">почитать журналы</h3>
                </Col>
                <Col xs={10} md={6} lg={5}>
                    <h3 class="tn-atom text-center p-2 m-2">выпить чашечку кофе</h3>
                </Col>
                <Col xs={10} md={6} lg={5}>
                    <h3 class="tn-atom text-center p-2 m-2">послушать музыку</h3>
                </Col> <Col xs={10} md={6} lg={5}>
                    <h3 class="tn-atom text-center p-2 m-2">пообщаться с сотрудниками</h3>
                </Col> <Col xs={10} md={6} lg={5}>
                    <h3 class="tn-atom text-center p-2 m-2">расслабиться в массажном кресле</h3>
                </Col>
            </div>
        </div>
    );
}

export default AboutClinicContainer;