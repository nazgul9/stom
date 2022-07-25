import React from 'react';
import './CardMenu.css'

function CardMenu(props) {
    return (
        <div className='container'>
            <div className={' d-flex href container'}>
                <a className={'href_a'} href='/Home'>
                    <span>
                        Главный
                    </span>
                </a>
                <a className='href_a' href='/Doctors'>
                    <span>
                        Врачи
                    </span>
                </a>
                <a className='href_a' href='/SERVICES'>
                    <span>
                        Услуги
                    </span>
                </a>
                <a className='href_a' href='/Price'>
                    <span>
                        Цены
                    </span>
                </a>
                <a className='href_a' href='/AboutStom'>
                    <span>
                         О клинике
                    </span>
                </a>
                <a className='href_a' href='/Contacts'>
                    <span>
                        Контакты
                    </span>
                </a>
            </div>
            <img className='mt-2' src="https://stomcity.ru/templates/smolenskoy/images/stomImages/top_bg.png" />
        </div>
    );
}

export default CardMenu;