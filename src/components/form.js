import React, { useState } from 'react';

const Formulario = ({ fields, endpoint }) => {
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Datos enviados con éxito!');
            } else {
                console.error('Error al enviar los datos.');
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
        }
    };

    const isDateField = (fieldName) => {
        return /fecha/i.test(fieldName); // Verificar si el nombre del campo contiene la palabra "fecha" (ignorando mayúsculas y minúsculas)
    };

    return (
        <form onSubmit={handleSubmit}>
            {fields.map((field) => (
                // Verificar si el campo es diferente de "id" antes de mostrarlo
                field.name !== 'id' && (
                    <div className="mb-3" key={field.name}>
                        <label htmlFor={field.name} className="form-label">{field.title}</label>
                        {isDateField(field.name) ? (
                            <input
                                type="date"
                                className="form-control"
                                id={field.name}
                                name={field.name}
                                value={formData[field.name] || ''}
                                onChange={handleChange}
                            />
                        ) : (
                            <input
                                type={field.type || 'text'}
                                className="form-control"
                                id={field.name}
                                name={field.name}
                                value={formData[field.name] || ''}
                                onChange={handleChange}
                            />
                        )}
                        <small className="form-text text-muted">{`Ingrese su ${field.label}`}</small>
                    </div>
                )
            ))}
            <button type="submit" className="btn btn-primary">Registrar</button>
        </form>
    );
};

export default Formulario;


