import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";

const ReservaForm = () => {
    const [formData, setFormData] = useState({
        fecha_entrada: '',
        fecha_salida: '',
        cliente: {
            nombre: '',
            telefono: '',
            email: '',
            ci: '',
        },
        habitacion: '',
    });

    const [habitaciones, setHabitaciones] = useState([]);
    const [registroExitoso, setRegistroExitoso] = useState(false);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/habitaciones/')
            .then((response) => response.json())
            .then((data) => {
                setHabitaciones(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.startsWith('cliente.')) {
            const clientField = name.split('.')[1];
            setFormData({ ...formData, cliente: { ...formData.cliente, [clientField]: value } });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Enviar los datos al servidor usando fetch
            const response = await fetch('http://127.0.0.1:8000/api/registro_cliente_reserva/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    cliente: {
                        nombre: formData.cliente.nombre,
                        telefono: formData.cliente.telefono,
                        email: formData.cliente.email,
                        ci: formData.cliente.ci,
                    },
                    reserva: {
                        fecha_entrada: formData.fecha_entrada,
                        fecha_salida: formData.fecha_salida,
                        habitacion: formData.habitacion,
                    },
                }),
            });

            if (!response.ok) {
                throw new Error('Error al enviar la reserva y el cliente.');
            }

            const data = await response.json();
            console.log(data);
            setRegistroExitoso(true); // Indicar que el registro fue exitoso
        } catch (error) {
            console.error('Error:', error);
            alert('Error al realizar la reserva.');
        } finally {
            // Restablecer los campos del formulario
            setFormData({
                fecha_entrada: '',
                fecha_salida: '',
                cliente: {
                    nombre: '',
                    telefono: '',
                    email: '',
                    ci: '',
                },
                habitacion: '',
            });
        }
    };

    const habitacionesDisponibles = habitaciones.filter((habitacion) => !habitacion.ocupada);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2>Reserva tu Habitacion</h2>
                    {/* Mostrar el alert cuando el registro sea exitoso */}
                    {registroExitoso && (
                        <div className="alert alert-success" role="alert">
                            Registro de reserva exitoso.
                        </div>
                    )}
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="fecha_entrada">Fecha de entrada</label>
                            <input
                                type="date"
                                className="form-control"
                                id="fecha_entrada"
                                name="fecha_entrada"
                                value={formData.fecha_entrada}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="fecha_salida">Fecha de salida</label>
                            <input
                                type="date"
                                className="form-control"
                                id="fecha_salida"
                                name="fecha_salida"
                                value={formData.fecha_salida}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cliente.nombre">Nombre del cliente</label>
                            <input
                                type="text"
                                className="form-control"
                                id="cliente.nombre"
                                name="cliente.nombre"
                                value={formData.cliente.nombre}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cliente.telefono">Teléfono del cliente</label>
                            <input
                                type="text"
                                className="form-control"
                                id="cliente.telefono"
                                name="cliente.telefono"
                                value={formData.cliente.telefono}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cliente.email">Email del cliente</label>
                            <input
                                type="email"
                                className="form-control"
                                id="cliente.email"
                                name="cliente.email"
                                value={formData.cliente.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cliente.ci">CI del cliente</label>
                            <input
                                type="text"
                                className="form-control"
                                id="cliente.ci"
                                name="cliente.ci"
                                value={formData.cliente.ci}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="habitacion">Habitación</label>
                            <select
                                className="form-control"
                                id="habitacion"
                                name="habitacion"
                                value={formData.habitacion}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled>
                                    Seleccione una habitación
                                </option>
                                {/* Mapear solo las habitaciones disponibles */}
                                {habitacionesDisponibles.map((habitacion) => (
                                    <option key={habitacion.id} value={habitacion.id}>
                                        Número: {habitacion.numero}, Capacidad: {habitacion.capacidad}, Ocupada:{' '}
                                        {habitacion.ocupada ? 'Sí' : 'No'}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <Link to="/login">
                            <button  className="btn btn-danger">
                                Atras
                            </button>
                        </Link>
                        <button type="submit" className="btn btn-primary">
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ReservaForm;
