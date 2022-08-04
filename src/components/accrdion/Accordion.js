import React, { useState } from 'react';
import { Col } from 'react-bootstrap';


function Accordion(props) {
    const [selected, setSelected] = useState(null)
    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }
    return (

        <div className='wrapper container mt-5 '>
            <hr />

            <Col sm={5}>
                <div className='accordion '>
                    {props.name.map((item, i) => {
                        return (
                            <>
                                <div className='item'>
                                    <hr />
                                    <div className='title' onClick={() => toggle(i)}>
                                        <p className='h5 text-center'>{item.title}</p>
                                        <span className='selecteds'>
                                            {selected === i ? "x" : "+"}
                                        </span>
                                    </div>
                                    <div className={selected === i ? "content show" : "content"}>
                                        <p>{item.text}</p>
                                        <p className='text1'>{item.text1}</p>
                                        <div>
                                            {' '}
                                        </div>
                                        <h5 className='text1'>{item.ptitile}</h5>
                                        {/* <hr/> */}
                                        <p className='text1'>{item.price}</p>
                                        <p className='text1'>{item.price1}</p>
                                        <p className='text1'>{item.price2}</p>
                                        <p className='text1'>{item.price3}</p>
                                        <p className='text1'>{item.price4}</p>
                                        <p className='text1'>{item.price5}</p>
                                        <p className='text1'>{item.price6}</p>
                                        <p className='text1'>{item.price7}</p>
                                        <p className='text1'>{item.price8}</p>
                                        <p className='text1'>{item.price9}</p>
                                        <p className='text1'>{item.price10}</p>
                                        <p className='text1'>{item.price11}</p>
                                        <p className='text1'>{item.price12}</p>
                                        <h5 className='text1'>{item.price_price}</h5>

                                    </div>
                                </div>
                                <hr />

                            </>
                        )
                    })}
                </div>
            </Col>
        </div>
    );
}


export default Accordion;