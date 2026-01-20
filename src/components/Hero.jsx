import React from 'react';
import coffeeHero from '../assets/coffee_hero.png';
import milkshakeHero from '../assets/milkshake_hero.png';

const Hero = () => {
    return (
        <section className="hero" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            padding: '120px 0 60px',
            overflow: 'hidden'
        }}>
            <style>
                {`
                @media (max-width: 968px) {
                    .hero {
                        padding: 100px 0 40px !important;
                        min-height: auto !important;
                    }
                    .hero-grid {
                        grid-template-columns: 1fr !important;
                        text-align: center !important;
                        gap: 2rem !important;
                    }
                    .hero-content-left {
                        text-align: center !important;
                        order: 2;
                        margin-top: 1rem;
                    }
                    .hero-image-right {
                        order: 1;
                        max-width: 320px;
                        margin: 0 auto;
                    }
                    .milkshake-popup {
                        width: 120px !important;
                        height: 150px !important;
                        right: -5px !important;
                        bottom: -5px !important;
                    }
                    .hero-buttons {
                        justify-content: center;
                    }
                    h1 {
                        line-height: 1.1 !important;
                        margin-bottom: 2rem !important;
                    }
                }
                @media (max-width: 480px) {
                    .hero-image-right {
                        max-width: 260px;
                    }
                    .milkshake-popup {
                        width: 100px !important;
                        height: 130px !important;
                    }
                }
                `}
            </style>
            <div className="container hero-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(300px, 1.2fr) 1.5fr',
                gap: '4rem',
                alignItems: 'center',
                zIndex: '2',
                width: '100%'
            }}>
                {/* Left Side: Content */}
                <div className="hero-content-left">
                    <div style={{
                        display: 'inline-block',
                        background: 'rgba(200, 169, 126, 0.1)',
                        border: '1px solid var(--accent)',
                        color: 'var(--accent)',
                        padding: '0.4rem 1.2rem',
                        borderRadius: '2px',
                        fontSize: '0.7rem',
                        fontWeight: '700',
                        marginBottom: '1.5rem',
                        textTransform: 'uppercase',
                        letterSpacing: '3px'
                    }}>
                        Celebrating 5 Years of Sweetness
                    </div>
                    <h1 style={{
                        fontSize: 'clamp(3rem, 8vw, 5.5rem)',
                        lineHeight: '0.9',
                        fontWeight: '900',
                        marginBottom: '1.5rem',
                        textTransform: 'uppercase'
                    }}>
                        EVERYDAY<br />
                        WITH <span className="font-script" style={{
                            textTransform: 'none',
                            color: 'var(--accent)',
                            fontSize: 'clamp(3.5rem, 10vw, 7rem)',
                            marginLeft: '-10px',
                            display: 'inline-block',
                            marginTop: '0.5rem'
                        }}>Coffee</span>
                    </h1>
                    <p style={{
                        fontSize: '1rem',
                        color: 'var(--text-dim)',
                        maxWidth: '450px',
                        margin: '0 auto 2.5rem', // Center on mobile implicitly if parent is text-center
                        lineHeight: '1.8'
                    }}>
                        Experience the ultimate fusion of taste and chill. The perfect spot for locals and foreigners to relax with the best coffee, shakes, and juices in Jaffna.
                    </p>
                    <div className="hero-buttons" style={{ display: 'flex', gap: '1.5rem' }}>
                        <a href="#menu" className="btn btn-primary uppercase" style={{ background: '#5d3a2e' }}>Explore Menu</a>
                        <a href="#about" className="btn btn-outline uppercase">Our Story</a>
                    </div>
                </div>

                {/* Right Side: Image with organic mask */}
                <div className="hero-image-right" style={{ position: 'relative', width: '100%' }}>
                    <div className="image-blob" style={{
                        width: '100%',
                        paddingBottom: '100%',
                        position: 'relative',
                        background: '#2a1a18',
                        borderRadius: '50% 50% 30% 70% / 60% 40% 60% 40%',
                        overflow: 'hidden',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                    }}>
                        <img
                            src={coffeeHero}
                            alt="Premium Coffee"
                            style={{
                                position: 'absolute',
                                width: '120%',
                                height: '120%',
                                objectFit: 'cover',
                                top: '-10%',
                                left: '-10%'
                            }}
                        />
                    </div>
                    {/* Secondary Floating Image */}
                    <div className="milkshake-popup" style={{
                        position: 'absolute',
                        bottom: '-20px',
                        right: '-20px',
                        width: '200px',
                        height: '250px',
                        background: '#2a1a18',
                        borderRadius: '100px 100px 0 0',
                        overflow: 'hidden',
                        border: '5px solid var(--secondary)',
                        boxShadow: 'var(--shadow)',
                        zIndex: '3'
                    }}>
                        <img
                            src={milkshakeHero}
                            alt="Signature Milkshake"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* Decorative Background Elements */}
            <div style={{
                position: 'absolute',
                top: '15%',
                right: '0',
                width: '400px',
                height: '400px',
                background: 'var(--primary)',
                filter: 'blur(150px)',
                opacity: '0.1',
                zIndex: '1'
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '10%',
                left: '-5%',
                width: '300px',
                height: '300px',
                background: 'var(--accent)',
                filter: 'blur(120px)',
                opacity: '0.05',
                zIndex: '1'
            }}></div>

            {/* Grid Pattern */}
            <div style={{
                position: 'absolute',
                right: '5%',
                bottom: '20%',
                width: '200px',
                height: '200px',
                backgroundImage: 'radial-gradient(var(--glass-border) 1px, transparent 1px)',
                backgroundSize: '20px 20px',
                opacity: '0.4',
                zIndex: '1'
            }}></div>
        </section>
    );
};

export default Hero;
