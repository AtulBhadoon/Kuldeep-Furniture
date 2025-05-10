import React from 'react'
import Footer from '../Componenet/Footer'
import Header from '../Componenet/Header'

function Contact() {
  return (
    <>
        <Header/>
        <div className="container contact">
            <h1>Contact-Us</h1>
            <div className="row col-md-12">
                <div className="col-sm-12  d-flex flex-wrap flex-dir justify-content-center justify-content-around">
                   <h2>Owner by- Vinod Jangid</h2>
                   <h2>Contact-No.- +91-9610554227,9461455712</h2>
                   <h2>E-mail- atuljangidofficial@gmail.com</h2>
                   <h2>Adress-Bhadoon,Roopangarh,Ajmer</h2>
                     <h2>Pin-Code-305814</h2>
                     <div>
                        <h1>Location-</h1>
                        <iframe className='Map ' src="https://www.google.com/maps/embed?pb=!3m2!1sen!2sin!4v1746845966545!5m2!1sen!2sin!6m8!1m7!1s27-FnCmdN5_fYDuS3FUdgA!2m2!1d26.86769865862026!2d74.93059609454818!3f83.27254114290889!4f-5.4666090329202035!5f1.953786547288542"></iframe>
                     </div>

                   
                </div>
            </div>
        </div>
       
      
    </>
  )
}

export default Contact
