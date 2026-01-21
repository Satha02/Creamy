import React, { useEffect, useState } from 'react';

const PongalEvent = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        // Dynamically import all images from assets/pongal
        const imageModules = import.meta.glob('../assets/pongal/*.{png,jpg,jpeg,webp}', { eager: true });
        const imageUrls = Object.values(imageModules).map(module => module.default);
        setImages(imageUrls);
    }, []);

    return (
        <section id="pongal-event" style={{
            padding: 'clamp(40px, 8vw, 100px) 0',
            background: 'linear-gradient(180deg, #1a1412 0%, #130d0c 100%)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 6vw, 4rem)' }}>
                    <div style={{
                        display: 'inline-block',
                        color: 'var(--accent)',
                        fontSize: '0.8rem',
                        fontWeight: '700',
                        letterSpacing: '4px',
                        marginBottom: '1rem',
                        textTransform: 'uppercase'
                    }}>
                        Special Celebrations
                    </div>
                    <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', marginBottom: '1rem', textTransform: 'uppercase', fontWeight: '900' }}>
                        Tamil <span style={{ color: 'var(--accent)' }}>Thai Pongal</span> Day 2026
                    </h2>
                    <div style={{ width: '60px', height: '4px', background: 'var(--accent)', margin: '0 auto', borderRadius: '10px' }}></div>
                </div>

                <div className="pongal-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                }}>
                    {images.map((src, index) => (
                        <div key={index} className="pongal-item-wrapper" style={{
                            opacity: 0,
                            animation: `fadeInRotate 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards ${index * 0.15}s`
                        }}>
                            <div className="pongal-card" style={{
                                position: 'relative',
                                background: 'rgba(255, 255, 255, 0.02)',
                                padding: '15px',
                                borderRadius: '4px',
                                border: '1px solid rgba(200, 169, 126, 0.15)',
                                transition: 'all 0.4s ease',
                                overflow: 'hidden'
                            }}>
                                <div style={{
                                    width: '100%',
                                    aspectRatio: '4/5',
                                    overflow: 'hidden',
                                    borderRadius: '2px'
                                }}>
                                    <img
                                        src={src}
                                        alt={`Pongal Celebration ${index + 1}`}
                                        loading="lazy"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            transition: 'transform 0.6s ease'
                                        }}
                                    />
                                </div>
                                <div style={{
                                    marginTop: '15px',
                                    textAlign: 'center',
                                    borderTop: '1px solid rgba(200, 169, 126, 0.1)',
                                    paddingTop: '12px'
                                }}>
                                    <span style={{
                                        color: 'var(--accent)',
                                        fontSize: '0.7rem',
                                        fontWeight: '800',
                                        letterSpacing: '2px',
                                        textTransform: 'uppercase'
                                    }}>
                                        Pongal Moments
                                    </span>
                                </div>

                                {/* Corner Decorations */}
                                <div style={{
                                    position: 'absolute',
                                    top: '5px',
                                    right: '5px',
                                    width: '20px',
                                    height: '20px',
                                    borderTop: '2px solid var(--accent)',
                                    borderRight: '2px solid var(--accent)',
                                    opacity: 0.3
                                }}></div>
                                <div style={{
                                    position: 'absolute',
                                    bottom: '5px',
                                    left: '5px',
                                    width: '20px',
                                    height: '20px',
                                    borderBottom: '2px solid var(--accent)',
                                    borderLeft: '2px solid var(--accent)',
                                    opacity: 0.3
                                }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>
                {`
                .pongal-card:hover {
                    box-shadow: 0 15px 35px rgba(0,0,0,0.4);
                    border-color: var(--accent);
                    transform: translateY(-8px);
                    background: rgba(255, 255, 255, 0.04);
                }
                .pongal-card:hover img {
                    transform: scale(1.08);
                }
                
                @keyframes fadeInRotate {
                    from {
                        opacity: 0;
                        transform: translateY(40px) rotate(2deg);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) rotate(0deg);
                    }
                }

                @media (max-width: 600px) {
                    .pongal-grid {
                        grid-template-columns: 1fr !important;
                        gap: 1.5rem !important;
                    }
                }
                `}
            </style>
        </section>
    );
};

export default PongalEvent;
