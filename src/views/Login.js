import React, { useState } from 'react';
import styles from 'assets/css/stylelogin.css';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
} from 'mdb-react-ui-kit';

const Login = ({ onLoginSuccess }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = {
            username: username,
            password: password
        };

        try {
            const response = await fetch('http://127.0.0.1:8000/api/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
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

    return (
        <MDBContainer fluid style={{ background: 'white' }}>
            <MDBRow className='align-items-center'>
                <MDBCol sm='6'>
                    <div className='d-flex flex-row ps-5 pt-5'>
                        <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }}/>
                        <span className="h1 fw-bold mb-0">Logo</span>
                    </div>

                    <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-1'>
                        <h3 className="fw-normal mb-3 ps-5 pb-3" style={{ letterSpacing: '1px' }}>Log in</h3>

                        {errorMessage && (
                            <p className="text-danger">{errorMessage}</p>
                        )}

                        <form onSubmit={handleSubmit}>
                            <MDBInput
                                wrapperClass='mb-4 mx-5 w-100'
                                label='Usuario'
                                id='formControlLg'
                                type='text'
                                size="lg"
                                style={{ color: 'black' }}
                                value={username}
                                onChange={(event) => setUsername(event.target.value)}
                            />
                            <MDBInput
                                wrapperClass='mb-4 mx-5 w-100'
                                label='Password'
                                id='formControlLg'
                                type='password'
                                size="lg"
                                style={{ color: 'black' }}
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />

                            <div className="text-center">
                                <MDBBtn color='info' size='lg' type='submit' className="btn-login">
                                    Login
                                </MDBBtn>
                            </div>
                        </form>

                        <p className="small mb-5 pb-lg-3 ms-5"><a className="text-muted" href="#!">Forgot password?</a></p>
                        <p className='ms-5'>Don't have an account? <a href="#!" className="link-info">Register here</a></p>
                    </div>
                </MDBCol>

                <MDBCol sm='6' className='d-none d-sm-block px-0'>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
                         alt="Login image" className="w-100" style={{ objectFit: 'cover', objectPosition: 'left' }} />
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default Login;
