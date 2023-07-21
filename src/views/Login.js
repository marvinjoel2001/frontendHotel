import React, { useState } from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput,
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
} from 'mdb-react-ui-kit';
import {Link} from "react-router-dom";

const Login = ({ onLoginSuccess }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = {
            username: username,
            password: password,
        };

        try {
            const response = await fetch('http://127.0.0.1:8000/api/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();

                // Almacenar la respuesta en el localStorage
                localStorage.setItem('is_user_valid', data.is_user_valid);
                onLoginSuccess();
                // La solicitud fue exitosa, puedes manejar la respuesta aquí
                console.log('Solicitud exitosa');
            } else {
                // La solicitud falló, puedes manejar el error aquí
                const errorData = await response.json();
                setErrorMessage('Usuario o contraseña incorrectos');
            }
        } catch (error) {
            console.log(error);
        }
    };

    // Consultar el valor de isLoggedIn en localStorage
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    // Si isLoggedIn es true, llamar a onLoginSuccess
    if (isLoggedIn) {
        onLoginSuccess();
    }

    return (
        <MDBContainer fluid className='p-0'>
            <MDBRow className='align-items-center justify-content-center' style={{minHeight: '100vh'}}>
                <MDBCol sm='6' className='p-0 d-flex align-items-center justify-content-center'>
                    <div style={{width: '350px', height: '350px', borderRadius: '50%', overflow: 'hidden'}}>
                        <img
                            src='https://turismointernacionalonline.com/wp-content/uploads/2022/04/ice-85676218-68620422_3XL-430714.jpg'
                            alt='Login image'
                            className='w-100 h-100'
                            style={{objectFit: 'cover', objectPosition: 'center'}}
                        />
                    </div>
                </MDBCol>
                <MDBCol sm='6' className='p-0'>
                    <MDBCard className='w-75 mx-auto mt-5'>
                        <MDBCardBody>
                            <div className='d-flex flex-row ps-5 pt-5'>
                                <MDBIcon fas icon='hotel fa-3x me-3' style={{color: '#ffffff'}}/>
                                <span className='h1 fw-bold mb-0'>Hotel Jorge</span>
                            </div>

                            <MDBCardTitle className='fw-normal mb-3 ps-5 pb-3' style={{letterSpacing: '1px'}}>
                               Inicio de Sesion
                            </MDBCardTitle>

                            {errorMessage && <p className='text-danger'>{errorMessage}</p>}

                            <form onSubmit={handleSubmit}>
                                <MDBInput
                                    label='Usuario'
                                    id='username'
                                    type='text'
                                    size='lg'
                                    value={username}
                                    onChange={(event) => setUsername(event.target.value)}
                                    // Letras visibles en el input
                                />
                                <MDBInput
                                    label='Contraseña'
                                    id='password'
                                    type='password'
                                    size='lg'
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                    // Letras visibles en el input
                                />

                                <div className='text-center'>
                                    <MDBBtn color='info' size='lg' type='submit'>
                                        Iniciar Sesion
                                    </MDBBtn>
                                </div>
                            </form>

                            <p className='small mb-5 pb-lg-3 ms-5'>
                                <a className='text-muted' href='#!'>
                                    Olvidaste tu contraseña?
                                </a>
                            </p>
                            <Link to="/reserva-form">
                                <MDBBtn color='danger' size='lg'>
                                    Hacer Reserva
                                </MDBBtn>
                            </Link>
                            <p className='ms-5'>
                                No tienes una cuenta?{' '}
                                <a href='#!' className='link-info'>
                                    Registrate aqui
                                </a>
                            </p>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}
export default Login;
