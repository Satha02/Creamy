import React, { useEffect, useState } from 'react';

const CreationsGallery = () => {
    const [images, setImages] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        // Dynamically import all images from assets/CP
        const imageModules = import.meta.glob('../assets/CP/*.{png,jpg,jpeg,webp}', { eager: true });
        const imageUrls = Object.values(imageModules).map(module => module.default);
        setImages(imageUrls);
    }, []);

    const displayedImages = showAll ? images : images.slice(0, 8);

    return (
        <section id="creations" style={{ padding: 'clamp(60px, 10vw, 120px) 0', background: 'var(--secondary)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 8vw, 5rem)' }}>
                    <h2 style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', marginBottom: '1.5rem', textTransform: 'uppercase', fontWeight: '900' }}>
                        Our <span style={{ color: 'var(--accent)' }}>Creations</span>
                    </h2>
                    <p style={{ color: 'var(--text-dim)', maxWidth: '600px', margin: '0 auto', fontSize: '1rem' }}>
                        A glimpse into the delicious items made specifically by the <span className="font-script" style={{ color: 'var(--accent)', fontSize: '1.2rem' }}>Creamy Creation</span> team.
                    </p>
                </div>

                <div className="gallery-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '1.5rem',
                }}>
                    {displayedImages.map((src, index) => (
                        <div key={index} className="gallery-item-wrapper" style={{
                            opacity: 0,
                            animation: `fadeInUp 0.6s ease forwards ${index * 0.05}s`
                        }}>
                            <div className="gallery-item glass-card" style={{
                                position: 'relative',
                                borderRadius: '20px',
                                overflow: 'hidden',
                                aspectRatio: '1/1',
                                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                                cursor: 'pointer',
                                border: '1px solid var(--glass-border)'
                            }}>
                                <img
                                    src={src}
                                    alt={`Creamy Creation Item ${index + 1}`}
                                    loading="lazy"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)'
                                    }}
                                />
                                <div className="overlay" style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)',
                                    opacity: 0,
                                    transition: 'opacity 0.3s ease',
                                    display: 'flex',
                                    alignItems: 'flex-end',
                                    padding: '1.5rem'
                                }}>
                                    <span style={{ color: 'var(--accent)', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>
                                        Creamy Creation
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {!showAll && images.length > 8 && (
                    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                        <button
                            onClick={() => setShowAll(true)}
                            className="btn btn-outline"
                            style={{
                                fontSize: '0.8rem',
                                letterSpacing: '3px',
                                textTransform: 'uppercase',
                                padding: '1rem 3rem',
                                border: '1px solid var(--accent)',
                                color: 'var(--accent)',
                                background: 'transparent',
                                transition: 'all 0.3s'
                            }}
                        >
                            See All Creations
                        </button>
                    </div>
                )}
            </div>

            <style>
                {`
                .gallery-item:hover {
                    transform: translateY(-10px) scale(1.02);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.4);
                    border-color: var(--accent);
                }
                .gallery-item:hover img {
                    transform: scale(1.1);
                }
                .gallery-item:hover .overlay {
                    opacity: 1;
                }
                
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @media (max-width: 600px) {
                    .gallery-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                        gap: 1rem !important;
                    }
                }
                `}
            </style>
        </section>
    );
};

export default CreationsGallery;
