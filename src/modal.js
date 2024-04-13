import React from 'react';

const Modal = ({ onClose, service }) => {
    return (
        <div className="portfolio-modal  modal" style={{border:"solid black 4px", scrollBehavior:'', background:'gray',maxWidth:'90vw',top:'5%',left:'5vw',height:'auto',position:'fixed', display:'flex', justifyContent: '', alignItems: '',zIndex:'21', maxHeight: "90vh"}}>
            <div className="modal-content">
                <div style={{margin:'15px'}}>
                    <span className="close" style={{cursor:'pointer', fontSize:'40px', display:'flex',position:'absolute', right:20 }}onClick={onClose}>&times;</span>
                    <h2>{service.title}</h2>
                    <p>{service.description2}</p>
                </div>
                    <img className='modalImg' style={{maxHeight:'400px',objectFit:'cover'}} src={service.image} alt={service.title} />
            </div>
          </div>
    );
};

export default Modal;
