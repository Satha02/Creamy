import React, { useState, useEffect } from 'react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        const observerOptions = {
            threshold: 0.3
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    let id = entry.target.id || 'home';
                    if (id === 'pongal-event') id = 'anniversary'; // Map Pongal to Events nav item
                    setActiveSection(id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const sections = ['home', 'anniversary', 'pongal-event', 'creations', 'menu', 'location', 'about'];
        sections.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, []);

    const navLinks = [
        { name: 'Home', href: '#', id: 'home' },
        { name: 'Events', href: '#anniversary', id: 'anniversary' },
        { name: 'Creations', href: '#creations', id: 'creations' },
        { name: 'Menu', href: '#menu', id: 'menu' },
        { name: 'Find Us', href: '#location', id: 'location' }, // Added 'Find Us' link
        { name: 'About', href: '#about', id: 'about' } // Changed 'Visit Us' to 'About' for consistency with new structure
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
                    fontSize: 'clamp(0.8rem, 3.8vw, 1.2rem)', // Even smaller on ultra-mobile
                    fontWeight: '900',
                    letterSpacing: 'clamp(0.5px, 1vw, 2px)', // Tighter tracking on mobile
                    textTransform: 'uppercase',
                    zIndex: '2001'
                }}>
                    Creamy <span style={{ color: 'var(--accent)' }}>Creations</span>
                </div>

                <nav className="desktop-nav" style={{ display: 'flex', gap: '3rem' }}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="uppercase"
                            style={{
                                fontSize: '0.75rem',
                                fontWeight: '700',
                                color: activeSection === link.id ? 'var(--accent)' : '#fff',
                                transition: 'all 0.3s',
                                position: 'relative',
                                letterSpacing: '2px'
                            }}
                        >
                            {link.name}
                            {activeSection === link.id && (
                                <div style={{
                                    position: 'absolute',
                                    bottom: '-8px',
                                    left: '0',
                                    width: '100%',
                                    height: '2px',
                                    background: 'var(--accent)',
                                    borderRadius: '10px'
                                }}></div>
                            )}
                        </a>
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
                                color: activeSection === link.id ? 'var(--accent)' : '#fff',
                                opacity: isMenuOpen ? '1' : '0',
                                transition: 'all 0.4s ease'
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
