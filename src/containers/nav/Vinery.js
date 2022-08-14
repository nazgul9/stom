import React, { useState, useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import RunText from '../../components/runText/RunText';
import AOS from 'aos'
import CollSenter from '../../components/collSenter/CollSenter';
import AutoVideo from '../../components/Vidoe/AutoVideo';
import StuffContainer from '../../containers/main/StuffContainer'
import imgg from '../../img/imgg.jpeg'

function Vinery(props) {
    const [openComponent, setOpenComponent] = useState(false)
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);


    return (
        <div className="container">
            <Row>
                <p style={{ color: "#d3bb7e", fontSize: "50px", fontFamily: 'GraphikTT Arial sans-serif', marginTop: "50px" }}>
                    Получите улыбку как у звёзд благодаря сверхтонким винирам от доктора Эльмара
                </p>
                <Col md={6} className={"m-5"}>
                    <Card.Text style={{ color: "white", fontSize: "20px" }}>
                        С помощью передовых методик создаём белоснежную улыбку, которой хочется делиться с окружающими
                    </Card.Text>
                    <div className='div_a'>
                        {
                            openComponent === true ? <CollSenter /> : ''
                        }
                        <p onClick={() => setOpenComponent(true)}> Записаться на консултацию </p>
                    </div>
                </Col>
                <Col className='mt-5'>
                    <AutoVideo />
                </Col>
            </Row>
            <RunText />
            <div className="container">

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
            <Row>
                <Col className='mt-5'>
                    <Card.Img className="h-100 w-100" src='https://thumb.tildacdn.com/tild6663-6334-4062-b764-356234363039/-/format/webp/diagnostika-min.jpg'>
                    </Card.Img>
                </Col>
                <Col md={6} className={"m-5"}>
                    <Card.Text style={{ color: "#d3bb7e", fontSize: "35px", fontFamily: 'GraphikTT Arial sans-serif', }}>
                        Любое правильное ортодонтическое лечение (исправление прикуса, имплантация зубов или виниры) начинается с полной диагностики текущего состояния пациента, — чекапа.
                    </Card.Text>
                    <Card.Text style={{ color: "white", fontFamily: 'GraphikTT Arial sans-serif', marginTop: "5px" }}>
                        В нашей клинике чекап не растягивается на несколько приемов, его можно пройти всего за 40-60 минут
                    </Card.Text>
                </Col>
            </Row>
            <StuffContainer />
            <div className="container">
                <p style={{ color: "#d3bb7e", fontSize: "50px", fontFamily: 'GraphikTT Arial sans-serif', }}>
                    Запишитесь на бесплатный чекап полости рта.<br /> Экономия 25 тысяч* руб.
                </p>
                <p style={{ color: "#d3bb7e", fontFamily: 'GraphikTT Arial sans-serif', }}>* эта сумма будет зачислена вам на баланс для последующего лечения</p>
                <div className='div_a'>
                    {
                        openComponent === true ? <CollSenter /> : ''
                    }
                    <p onClick={() => setOpenComponent(true)}> Записаться на консултацию </p>
                </div>
            </div>
            <div className="container">
                <p style={{ color: "white", fontSize: "50px", fontFamily: 'GraphikTT Arial sans-serif', }}>
                    Получите пошаговый план к здоровой и красивой улыбке на консультации
                </p>
                <Row>
               
                <Col md={6} className={"m-5"}>
                    <Card.Text style={{ color: "#d3bb7e", fontSize: "20px", fontFamily: 'GraphikTT Arial sans-serif', }}>
                    В стоматологической клинике «Лаборатории улыбок Dr. Elmar» проводится первичная консультация для оценки состояния зубов и дёсен с помощью сверхточного рентгеновского аппарата Sirona ORTHOPHOS XG, который обеспечивает высокое качество снимков при минимальной дозе облучения.
                    </Card.Text>
                    <Card.Text style={{ color: "white", fontSize: "20px", fontFamily: 'GraphikTT Arial sans-serif', marginTop: "5px" }}>
                    С его помощью изготавливаются 2D-, 3D- и ОПТГ- (панорамные) снимки, наличие которых обязательно для постановки правильного диагноза и выбора метода лечения.
                    </Card.Text>
                    <div className='div_a'>
                        {
                            openComponent === true ? <CollSenter /> : ''
                        }
                        <p onClick={() => setOpenComponent(true)}> Записаться на консултацию </p>
                    </div>
                </Col> 
                <Col className='mt-5'>
                    <Card.Img className=" w-75" src='https://static.tildacdn.com/tild3765-3739-4430-a535-323165376139/IMG_3201.JPG'>
                    </Card.Img>

                </Col>
            </Row>
            </div>
            {/* <div class="tn-atom t-bgimg loaded" data-original="https://static.tildacdn.com/tild3765-3739-4430-a535-323165376139/IMG_3201.JPG" style="background-image: url(&quot;https://thumb.tildacdn.com/tild3765-3739-4430-a535-323165376139/-/cover/894x996/center/center/-/format/webp/IMG_3201.JPG&quot;);"> </div> */}
        </div>
    );
}

export default Vinery;