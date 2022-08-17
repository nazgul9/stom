import React, {useState} from 'react'
import {Col, Container, Row, Card, Carousel} from 'react-bootstrap'
import RunText from '../../components/runText/RunText'
import aidarov from '../Image/Aidarov.png'
import aidarov2 from '../Image/aidarov2.jpg'
import aidarov4 from '../Image/aidarov4.jpg'
import patient1 from '../Image/patient1.jpg'
import patient2 from '../Image/patient2.jpg'
import patient5 from '../Image/patient5.jpg'
import komanda from '../Image/komanda.jpg'
import strelka from '../Image/strelka.png'
import kachestvo from '../Image/kachestvo.jpg'
import lechenie from '../Image/lechenie.png'
import viniry from '../Image/viniry.jpg'
import plomba from '../Image/plomba.jpg'
import elainery from '../Image/elainery.jpg'
import result11 from '../Image/result11.jpg'
import result12 from '../Image/result12.jpg'
import result221 from '../Image/result221.jpg'
import result22 from '../Image/result22.jpg'
import result33 from '../Image/result33.jpg'
import result31 from '../Image/result31.jpg'
import konsultasya from '../Image/konsultasya.png'
import Accordion from 'react-bootstrap/Accordion'
import Button1 from '../../Button1'

function MainContainers({setShow}) {

  const feedback = [
    {
      img: `${patient1}`,
      text: ' «Я ходил в разные клиники, и мне всё время всё не нравилось. Всегда вырывали зубы, было больно, я потом ходил мучился.  И я как-то попал в клинику доктора Эльмара, и тут всё было как по волшебству.  Пришёл, у меня была дикая зубная боль, сажусь к доктору на кресло, проходит 5 минут, и я пишу доктору (говорить-то я не могу):  „Можно уже говорить?“. А он такой: „А я уже всё тебе сделал“. Невероятно просто! Здесь происходит реальная магия, прямо так, как делаю я.  Приходите лечиться к доктору Эльмару!» «Я ходил в разные клиники, и мне всё время всё не нравилось.Всегда вырывали зубы, было больно, я потом ходил мучился. И я как-то попал в клинику доктора Эльмара, и тут всё было как по волшебству.Пришёл, у меня была дикая зубная боль, сажусь к доктору на кресло, проходит 5 минут, и я пишу доктору (говорить-то я не могу): „Можно уже говорить?“. А он такой: „А я уже всё тебе сделал“. Невероятно просто! Здесь происходит реальная магия, прямо так, как делаю я. Приходите лечиться к доктору Эльмару!»«Я ходил в разные клиники, и мне всё время всё не нравилось.Всегда вырывали зубы, было больно, я потом ходил мучился. И я как-то попал в клинику доктора Эльмара, и тут всё было как по волшебству.Пришёл, у меня была дикая зубная боль, сажусь к доктору на кресло, проходит 5 минут, и я пишу доктору (говорить-то я не могу): „Можно уже говорить?“. А он такой: „А я уже всё тебе сделал“. Невероятно просто! Здесь происходит реальная магия, прямо так, как делаю я. Приходите лечиться к доктору Эльмару!»',
    },
    {
      img: `${patient2}`,
      text: '«Я ходил в разные клиники, и мне всё время всё не нравилось.Всегда вырывали зубы, было больно, я потом ходил мучился.  И я как-то попал в клинику доктора Эльмара, и тут всё было как по волшебству.Пришёл, у меня была дикая зубная боль, сажусь к доктору на кресло, проходит 5 минут, и я пишу доктору (говорить-то я не могу):  „Можно уже говорить?“. А он такой: „А я уже всё тебе сделал“. Невероятно просто! Здесь происходит реальная магия, прямо так, как делаю я.  Приходите лечиться к доктору Эльмару!» «Я ходил в разные клиники, и мне всё время всё не нравилось.Всегда вырывали зубы, было больно, я потом ходил мучился. И я как-то попал в клинику доктора Эльмара, и тут всё было как по волшебству.Пришёл, у меня была дикая зубная боль, сажусь к доктору на кресло, проходит 5 минут, и я пишу доктору (говорить-то я не могу): „Можно уже говорить?“. А он такой: „А я уже всё тебе сделал“. Невероятно просто! Здесь происходит реальная магия, прямо так, как делаю я. Приходите лечиться к доктору Эльмару!»«Я ходил в разные клиники, и мне всё время всё не нравилось.Всегда вырывали зубы, было больно, я потом ходил мучился. И я как-то попал в клинику доктора Эльмара, и тут всё было как по волшебству.Пришёл, у меня была дикая зубная боль, сажусь к доктору на кресло, проходит 5 минут, и я пишу доктору (говорить-то я не могу): „Можно уже говорить?“. А он такой: „А я уже всё тебе сделал“. Невероятно просто! Здесь происходит реальная магия, прямо так, как делаю я. Приходите лечиться к доктору Эльмару!»',
    },
    {
      img: `${patient5}`,
      text: '«Я ходил в разные клиники, и мне всё время всё не нравилось.Всегда вырывали зубы, было больно, я потом ходил мучился.  И я как-то попал в клинику доктора Эльмара, и тут всё было как по волшебству.Пришёл, у меня была дикая зубная боль, сажусь к доктору на кресло, проходит 5 минут, и я пишу доктору (говорить-то я не могу):  „Можно уже говорить?“. А он такой: „А я уже всё тебе сделал“. Невероятно просто! Здесь происходит реальная магия, прямо так, как делаю я.  Приходите лечиться к доктору Эльмару!» «Я ходил в разные клиники, и мне всё время всё не нравилось.Всегда вырывали зубы, было больно, я потом ходил мучился. И я как-то попал в клинику доктора Эльмара, и тут всё было как по волшебству.Пришёл, у меня была дикая зубная боль, сажусь к доктору на кресло, проходит 5 минут, и я пишу доктору (говорить-то я не могу): „Можно уже говорить?“. А он такой: „А я уже всё тебе сделал“. Невероятно просто! Здесь происходит реальная магия, прямо так, как делаю я. Приходите лечиться к доктору Эльмару!»«Я ходил в разные клиники, и мне всё время всё не нравилось.Всегда вырывали зубы, было больно, я потом ходил мучился. И я как-то попал в клинику доктора Эльмара, и тут всё было как по волшебству.Пришёл, у меня была дикая зубная боль, сажусь к доктору на кресло, проходит 5 минут, и я пишу доктору (говорить-то я не могу): „Можно уже говорить?“. А он такой: „А я уже всё тебе сделал“. Невероятно просто! Здесь происходит реальная магия, прямо так, как делаю я. Приходите лечиться к доктору Эльмару!»',
    },
    {
      img: `${patient1}`,
      text: '«Я ходил в разные клиники, и мне всё время всё не нравилось.Всегда вырывали зубы, было больно, я потом ходил мучился.  И я как-то попал в клинику доктора Эльмара, и тут всё было как по волшебству.Пришёл, у меня была дикая зубная боль, сажусь к доктору на кресло, проходит 5 минут, и я пишу доктору (говорить-то я не могу):  „Можно уже говорить?“. А он такой: „А я уже всё тебе сделал“. Невероятно просто! Здесь происходит реальная магия, прямо так, как делаю я.  Приходите лечиться к доктору Эльмару!» «Я ходил в разные клиники, и мне всё время всё не нравилось.Всегда вырывали зубы, было больно, я потом ходил мучился. И я как-то попал в клинику доктора Эльмара, и тут всё было как по волшебству.Пришёл, у меня была дикая зубная боль, сажусь к доктору на кресло, проходит 5 минут, и я пишу доктору (говорить-то я не могу): „Можно уже говорить?“. А он такой: „А я уже всё тебе сделал“. Невероятно просто! Здесь происходит реальная магия, прямо так, как делаю я. Приходите лечиться к доктору Эльмару!»«Я ходил в разные клиники, и мне всё время всё не нравилось.Всегда вырывали зубы, было больно, я потом ходил мучился. И я как-то попал в клинику доктора Эльмара, и тут всё было как по волшебству.Пришёл, у меня была дикая зубная боль, сажусь к доктору на кресло, проходит 5 минут, и я пишу доктору (говорить-то я не могу): „Можно уже говорить?“. А он такой: „А я уже всё тебе сделал“. Невероятно просто! Здесь происходит реальная магия, прямо так, как делаю я. Приходите лечиться к доктору Эльмару!»',
    },
    {
      img: `${patient2}`,
      text: '«Я ходил в разные клиники, и мне всё время всё не нравилось.Всегда вырывали зубы, было больно, я потом ходил мучился.  И я как-то попал в клинику доктора Эльмара, и тут всё было как по волшебству.Пришёл, у меня была дикая зубная боль, сажусь к доктору на кресло, проходит 5 минут, и я пишу доктору (говорить-то я не могу):  „Можно уже говорить?“. А он такой: „А я уже всё тебе сделал“. Невероятно просто! Здесь происходит реальная магия, прямо так, как делаю я.  Приходите лечиться к доктору Эльмару!» «Я ходил в разные клиники, и мне всё время всё не нравилось.Всегда вырывали зубы, было больно, я потом ходил мучился. И я как-то попал в клинику доктора Эльмара, и тут всё было как по волшебству.Пришёл, у меня была дикая зубная боль, сажусь к доктору на кресло, проходит 5 минут, и я пишу доктору (говорить-то я не могу): „Можно уже говорить?“. А он такой: „А я уже всё тебе сделал“. Невероятно просто! Здесь происходит реальная магия, прямо так, как делаю я. Приходите лечиться к доктору Эльмару!»«Я ходил в разные клиники, и мне всё время всё не нравилось.Всегда вырывали зубы, было больно, я потом ходил мучился. И я как-то попал в клинику доктора Эльмара, и тут всё было как по волшебству.Пришёл, у меня была дикая зубная боль, сажусь к доктору на кресло, проходит 5 минут, и я пишу доктору (говорить-то я не могу): „Можно уже говорить?“. А он такой: „А я уже всё тебе сделал“. Невероятно просто! Здесь происходит реальная магия, прямо так, как делаю я. Приходите лечиться к доктору Эльмару!»',
    },
  ]

  const accordion = [
    {
      key: 0,
      title: 'Оборудование, которое видит больше, чем врач',
      img: `${kachestvo}`,
      text: 'Мы предлагаем нашим пациентам только самые современные в сфере стоматологии технологии и оборудование, которые исключают возможность врачебной ошибки.',
    },
    {
      key: 1,
      title: 'Высокое качество услуг и сервиса',
      img: `${lechenie}`,
      text: ' Американские технологии и передовые зарубежные методики, привезённые в Кыргызстан.',
    },
    {
      key: 3,
      title: 'Что такое виниры и когда нужно их ставить?',
      img: `${viniry}`,
      text: '  Это эффективный, а главное — безопасный и быстрый способ стать обладателем восхитительной улыбки. Виниры целесообразно ставить при наличии дефектов зубов: сколов, трещин, кривизны, наличия промежутков между зубами и видимых пломб. А также если есть желание иметь улыбку мечту идеальной формы и белизны.',
    },
    {
      key: 4,
      title: 'Чем отличается керамическая вкладка от пломбы?',
      img: `${plomba}`,
      text: 'Фактически керамическая вкладка — это пломба из керамики, но у неё есть ряд существенных достоинств.Прочность, высокая износостойкость, отсутствие усадки с течением времени. И это по сравнению с самым «продвинутым» пломбировочным материалом.Эстетическая часть тоже очень важна, ведь пломбы всегда заметны. А в случае керамической вкладки сами стоматологи порой с трудом находят собственно зафиксированные вкладки. Это полноценное восстановление анатомической формы зуба.',
    },
    {
      key: 5,
      title: 'Элайнеры выравнивания зубов, что это такое?',
      img: `${elainery}`,
      text: 'Элайнеры – это эластичные прозрачные капы, накладываемые на весь зубной ряд. Они напоминают капы, используемые для осветления эмали. Элайнеры пациент может надеть и снять самостоятельно, это совершенно не больно. В отличие от брекетов их не нужно носить постоянно. Элайнеры можно убирать перед приемом пищи, чисткой зубов.',
    },
    {
      key: 6,
      title: 'Консилиум врачей по всем возможным вариантам преображения каждой улыбки',
      img: `${konsultasya}`,
      text: 'За эстетику и функциональность зубов лично отвечают все специалисты клиники, которые участвуют в создании вашей улыбки.',
    },
    {
      key: 7,
      title: 'Консилиум врачей по всем возможным вариантам преображения каждой улыбки',
      img: `${konsultasya}`,
      text: 'За эстетику и функциональность зубов лично отвечают все специалисты клиники, которые участвуют в создании вашей улыбки.',
    },
  ]

  const accordion2 = [
    {
      key: 0,
      title: 'Можно ли выровнять зубы без брекетов?',
      text: 'Да. Самый удобный метод исправления прикуса и искривлённых зубов — это капы-элайнеры. Он подходит и подросткам, и взрослым. Не вызывает сложностей по уходу за зубами.',
    },
    {
      key: 1,
      title: 'Почему вы советуете капы-элайнеры? В чём их преимущество?',
      text: 'Они невредны для здоровья. Их легко можно снять, когда нужно поесть или почистить зубы. Не вызывают аллергии. Воздействуют постепенно и мягко. Они лёгкие, практически не ощущаются и, в отличие от брекетов, не травмируют полость рта металлическими частями. Незаметны во время общения, не привлекают внимания к себе.',
    },
    {
      key: 2,
      title: 'Я могу увидеть, как будут выглядеть мои зубы после лечения?',
      text: 'Мы создаем виртуальную 3D-модель зубочелюстной системы, где вы сможете увидеть конечный результат своих идеально ровных зубов и узнать точные сроки конца лечения.',
    },
    {
      key: 3,
      title: 'Если у меня нижние зубы ровные, то нужно только верхние выровнять? Или ставить всё равно на обе челюсти?',
      text: 'Необязательно. Можно поставить элайнеры как на обе челюсти, так и на одну. Технология это позволяет.',
    },
    {
      key: 4,
      title: 'Будут ли мне мешать капы-элайнеры? Смогу ли я к ним адаптироваться?',
      text: 'Нашему организму требуется время для привыкания к любому инородному телу. И элайнеры не исключение. Адаптацию можно разделить на два периода. Первичная (2−3 дня) В первую неделю щёки, язык и десна привыкают к новому рельефу. Элайнеры чувствуются во рту, и это может быть непривычно. Вторичная (1−2 месяца) Спустя месяц вы уже не замечаете их во рту. А многие наши пациенты говорят, что им в капах-элайнерах удобнее, чем без них.',
    },
    {
      key: 5,
      title: 'Расскажите о домашнем методе отбеливания зубов?',
      text: 'В домашних условиях вы будете носить две недели индивидуальные капы.Но мы рекомендуем комбинированный метод. Сначала кабинетное, а после — домашнее отбеливание. Для ослепительного, стойкого и долгосрочного эффекта. Именно комбинация методов позволяет сохранить эффект процедуры до 3 лет!',
    },
    {
      key: 6,
      title: 'Что такое виниры и когда нужно их ставить?',
      text: 'Виниры — это сверхтонкие накладки на зубы, изготовленные из высококачественной керамики. В отличие от коронки, они закрывают только переднюю и режущую часть зуба. Чаще всего ставятся на зону улыбки (8 нижних и 10 верхних). Это эффективный, а главное — безопасный и быстрый способ стать обладателем восхитительной улыбки. Виниры целесообразно ставить при наличии дефектов зубов: сколов, трещин, кривизны, наличия промежутков между зубами и видимых пломб. А также если есть желание иметь улыбку мечту идеальной формы и белизны.',
    },
    {
      key: 7,
      title: 'Чем отличается керамическая вкладка от пломбы?',
      text: 'Фактически керамическая вкладка — это пломба  bbbbbb uuuu  из керамики, но у неё есть ряд существенных достоинств.Прочность, высокая износостойкость, отсутствие усадки с течением времени. И это по сравнению с самым «продвинутым» пломбировочным материалом.Эстетическая часть тоже очень важна, ведь пломбы всегда заметны. А в случае керамической вкладки сами стоматологи порой с трудом находят собственно зафиксированные вкладки. Это полноценное восстановление анатомической формы зуба.',
    },
  ]

  const result = [
    {

      img: `${result11}`,
      text: 'Спасибо огромное доктору Айдарову!',
    },
    {

      img: `${result12}`,
      text: 'Спасибо огромное доктору Айдарову!',
    },
    {

      img: `${result22}`,
      text: 'Спасибо огромное доктору Айдарову!',
    },
    {

      img: `${result221}`,
      text: ' Спасибо огромное доктору Айдарову!',
    },
    {

      img: `${result33}`,
      text: 'Спасибо огромное доктору Айдарову!',
    },
    {

      img: `${result31}`,
      text: 'Спасибо огромное доктору Айдарову!',
    },
  ]

  return (
    <>
      <Container>
        <Row className="mt-5">
          <Col md={6} xs={10}>
            <p
              style={{color: '#d3bb7e', fontSize: '50px', marginTop: '50px'}}>
              Ваша улыбка - наша забота!
            </p>

            <Card.Text style={{color: 'white', fontSize: '20px'}}>
              Превратите её в свою визитную карточку, как это уже сделали многие звёзды, певцы, спортсмены, политики и
              предприниматели
            </Card.Text>
                <Col sm={6}>
                <Button1 setShow={setShow}/>

                </Col>
          </Col>
          <Col md={6} xs={10}>
            <Card md={6} xs={8} style={{backgroundColor: 'black'}}>
              <img src={aidarov2}/>
            </Card>
          </Col>
        </Row>
      </Container>
      <RunText/>
      <Container>
        <Row>
          <Row className="mt-5">
            <Col md={6} xs={10}>
              <Card md={6} xs={10} style={{backgroundColor: 'black'}}>
                <img src={aidarov}/>
              </Card>

            </Col>
            <Col md={6} xs={10} style={{color: 'white', fontSize: '20px'}}>
              <Card.Text>
                <b> Здравствуйте!
                  Меня зовут Бекмамат Айдаров.
                </b>
              </Card.Text>
              <p className="textdoctor">
                Я стоматолог-ортопед, основатель и главный врач клиники «Dr. Aidarov». Каждый пациент является для нас
                VIP-персоной, поэтому мы предоставляем только лучшее из мира стоматологии
              </p>
              <p className="textdoctor">
                Всегда стремлюсь быть в авангарде современной стоматологии.
                Стоматология - сфера чрезвычайно высокотехнологичная, поэтому динамика ее развитие превышает динамику
                большинства остальных сфер деятельности.
                И большую часть моей жизни занимает обучение, прохождение курсов и посещение конференций.
              </p>
              <p className="textdoctor">
                Мы работаем с современными технологиями, которые позволяют не только быстро и качественно создать и
                оценить результат, но и визуализировать процесс для пациента без боли и мучительных процедур.
                Стоматология в настоящее время — это однозначно комфорт и приятное времяпрепровождение!
              </p>
              <h5 style={{color: 'white'}}>
                Добро пожаловать в клинику «Dr. Aidarov»!
              </h5>
              <div style={{display: 'flex', justifyContent: 'between', color: 'black', marginTop: '50px'}}>
              <Button1 setShow={setShow}/>

                <div className="div_b">
                  Образование
                </div>
                <div className="div_b">
                  Социальные сети
                </div>
              </div>
            </Col>
          </Row>
          <Col xs={10} md={8}>
            <p
              style={{color: '#d3bb7e', fontSize: '50px', fontFamily: 'GraphikTT Arial sans-serif', marginTop: '50px'}}>
              Наши довольные пациенты
            </p>
          </Col>

          <Row className="mt-5 ">

            <Col md={4} xs={10}>
              <Card md={4} xs={10}>
                <img src={patient1}/>
              </Card>

            </Col>
            <Col md={4} xs={10}>
              <Card md={4} xs={10}>
                <img src={patient5}/>
              </Card>

            </Col>
            <Col md={4} xs={10}>
              <Card md={4} xs={10}>
                <img src={patient2}/>
              </Card>

            </Col>
          </Row>
          <Row className="mt-5">
            <Col xs={10} md={4} className="mt-5">
              <div className="justify-content-evenly text-center  ">
                <img class="  t013__img t-img" src={aidarov4} imgfield="img" data-tu-max-width="320"
                     data-tu-max-height="320" data-tu-cover="c" alt="" role="presentation">
                </img>
                <Card.Title className="text_nav">Бекмамат Айдаров</Card.Title>
                <span className="text_nav" style={{fontSize: '14px', lineHeight: '18px'}} data-customstyle="yes">Основатель и<br/> главный врач клиники, <br/>стоматолог-ортопед</span>
              </div>
            </Col>
            <Col xs={10} md={8}>
              <div className="justify-content-evenly text_nav mt-5">
                <div>
                  Звезды и знаменитости, доверяющие нам свои улыбки, люди состоятельные. Но даже они ценят и считают
                  свои деньги. А к нам в клинику приходят за высочайшим качеством в стоматологии по демократичной цене,
                  без необходимости выезжать заграницу.
                </div>
                <div className="mt-5">
                  Поэтому наши двери всегда открыты, и открыты для всех. А высочайшее качество и сервис мы гарантируем
                  каждому, как популярным людям, так и людям не столь публичным.
                </div>
              </div>
            </Col>
          </Row>

          
          <Row>
          <h1
            style={{color: '#d3bb7e', fontSize: '45px', fontFamily: 'GraphikTT Arial sans-serif', marginTop: '50px'}}>
            Чем мы можем вам помочь
          </h1>
            <Col lg={6} xs={12}>
           
              <a href="/Chec_Up" style={{textDecoration: 'none'}}>
                <div className="help">
                  <h4>
                    Провести консультацию
                  </h4>
                  <br/>
                  <h5>
                    <a>Первичная консултация</a>
                    <br/>
                    <a>Chec_Up улыбки</a>
                  </h5>
                  <h5>
                    <img style={{width: '50%', height: '50%'}} src={strelka}/>
                  </h5>
                </div>
              </a>
            </Col>
            <Col lg={6} xs={12}>
              <a href="/Chec_Up" style={{textDecoration: 'none'}}>
                <div className="help">
                    <h4> Обрести красивую и</h4>
                    <b/>
                    <h4>здоровую улыбку</h4>


                  <h5>
                    <a>Виниры</a>
                    <br/>
                    <a> Люминиры </a>
                    <br/>
                    <a> Элайнеры </a>
                  </h5>
                  <h5>
                    <img style={{width: '50%', height: '50%'}} src={strelka}/>
                  </h5>
                </div>
              </a>
            </Col>
            <Col lg={6} xs={12}>
              <a href="/Chec_Up" style={{textDecoration: 'none'}}>
                <div className="help">
                  <h4>
                    Исправить прикус
                  </h4>
                  <h5>
                    <a>Элайнеры</a>
                    <p>Исправление прикуса</p>
                    <p>сразу на винирах</p>


                  </h5>
                  <h5>
                    <img style={{width: '50%', height: '50%'}} src={strelka}/>
                  </h5>
                </div>
              </a>
            </Col>
            <Col lg={6} xs={12}>
              <a href="/Chec_Up" style={{textDecoration: 'none'}}>
                <div className="help">
                  <h4>
                    <h4>Получить белоснежную</h4>
                    <b/>
                    <h4>
                      улыбку
                    </h4>
                  </h4>
                  <h5>
                    <a> PHILIPS ZOOM 4 </a>
                    <br/>
                    <a>AMAZING WHITE</a>
                    <br/>
                    <a>Внутри коронковое</a>
                    <br/>
                    <a> отбеливание</a>
                  </h5>
                  <h5>
                    <img style={{width: '50%', height: '50%'}} src={strelka}/>
                  </h5>
                </div>
              </a>
            </Col>
            <Col lg={6} xs={12}>
              <a href="/Chec_Up" style={{textDecoration: 'none'}}>
                <div className="help">
                  <h4>
                    Восстановить зубы
                  </h4>
                  <h5>
                    <a>Имплантация</a>
                    <br/>
                    <a>Протезирования</a>
                  </h5>
                  <h5>
                    <img style={{width: '50%', height: '50%'}} src={strelka}/>
                  </h5>
                </div>
              </a>
            </Col>
            <Col lg={6} xs={12}>
              <a href="/Chec_Up" style={{textDecoration: 'none'}}>
                <div className="help">
                  <h4>
                    Вылечить зубы
                  </h4>
                  <h5>
                    <a>Лечение кариеса</a>
                    <br/>
                    <a>Сложные случаи</a>
                    <br/>
                    <a>Лечение пульпита</a>
                    <br/>
                  </h5>
                  <h5>
                    <img style={{width: '50%', height: '50%'}} src={strelka}/>
                  </h5>
                </div>
              </a>
            </Col>

          </Row>

          <Row>
            <p style={{
              color: '#d3bb7e',
              fontSize: '50px',
              fontFamily: 'GraphikTT Arial sans-serif',
              marginTop: '50px',
            }}>
              Почему клиника Айдарова?
            </p>
            <Col md={4} xs={10}>
              <Card md={3} xs={10} style={{borderColor: 'black'}}>
                <img src={komanda}/>
              </Card>
            </Col>
            <Col md={8} xs={10}>
              <Accordion defaultActiveKey={['0']} alwaysClose style={{backgroundColor: 'black', color: '#d3bb7e'}}>
                {
                  accordion.map(e => {
                    return (
                      <>
                        <Accordion.Item eventKey={e.key} style={{backgroundColor: 'black', color: '#d3bb7e'}}>
                          <Accordion.Header
                            style={{backgroundColor: 'black', color: '#d3bb7e'}}>{e.title}</Accordion.Header>
                          <Accordion.Body style={{backgroundColor: 'black', color: '#d3bb7e'}}>
                            <p>
                              {e.text}
                            </p>
                            <Card>
                              <img src={e.img}/>
                            </Card>


                          </Accordion.Body>
                        </Accordion.Item>
                      </>

                    )
                  })
                }

              </Accordion>

            </Col>
          </Row>
          <Col md={10} xs={10}>
            <p
              style={{color: '#d3bb7e', fontSize: '50px', fontFamily: 'GraphikTT Arial sans-serif', marginTop: '50px'}}>
              Наши результаты
            </p>
          </Col>
          <Row className="justify-content-center">
            <Col md={10} xs={10} className="mt-5">
              <Carousel fade>
                {
                  result.map(e => {
                    return (

                      <Carousel.Item style={{backgroundColor: 'black'}}>
                        <img
                          className="d-block w-100"
                          src={e.img}
                          alt="First slide"
                        />
                        <Carousel.Caption>
                          <h3>{e.text}</h3>
                        </Carousel.Caption>

                      </Carousel.Item>

                    )
                  })
                }
              </Carousel>

            </Col>
          </Row>
          <Row>
            <Col md={10} xs={10}>
              <p style={{
                color: '#d3bb7e',
                fontSize: '50px',
                fontFamily: 'GraphikTT Arial sans-serif',
                marginTop: '50px',
              }}>
                Наши отзывы
              </p>
            </Col>

            <Col md={12} xs={10} className="mt-5">
              <Carousel fade>
                {
                  feedback.map(e => {
                    return (
                      <Carousel.Item style={{color: 'white'}}>
                        <Row>
                          <Col md={6} xs={10}>
                            <img

                              className="d-block w-100"
                              src={e.img}
                              alt="First slide"
                            />
                          </Col>
                          <Col>
                            <p>
                              {e.text}
                            </p>
                          </Col>
                        </Row>
                      </Carousel.Item>
                    )
                  })
                }
              </Carousel>

            </Col>
          </Row>
          <Col md={10} xs={10}>
            <p
              style={{color: '#d3bb7e', fontSize: '50px', fontFamily: 'GraphikTT Arial sans-serif', marginTop: '50px'}}>
              Наша команда
            </p>
          </Col>
          <Row>
            <Col md={6} xs={10}>
              <h4 style={{color: '#d3bb7e', fontFamily: 'GraphikTT Arial sans-serif'}}>
                Наша команда
              </h4>
              <h5 style={{color: 'white', fontFamily: 'GraphikTT Arial sans-serif'}}>
                Наши пациенты как будто попадают в будущее. Мы можем полностью визуализировать всё для пациентов: на
                специальных мониторах показать зубы в разных проекциях, в разрезе, можем сделать подробный полный чекап
                всей зубочелюстной системы. И всё это без временных затрат и с максимальным комфортом.
                <p>
                  Мы живём жизнью пациентов, их клиническими случаями. Бывает, что рабочий день начинается в 10 утра, а
                  заканчивается в 4 утра уже следующего дня. Поэтому у нас в клинике есть спальные места, душевые
                  кабины, большая оборудованная кухня, плейстейшен, домашний кинотеатр — все условия, чтобы при
                  необходимости отдохнуть в клинике и принять каждого пациента.
                </p>
              </h5>
            </Col>
            <Col md={6} xs={10}>
              <Card md={6} xs={10} style={{borderColor: 'black'}}>
                <img src={komanda}/>
              </Card>
            </Col>
          </Row>
          <Col md={8} xs={10}>
            <p
              style={{color: '#d3bb7e', fontSize: '50px', fontFamily: 'GraphikTT Arial sans-serif', marginTop: '50px'}}>
              Часто задаваемые вопросы
            </p>
          </Col>
          <Col md={12} xs={10}>
            <Accordion defaultActiveKey={['0']} alwaysClose style={{backgroundColor: 'black', color: '#d3bb7e'}}>
              {
                accordion2.map(e => {
                  return (
                    <>
                      <Accordion.Item eventKey={e.key} style={{backgroundColor: 'black', color: '#d3bb7e'}}>
                        <Accordion.Header
                          style={{backgroundColor: 'black', color: '#d3bb7e'}}>{e.title}</Accordion.Header>
                        <Accordion.Body style={{backgroundColor: 'black', color: '#d3bb7e'}}>
                          <p>
                            {e.text}
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                    </>

                  )
                })
              }
            </Accordion>
          </Col>
        </Row>
      </Container>


    </>
  )
}

export default MainContainers
