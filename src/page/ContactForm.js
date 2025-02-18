import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('php/contact.php', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            
            const data = await response.json();
            
            if (data.success) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="row g-4">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input 
                                type="text"
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
                        <button type="submit" className="btn btn-primary">
                            Enviar Mensaje
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