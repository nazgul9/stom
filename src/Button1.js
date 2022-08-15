import React from 'react';

const Button1 = ({setShow}) => {
    

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <div className='div_a mt-5' onClick={handleShow}>
                <p > Записаться на консултацию </p>
            </div>
        </div>
    );
};

export default Button1;