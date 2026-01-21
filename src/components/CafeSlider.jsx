import React, { useEffect, useState } from 'react';

const CafeSlider = () => {
    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const imageModules = import.meta.glob('../assets/cafephotos/*.{jpeg,jpg,png,webp}', { eager: true });
        const imageUrls = Object.values(imageModules).map(module => module.default);
        setImages(imageUrls);

        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % imageUrls.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    if (images.length === 0) return null;

    return (
        <section id="cafe-slider" style={{
            height: '80vh',
            width: '100%',
            position: 'relative',
            overflow: 'hidden',
            background: '#000'
        }}>
            <div style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                transition: 'transform 1s cubic-bezier(0.645, 0.045, 0.355, 1)',
                transform: `translateX(-${currentIndex * 100}%)`
            }}>
                {images.map((src, index) => (
                    <div key={index} style={{
                        minWidth: '100%',
                        height: '100%',
                        position: 'relative'
                    }}>
                        <img
                            src={src}
                            alt={`Cafe View ${index + 1}`}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                filter: 'brightness(0.7)'
                            }}
                        />
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 40%, rgba(0,0,0,0.8) 100%)'
                        }}></div>
                    </div>
                ))}
            </div>

            {/* Premium Content Overlay */}
            <div className="container" style={{
                position: 'absolute',
                bottom: '10%',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 10,
                textAlign: 'center',
                color: '#fff'
            }}>
                <div style={{
                    opacity: 0,
                    animation: 'fadeInUp 1s ease forwards 0.5s'
                }}>
                    <div style={{
                        fontSize: '0.8rem',
                        fontWeight: '700',
                        letterSpacing: '5px',
                        textTransform: 'uppercase',
                        color: 'var(--accent)',
                        marginBottom: '1rem'
                    }}>Atmosphere</div>
                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
                        fontWeight: '900',
                        textTransform: 'uppercase',
                        lineHeight: '1',
                        marginBottom: '1.5rem'
                    }}>Experience the <br /> <span style={{ color: 'var(--accent)' }}>Creamy</span> Ambience</h2>
                </div>
            </div>

            {/* Indicators */}
            <div style={{
                position: 'absolute',
                bottom: '30px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: '15px',
                zIndex: 20
            }}>
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        style={{
                            width: currentIndex === index ? '40px' : '12px',
                            height: '4px',
                            background: currentIndex === index ? 'var(--accent)' : 'rgba(255,255,255,0.3)',
                            border: 'none',
                            borderRadius: '10px',
                            cursor: 'pointer',
                            transition: 'all 0.4s ease'
                        }}
                    />
                ))}
            </div>

            <style>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </section>
    );
};

export default CafeSlider;
