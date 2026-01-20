import React, { useState, useEffect } from 'react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'Menu', href: '#menu' },
        { name: 'Visit Us', href: '#about' }
    ];

    return (
        <header style={{
            position: 'fixed',
            top: '0',
            width: '100%',
            zIndex: '2000',
            padding: isScrolled ? '1rem 0' : '2rem 0',
            background: isScrolled ? '#1a1110' : 'transparent',
            boxShadow: isScrolled ? '0 10px 30px rgba(0,0,0,0.5)' : 'none',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{
                    fontSize: 'clamp(0.9rem, 4vw, 1.2rem)', // Smaller on mobile to prevent overflow
                    fontWeight: '900',
                    letterSpacing: 'clamp(1px, 1vw, 3px)',
                    textTransform: 'uppercase',
                    zIndex: '2001'
                }}>
                    Creamy <span style={{ color: 'var(--accent)' }}>Creations</span>
                </div>

                {/* Desktop Nav */}
                <nav className="desktop-nav" style={{ display: 'flex', gap: '3rem' }}>
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="uppercase" style={{
                            fontSize: '0.8rem',
                            fontWeight: '600',
                            color: link.name === 'Home' ? 'var(--accent)' : '#fff',
                            transition: 'color 0.3s'
                        }}>{link.name}</a>
                    ))}
                </nav>

                {/* Hamburger Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    style={{
                        display: 'none', // Managed by CSS media query
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '8px', // Reduced padding
                        zIndex: '2001',
                        flexDirection: 'column',
                        gap: '5px', // Reduced gap
                        alignSelf: 'center'
                    }}
                    className="mobile-toggle"
                >
                    <div style={{
                        width: '22px', // Slightly smaller
                        height: '1.5px', // Refined thickness
                        background: '#fff',
                        transition: '0.3s',
                        transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
                    }}></div>
                    <div style={{
                        width: '22px',
                        height: '1.5px',
                        background: '#fff',
                        transition: '0.3s',
                        opacity: isMenuOpen ? '0' : '1'
                    }}></div>
                    <div style={{
                        width: '22px',
                        height: '1.5px',
                        background: '#fff',
                        transition: '0.3s',
                        transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none'
                    }}></div>
                </button>

                {/* Mobile Nav Overlay */}
                <div style={{
                    position: 'fixed',
                    top: '0',
                    right: isMenuOpen ? '0' : '-100%',
                    width: '100%',
                    height: '100vh',
                    background: '#1a1110',
                    zIndex: '2000',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '2.5rem',
                    transition: '0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    visibility: isMenuOpen ? 'visible' : 'hidden'
                }}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            style={{
                                fontSize: '1.5rem',
                                fontWeight: '800',
                                textTransform: 'uppercase',
                                letterSpacing: '4px',
                                color: isMenuOpen ? '#fff' : 'transparent'
                            }}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>

            <style>
                {`
                @media (max-width: 768px) {
                    .desktop-nav { display: none !important; }
                    .mobile-toggle { display: flex !important; }
                }
                `}
            </style>
        </header>
    );
};

export default Header;
