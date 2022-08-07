import React from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';

function StuffContainer(props) {

    const doctors = [
        {
            img: "https://thumb.tildacdn.com/tild6632-3766-4534-a530-643333336637/-/cover/520x800/center/center/-/format/webp/IMG_9457_1.JPG",
            title: "Гасанова Шахризат Магомедовна",
            position: "Стамотолог-ортодонт",
            experience: "4",
        },
        {
            img: "https://thumb.tildacdn.com/tild3736-3436-4734-b538-616235646636/-/cover/520x800/center/center/-/format/webp/IMG_9509_1.JPG",
            title: "Базарбаев Фарух Фархадович",
            position: "Стамотолог-ортодонт",
            experience: "5",
        },
        {
            img: "https://thumb.tildacdn.com/tild3331-3539-4934-b536-666565376664/-/cover/520x800/center/center/-/format/webp/IMG_9425_1.JPG",
            title: "Матняк Дмитрий Николаевич",
            position: "Стамотолог-ортодонт",
            experience: "7",
        },
        {
            img: "https://thumb.tildacdn.com/tild6661-6531-4662-b632-386161616536/-/cover/520x800/center/center/-/format/webp/IMG_9426_1.JPG",
            title: "Тедеева Мария Маратовна",
            position: "Стамотолог-ортодонт",
            experience: "8",
        },
        {
            img: "https://thumb.tildacdn.com/tild3331-3539-4934-b536-666565376664/-/cover/520x800/center/center/-/format/webp/IMG_9425_1.JPG",
            title: "Матняк Дмитрий Николаевич",
            position: "Стамотолог-ортодонт",
            experience: "9",
        },
    ]
    return (
        <>


            <Container>
                <p style={{ color: "#d3bb7e", fontSize: "50px", fontFamily: 'GraphikTT Arial sans-serif', marginTop: "50px" }}>
                    Врачи, которым доверяют
                </p>
                <Row>
                    <Col md={6} className={"m-5"}>
                        <Card.Text style={{ color: "white", fontSize: "20px" }}>
                            Команда клиники «Лаборатория улыбок Dr. Elmar» специализируется на тотальном преображении улыбки и оказывает все виды стоматологических услуг
                        </Card.Text>
                        <div className='div_a'>
                            <a href=''>Записаться на консултацию </a>
                        </div>
                    </Col>
                    <Col className='mt-5'>
                        <Card.Img src='https://static.tildacdn.com/tild3331-3833-4964-b366-656665383262/photo.svg'>

                        </Card.Img>
                    </Col>
                    <Col md={10} className="m-5">
                        <h1 style={{ color: "#d3bb7e" }}>Наша команда</h1>
                    </Col>
                    <Col md={6} >

                        <Card.Img src='https://thumb.tildacdn.com/tild3466-6363-4434-b166-616561306137/-/format/webp/__1.png'>

                        </Card.Img>
                    </Col>
                    <Col md={6} className='mt-5'>
                        <h4 style={{ color: "white" }}>
                            Эльмар Бабаев — основатель и главный врач клиники «Лаборатория улыбок Dr. Elmar». Кандидат медицинских наук, стоматолог-ортопед.   </h4>
                        <p className='textdoctor'>
                            Благодаря высокому качеству оказываемых услуг, к доктору Эльмару приезжают пациенты из разных точек мира.
                            Трудолюбие, уважительное отношение к каждому пациенту и любовь к красоте делают доктора Эльмара настоящим профессионалом в сфере стоматологии.
                        </p>

                        <p className='textdoctor'>
                            Улыбки, созданные доктором Эльмаром, отличаются естественностью, высоким уровнем эстетики, а его обаяние и душевная теплота создают в клинике приятную, дружескую атмосферу.

                        </p>
                        <p className='textdoctor'>
                            Звезды шоу-бизнеса, спорта, популярные блогеры доверили свои улыбки именно доктору Эльмару и стали обладателями ослепительных улыбок.
                        </p >
                        <div style={{ display: "flex", justifyContent: "between", color: "black" }}>
                            <div className='div_a'>
                                Записаться на консултацию
                            </div>
                            <div className='div_b'>
                                Образование
                            </div>
                            <div className='div_b'>
                                Социальные сети
                            </div>
                        </div>

                    </Col>
                    <div className='row'>
                        <Row>
                            <Col >

                                <div className='container d-flex '>
                                    {doctors.map(e => {
                                        return (
                                            <>
                                                <Row>
                                                    <Col md={10} >
                                                        <Card.Img src={e.img}></Card.Img>
                                                        <Card.Text style={{ color: "white", }}>
                                                            {e.title}
                                                        </Card.Text>

                                                        <Card.Text style={{ color: "white", }}>{e.position}</Card.Text>
                                                        <Card.Text style={{ color: "white", }}>{e.experience}</Card.Text>
                                                        </Col> 
                                                </Row>
                                                <br/>
                                            </>
                                        )
                                    })}
                                </div>
                            </Col>


                        </Row>
                    </div>

                </Row>
            </Container>
        </>
    );
}

export default StuffContainer;