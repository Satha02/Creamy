import React from 'react';

const Location = () => {
    return (
        <section id="location" style={{ padding: 'clamp(60px, 10vw, 120px) 0', background: 'var(--secondary)', position: 'relative' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 8vw, 3.5rem)', marginBottom: '1rem', textTransform: 'uppercase', fontWeight: '900' }}>
                        Visit <span style={{ color: 'var(--accent)' }}>Us</span>
                    </h2>
                    <p style={{ color: 'var(--text-dim)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                        Join us at our cozy locations in the heart of Jaffna.
                    </p>
                </div>

                <div style={{
                    background: 'var(--glass)',
                    padding: '1.5rem',
                    borderRadius: '25px',
                    border: '1px solid var(--glass-border)',
                    overflow: 'hidden',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                    animation: 'fadeInUp 0.8s ease forwards'
                }}>
                    <div className="map-responsive" style={{
                        overflow: 'hidden',
                        paddingBottom: '56.25%',
                        position: 'relative',
                        height: 0,
                        borderRadius: '15px'
                    }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1966.864319053!2d80.0137!3d9.6658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe541094f31669%3A0xe7261a9994f31669!2sCreamy%20Creation!5e0!3m2!1sen!2slk!4v1705822345678!5m2!1sen!2slk"
                            style={{
                                left: 0,
                                top: 0,
                                height: '100%',
                                width: '100%',
                                position: 'absolute',
                                border: 0
                            }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Creamy Creation Cafe Location"
                        ></iframe>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '2rem',
                        marginTop: '2.5rem',
                        padding: '1rem'
                    }}>
                        <div style={{ textAlign: 'left' }}>
                            <h4 style={{ color: 'var(--accent)', marginBottom: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Main Branch</h4>
                            <p style={{ color: '#fff', lineHeight: '1.6' }}>
                                67/2, Kandy Road,<br />
                                Jaffna, Sri Lanka
                            </p>
                        </div>
                        <div style={{ textAlign: 'left' }}>
                            <h4 style={{ color: 'var(--accent)', marginBottom: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>City Branch</h4>
                            <p style={{ color: '#fff', lineHeight: '1.6' }}>
                                Hospital Road,<br />
                                Jaffna, Sri Lanka
                            </p>
                        </div>
                        <div style={{ textAlign: 'left' }}>
                            <h4 style={{ color: 'var(--accent)', marginBottom: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Contact Info</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <a href="tel:+94766587149" style={{ color: '#fff', textDecoration: 'none', transition: '0.3s' }} onMouseOver={(e) => e.target.style.color = 'var(--accent)'} onMouseOut={(e) => e.target.style.color = '#fff'}>076 658 7149</a>
                                <a href="tel:+94777179907" style={{ color: '#fff', textDecoration: 'none', transition: '0.3s' }} onMouseOver={(e) => e.target.style.color = 'var(--accent)'} onMouseOut={(e) => e.target.style.color = '#fff'}>077 717 9907</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .map-responsive iframe {
                    filter: grayscale(0.2) invert(0.9) contrast(0.9);
                    transition: 0.5s;
                }
                .map-responsive:hover iframe {
                    filter: grayscale(0) invert(0) contrast(1);
                }
            `}</style>
        </section>
    );
};

export default Location;
