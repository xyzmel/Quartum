import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import Alert from 'react-bootstrap/Alert';

const Result = () => {
    return (
        <Alert variant="success" className="success-msg">
        Meldingen din er sendt!
        </Alert>
    )
}

const FormTwo = () => {

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
            <input type="text" className="form-control" name="contact-name" required />
        </div>
        <div className="form-group">
            <label>E-post</label>
            <input type="email" className="form-control" name="contact-email" required />
        </div>
        <div className="form-group">
            <label>Telefon</label>
            <input type="tel" className="form-control" name="contact-phone" required />
        </div>
        <div className="form-group mb--40">
            <label>Hvordan kan vi hjelpe deg?</label>
            <textarea className="form-control" name="contact-message" rows="4"></textarea>
            
        </div>
        <div className="form-group">
            <button type="submit" className="axil-btn btn-fill-primary btn-fluid btn-primary" name="submit-btn">Få konsultasjon!</button>
        </div>
        <div className="form-group">
            {result ? <Result /> : null}
        </div>

    </form>
    )
}

export default FormTwo;