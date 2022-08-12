import React, { useState, useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import CollSenter from '../../components/collSenter/CollSenter';
import AutoVideo from '../../components/Vidoe/AutoVideo'
import RunText from '../../components/runText/RunText'
import Accordion from '../../components/accrdion/Accordion'
import imgg from '../../img/imgg.jpeg'
import AOS from 'aos'


function Chec_Up(props) {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    const data = [

        {
            title: "Оборудование, которое видит больше, чем врач",
            text: "Мы предлагаем нашим пациентам только самые современные в сфере стоматологии технологии и оборудование, которые исключают возможность врачебной ошибки."
        },
        {
            title: "Консилиум врачей по преображению каждой улыбки",
            text: "За эстетику и функциональность зубов лично отвечают все специалисты клиники, которые участвуют в создании улыбки."
        },
        {
            title: "Работаем даже с самыми сложными случаями",
            text: "Опыт наших врачей, современное оборудование и материалы позволяют создать восхитительную улыбку при любой клинической ситуации."
        },
        {
            title: "Высокое качество услуг и сервиса",
            text: "Американские технологии и передовые зарубежные методики, привезённые в Россию. Нашим врачам доверяют улыбки популярные люди и члены их семьей."
        },
        {
            title: "Пошаговый план лечения без скрытых расходов",
            text: "Полный чекап полости рта и составление цифрового плана лечения с предоставлением наглядных пошаговых действий и их стоимости."
        },

    ]

    const patients = [
        {
            img: "https://thumb.tildacdn.com/tild3534-3033-4632-b064-356232633331/-/cover/720x1100/center/center/-/format/webp/G_98zN2SdVE.jpg",
            title: "Гусейн Гасанов",
            known_for: "Популярный блогер",
        },
        {
            img: "https://thumb.tildacdn.com/tild3732-3830-4331-a262-666239323531/-/cover/720x1100/center/center/-/format/webp/sQWk_o_d9Lg.jpg",
            title: "Walter",
            known_for: "Совладелец Black Star ",
        },
        {
            img: "https://thumb.tildacdn.com/tild3761-3534-4239-b039-323636666563/-/cover/720x1100/center/center/-/format/webp/nhlrP-q6gb4.jpg",
            title: "Клаво Кока",
            known_for: "Black Star",
        }
    ]

    return (
        <div className="container">
            <Row>
                <p style={{ color: "#d3bb7e", fontSize: "50px", fontFamily: 'GraphikTT Arial sans-serif', marginTop: "50px" }}>
                    Полный чекап. Пошаговый план до улыбки мечты
                </p>
                <Col md={6} className={"m-5"}>
                    <Card.Text style={{ color: "white", fontSize: "20px" }}>
                        Комплексная проверка состояния полости рта. Разработка этапов лечения. Консилиум опытных врачей клиники для составления персонального плана по созданию идеально ровной и красивой улыбки.
                    </Card.Text>
                    <div className='div_a'>
                        <> Записаться на консултацию </>
                    </div>
                </Col>
                <Col className='mt-5'>
                    <AutoVideo name={data} />
                </Col>
            </Row>
            <RunText />
            <div className="container">
                <p style={{ color: "#d3bb7e", fontSize: "50px", fontFamily: 'GraphikTT Arial sans-serif', marginTop: "50px" }}>
                    Звезды и знаменитости, сделавшие тотальное преображение улыбки у доктора Эльмара
                </p>
                <Row className='mt-5'>

                    {patients.map(e => {
                        return (
                            <>
                                <Col md={4} xs={6}>
                                    <div>
                                        <Card.Img src={e.img}></Card.Img>
                                        <Card.Title class="mt-3 h4" style={{ color: "white", }}>{e.title}</Card.Title>
                                        <Card.Text style={{ color: "white", }}>{e.known_for}</Card.Text>
                                    </div>
                                </Col>
                            </>
                        )
                    })}

                </Row>
                <Row className="mt-5">
                    <Col xs={12} md={6} lg={6}>
                        <div className='justify-content-evenly text-center  ' >
                            <img class=" t013__img t-img" src={imgg} imgfield="img" data-tu-max-width="320" data-tu-max-height="320" data-tu-cover="c" alt="" role="presentation">
                            </img>
                            <Card.Title className='text_nav'>Доктор Айдаров</Card.Title>
                            <span className='text_nav' style={{ fontSize: '14px', lineHeight: '18px' }} data-customstyle="yes">Основатель и<br /> главный врач клиники, <br />стоматолог-ортопед</span>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                        <div className='justify-content-evenly text_nav m-3'>
                            <div >
                                Звезды и знаменитости, доверяющие нам свои улыбки, люди состоятельные. Но даже они ценят и считают свои деньги. А к нам в клинику приходят за высочайшим качеством в стоматологии по демократичной цене, без необходимости выезжать заграницу.
                            </div>
                            <div className='mt-5'>
                                Поэтому наши двери всегда открыты, и открыты для всех. А высочайшее качество и сервис мы гарантируем каждому, как популярным людям, так и людям не столь публичным.
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="container">
                <p style={{ color: "#d3bb7e", fontSize: "50px", fontFamily: 'GraphikTT Arial sans-serif', marginTop: "50px" }}>
                    Запишитесь на бесплатный чекап полости рта.<br /> Экономия 25 тысяч* современное.
                    <div className='div_a'>
                        <> Записаться на консултацию </>
                    </div>
                </p>
                <p style={{ color: "#d3bb7e", fontFamily: 'GraphikTT Arial sans-serif', }}>* эта сумма будет зачислена вам на баланс для последующего лечения</p>
            </div>
            <div className="container">
                <p style={{ color: "#d3bb7e", fontSize: "50px", fontFamily: 'GraphikTT Arial sans-serif', marginTop: "50px" }}>
                    В каких случаях требуется полный чекап полости рта?
                </p>
            </div>
            <Accordion name={data} />
            <div className="container">

            </div>
            <p style={{ color: "#d3bb7e", fontSize: "50px", fontFamily: 'GraphikTT Arial sans-serif', marginTop: "50px" }}>
                Получите пошаговый план к здоровой
                <br />и ровной улыбке на консультации
            </p>
            <Row>
                <Col className='mt-5'>
                    <Card.Img src='https://thumb.tildacdn.com/tild6634-3836-4936-a564-373436383964/-/format/webp/IMG_1360.JPG'>
                    </Card.Img>
                </Col>
                <Col md={6} className={"m-5"}>
                    <Card.Text style={{ color: "#d3bb7e", fontSize: "40px", fontFamily: 'GraphikTT Arial sans-serif', marginTop: "50px" }}>
                        Чекап включает в себя:
                    </Card.Text>
                    <Card.Text style={{ color: "white", fontSize: "40px", marginTop: "40px" }}>
                        осмотр пациента
                    </Card.Text>
                    <Card.Text style={{ color: "white", fontSize: "40px", marginTop: "40px" }}>
                        диагностику (снимки КТ, ОПТГ)
                    </Card.Text>
                    <Card.Text style={{ color: "white", fontSize: "40px", marginTop: "40px" }}>
                        консультацию врача
                    </Card.Text>
                    <Card.Text style={{ color: "white", fontSize: "40px", marginTop: "40px" }}>
                        консультацию врача
                    </Card.Text>
                    <Card.Text style={{ color: "white", fontSize: "40px", marginTop: "40px" }}>
                        создание цифровых слепков нижней и верхней челюстей
                    </Card.Text>
                    <div className='div_a'>
                        
                        <p> Записаться на консултацию </p>
                    </div>

                </Col>

            </Row>
        </div>
    );
}

export default Chec_Up;