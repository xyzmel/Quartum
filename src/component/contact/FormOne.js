import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import Alert from 'react-bootstrap/Alert';

const Result = () => {
    return (
        <Alert variant="success" className="success-msg">
            Meldingen din har blitt sendt!
        </Alert>
    )
}

const FormOne = () => {

    const form = useRef();

    const [ result, showresult ] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ng1s37j', 'template_oyoybfe', form.current, 'rvQcbsOQqp7JZbFLZ')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          form.current.reset();
          showresult(true);
      };

        setTimeout(() => {
            showresult(false);
        }, 5000);


    return (
        <form ref={form} onSubmit={sendEmail} className="axil-contact-form">
        <div className="form-group">
            <label>Navn</label>
            <input type="text" className="form-control" name="contact-name" placeholder="Ola/Kari Nordmann" required />
        </div>
        <div className="form-group">
            <label>E-post</label>
            <input type="email" className="form-control" name="contact-email" placeholder="eksempel@mail.com" required />
        </div>
        <div className="form-group mb--40">
            <label>Telefon</label>
            <input type="tel" className="form-control" name="contact-phone" placeholder="+47" required />
        </div>
        <div className="form-group">
            <button type="submit" className="axil-btn btn-fill-primary btn-fluid btn-primary" name="submit-btn">Få et tilbud</button>
        </div>
        <div className="form-group">
            {result ? <Result /> : null}
        </div>

    </form>
    )
}

export default FormOne;