import React from 'react';

function Footer() {
    return (
            <>
                <div className='main-footer mt-5' style={{ background:"#060608", 
                                                    opacity: 0.9,
                                                    color:"white",
                                                    padding: '20px',
                                                    position: "relative",
                                                    bottom:0,
                                                    width:"100%"}}>
                    <div className='container'>
                        <div className='row'>
                            {/* collumn1 */}
                             <div className='col'>
                                <h5 className='textinfooter' ><img src="https://static.tildacdn.com/tild6462-6533-4166-a665-376166353633/logo.svg"/></h5> 
                                <p className='textdoctor'>Медицинская лицензия</p>
                             </div>
                             <div className='col'>   
                                <h6 className='textinfooter2'>Хиты</h6>
                                <h6 className='textinfooter2'>Hollywood Smile</h6>
                                <h6 className='textinfooter2'> Выравнивание зубов </h6>
                                <h6 className='textinfooter2'> Эффект бриллиант</h6>
                                
                             </div>
                             {/* colum2 */}
                             <div className='col'>
                             <div className='textinfooter' >Услуги</div> 
                                    <div  className='textinfooter2'>Консультация </div>
                                    <div  className='textinfooter2'>Полное обследование </div>
                                    <div  className='textinfooter2'>Виниры / Люминиры</div>  
                                    <div  className='textinfooter2'>Элайнеры</div>  
                                    <div  className='textinfooter2'>Отбеливание </div>                           
                                    <div  className='textinfooter2'>Профессиональная гиена полости рта</div>   
                                    <div  className='textinfooter2'> Лечение</div> 
                                    <div  className='textinfooter2'> Брекеты</div> 
                                    <div  className='textinfooter2'> Имплантация</div>  
                                    <div  className='textinfooter2'> Протезирование</div>
                             </div>
                             {/* colum3 */}
                             <div className='col'>
                             <div className='textinfooter' >Услуги</div> 
                                    <div  className='textinfooter2'>г. Москва, ст. Фрунзенская,  </div>
                                    <div  className='textinfooter2'>Оболенский переулок, д. 9, корп. 8 </div>
                                    <div  className='textinfooter2'>+996(555)555 555</div>  
                                    <div className='div_a'><p> Записаться на прием</p></div>
                             </div>
                            

                        </div>   
                        <div className='col'>
                        <hr/>
                        <p style={{textAlign:"center", padding:"2px", fontSize:"15px"}}> &copy;{new Date().getFullYear()} г.</p>                                           
                        </div>

                    </div>
                </div>         
            </>


    )
}

export default Footer;