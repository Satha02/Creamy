import React from 'react';
import anniversaryVideo from '../assets/creamy.mp4';

const AnniversarySection = () => {
    return (
        <section id="anniversary" style={{
            padding: 'clamp(60px, 10vw, 120px) 0',
            background: 'linear-gradient(180deg, #130d0c 0%, #1a1412 100%)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <style>
                {`
                .anniversary-card {
                    background: rgba(255, 255, 255, 0.03);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(200, 169, 126, 0.2);
                    padding: clamp(2rem, 5vw, 4rem);
                    border-radius: 4px;
                    position: relative;
                    z-index: 2;
                    max-width: 900px;
                    margin: 0 auto;
                    text-align: center;
                }
                .prize-list {
                    list-style: none;
                    padding: 0;
                    margin: 2rem 0;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 1.5rem;
                }
                .prize-item {
                    padding: 1.5rem;
                    background: rgba(200, 169, 126, 0.05);
                    border: 1px solid rgba(200, 169, 126, 0.1);
                    transition: all 0.3s ease;
                }
                .prize-item:hover {
                    background: rgba(200, 169, 126, 0.1);
                    border-color: var(--accent);
                    transform: translateY(-5px);
                }
                .video-container {
                    margin-top: 3rem;
                    width: 100%;
                    max-width: 800px;
                    margin-left: auto;
                    margin-right: auto;
                    aspect-ratio: 16 / 9;
                    background: #000;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.4);
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 8px;
                    overflow: hidden;
                }
                .anniversary-glow {
                    position: absolute;
                    width: 400px;
                    height: 400px;
                    background: var(--accent);
                    filter: blur(150px);
                    opacity: 0.1;
                    z-index: 1;
                    pointer-events: none;
                }
                @media (max-width: 768px) {
                    .prize-list {
                        grid-template-columns: 1fr;
                    }
                }
                `}
            </style>

            <div className="container">
                <div className="anniversary-glow" style={{ top: '-10%', left: '-10%' }}></div>
                <div className="anniversary-glow" style={{ bottom: '-10%', right: '-10%' }}></div>

                <div className="anniversary-card">
                    <div style={{
                        color: 'var(--accent)',
                        fontSize: '0.8rem',
                        fontWeight: '700',
                        letterSpacing: '4px',
                        marginBottom: '1rem',
                        textTransform: 'uppercase'
                    }}>
                        Limited Time Event
                    </div>

                    <h2 style={{
                        fontSize: 'clamp(2rem, 6vw, 3.5rem)',
                        marginBottom: '1rem',
                        fontWeight: '900',
                        textTransform: 'uppercase',
                        lineHeight: '1.1'
                    }}>
                        Creamy's <span style={{ color: 'var(--accent)' }}>5th Anniversary</span> Celebration
                    </h2>

                    <p style={{
                        fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                        color: 'var(--text-dim)',
                        marginBottom: '3rem',
                        letterSpacing: '1px'
                    }}>
                        18 Gift Vouchers For The Lucky Customers
                    </p>

                    <div className="prize-list">
                        <div className="prize-item">
                            <div style={{ color: 'var(--accent)', fontSize: '0.7rem', fontWeight: '800', marginBottom: '0.5rem' }}>1ST PRIZE</div>
                            <div style={{ fontSize: '1.25rem', fontWeight: '700' }}>Rs. 20,000/-</div>
                            <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>Cash Voucher</div>
                        </div>
                        <div className="prize-item">
                            <div style={{ color: 'var(--accent)', fontSize: '0.7rem', fontWeight: '800', marginBottom: '0.5rem' }}>2ND PRIZE</div>
                            <div style={{ fontSize: '1.25rem', fontWeight: '700' }}>Rs. 15,000/-</div>
                            <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>Cash Voucher</div>
                        </div>
                        <div className="prize-item">
                            <div style={{ color: 'var(--accent)', fontSize: '0.7rem', fontWeight: '800', marginBottom: '0.5rem' }}>3RD PRIZE</div>
                            <div style={{ fontSize: '1.25rem', fontWeight: '700' }}>Rs. 10,000/-</div>
                            <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>Cash Voucher</div>
                        </div>
                    </div>

                    <div style={{
                        padding: '1.5rem',
                        background: 'rgba(255,255,255,0.02)',
                        border: '1px dashed rgba(200, 169, 126, 0.3)',
                        marginBottom: '2rem'
                    }}>
                        <p style={{ margin: 0, fontSize: '0.95rem', fontWeight: '500' }}>
                            Another <span style={{ color: 'var(--accent)', fontWeight: '700' }}>15 Lucky Customers</span> Will Win The <span style={{ color: 'var(--accent)', fontWeight: '700' }}>Rs. 1,000/-</span> Creamy Voucher.
                        </p>
                    </div>

                    <div style={{
                        fontSize: '0.85rem',
                        color: 'var(--text-dim)',
                        fontStyle: 'italic',
                        marginBottom: '1rem'
                    }}>
                        Eligible Bill Period: 17th of January To 27th of January 2026
                    </div>

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                        color: 'var(--accent)',
                        fontWeight: '700',
                        fontSize: '0.9rem',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                    }}>
                        <span>See The Video For More Details</span>
                        <span style={{ fontSize: '1.2rem' }}>↓</span>
                    </div>

                    <div className="video-container">
                        <video
                            src={anniversaryVideo}
                            controls
                            autoPlay
                            muted
                            loop
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        >
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AnniversarySection;
