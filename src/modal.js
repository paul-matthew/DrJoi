//NOT BEING USED
import React from 'react';

const Modal = ({ onClose, service }) => {
    return (
        <div className="portfolio-modal  modal" style={{border:"solid black 4px", scrollBehavior:'', background:'gray',maxWidth:'90vw',top:'5%',left:'5vw',height:'auto',position:'fixed', display:'flex', justifyContent: '', alignItems: '',zIndex:'21', maxHeight: "90vh"}}>
            <div className="modal-content">
                <div style={{margin:'15px'}}>
                    <span className="close" style={{cursor:'pointer', fontSize:'40px', display:'flex',position:'absolute', right:20 }}onClick={onClose}>&times;</span>
                    <h2 style={{display:'flex', justifyContent:'center',fontWeight:'bold',fontSize: 'clamp(16px, 4vw, 40px)',fontFamily:'PlayfairDisplay'}}>{service.title}</h2>
                    <p>{service.description2}</p>
                </div>
                    <img className='modalImg' style={{maxHeight:'500px',objectFit:'scale-down'}} src={service.image} alt={service.title} />
            </div>
          </div>
    );
};

export default Modal;
