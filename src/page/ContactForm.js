import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const result = await emailjs.sendForm(
                'service_portfolio', // Reemplaza con tu Service ID de EmailJS
                'template_portfolio', // Reemplaza con tu Template ID
                form.current,
                'vQvmmMREzDUieQgwl' // Reemplaza con tu Public Key
            );

            if (result.status === 200) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('error');
        }
    };

    return (
        <div className="contact-form-container">
            <form ref={form} onSubmit={handleSubmit} className="contact-form">
                <div className="row g-4">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input 
                                type="text"
                                name="user_name" // Este nombre debe coincidir con tu plantilla EmailJS
                                className="form-control"
                                placeholder="Tu nombre"
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                required
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <input 
                                type="email"
                                name="user_email" // Este nombre debe coincidir con tu plantilla EmailJS
                                className="form-control"
                                placeholder="Tu email"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                required
                            />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <input 
                                type="text"
                                name="subject" // Este nombre debe coincidir con tu plantilla EmailJS
                                className="form-control"
                                placeholder="Asunto"
                                value={formData.subject}
                                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                                required
                            />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <textarea 
                                name="message" // Este nombre debe coincidir con tu plantilla EmailJS
                                className="form-control"
                                rows="5"
                                placeholder="Tu mensaje"
                                value={formData.message}
                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                                required
                            ></textarea>
                        </div>
                    </div>
                    <div className="col-12">
                        <button 
                            type="submit" 
                            className="btn btn-primary"
                            disabled={status === 'sending'}
                        >
                            {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
                        </button>
                    </div>
                </div>
                
                {status === 'success' && (
                    <div className="alert alert-success mt-3">
                        ¡Mensaje enviado con éxito!
                    </div>
                )}
                {status === 'error' && (
                    <div className="alert alert-danger mt-3">
                        Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.
                    </div>
                )}
            </form>
        </div>
    );
};

export default ContactForm;