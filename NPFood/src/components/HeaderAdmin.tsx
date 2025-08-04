import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const adminLinks = [
    { to: '/admin/managementHome', label: 'Home' },
    { to: '/admin/manageMenProducts', label: 'Product' },
    { to: '/admin/manageMenNews', label: 'News' },
    { to: '/admin/manageMenAbout', label: 'About' },
    { to: '/admin/manageMenContact', label: 'Contact' },
];

const HeaderAdmin: React.FC = () => {
    const location = useLocation();

    const handleLogout = () => {
        localStorage.removeItem("admin_logged_in");
        window.location.href = "/";
    };

    return (
        <header style={{ background: '#222', padding: '10px 0' }}>
            <nav style={{ display: 'flex', justifyContent: 'center', gap: '30px', alignItems: 'center' }}>
                {adminLinks.map(link => (
                    <Link
                        key={link.to}
                        to={link.to}
                        style={{
                            color: location.pathname === link.to ? '#fff' : '#bbb',
                            textDecoration: 'none',
                            fontWeight: location.pathname === link.to ? 'bold' : 'normal',
                            fontSize: '16px',
                        }}
                    >
                        {link.label}
                    </Link>
                ))}
                <button
                    onClick={handleLogout}
                    style={{
                        marginLeft: 40,
                        background: '#e53e3e',
                        color: '#fff',
                        border: 'none',
                        borderRadius: 6,
                        padding: '6px 18px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        fontSize: 16
                    }}
                >
                    Đăng xuất
                </button>
            </nav>
        </header>
    );
};

export default HeaderAdmin;