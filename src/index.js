import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import AdminLayout from 'layouts/Admin/Admin.js';
import RTLLayout from 'layouts/RTL/RTL.js';
import ReactDOM from 'react-dom';
import 'assets/scss/black-dashboard-react.scss';
import 'assets/demo/demo.css';
import 'assets/css/nucleo-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import ThemeContextWrapper from './components/ThemeWrapper/ThemeWrapper';
import BackgroundColorWrapper from './components/BackgroundColorWrapper/BackgroundColorWrapper';
import Login from './views/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
    const initialLoggedInState = localStorage.getItem('isLoggedIn') === 'true';
    const [isLoggedIn, setIsLoggedIn] = useState(initialLoggedInState);

    const handleLoginSuccess = () => {
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true');
        // Redirigir a la ruta '/admin/dashboard'
        window.location.href = '/admin/dashboard';
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('isLoggedIn');
        // Redirigir a la ruta '/login'
        window.location.href = '/login';
    };

    return (
        <ThemeContextWrapper>
            <BackgroundColorWrapper>
                <Router>
                    <Routes>
                        <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
                        {isLoggedIn ? (
                            <Route path="/admin/*" element={<AdminLayout />} />
                        ) : (
                            <Navigate to="/login" replace />
                        )}
                    </Routes>
                </Router>
            </BackgroundColorWrapper>
        </ThemeContextWrapper>
    );
};

root.render(<App />);
