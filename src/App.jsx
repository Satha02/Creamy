import React from 'react'
import Header from './components/Header'
import CafeSlider from './components/CafeSlider'
import Hero from './components/Hero'
import AnniversarySection from './components/AnniversarySection'
import PongalEvent from './components/PongalEvent'
import CreationsGallery from './components/CreationsGallery'
import Menu from './components/Menu'
import Location from './components/Location'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <CafeSlider />
        <Hero />
        <AnniversarySection />
        <PongalEvent />
        <CreationsGallery />
        <Menu />
        <Location />

        {/* About Section */}
        <section id="about" style={{ padding: 'clamp(60px, 10vw, 120px) 0', textAlign: 'center', background: '#130d0c' }}>
          <div className="container">
            <h2 style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', marginBottom: 'clamp(2rem, 5vw, 4rem)', textTransform: 'uppercase', fontWeight: '900' }}>
              The <span style={{ color: 'var(--accent)' }}>Experience</span>
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '1100px', margin: '0 auto' }}>
              <div style={{ padding: 'clamp(1.5rem, 5vw, 3rem)', border: '1px solid var(--accent)', background: 'transparent', textAlign: 'left', borderRadius: '15px' }}>
                <div style={{ color: 'var(--accent)', fontSize: '0.7rem', fontWeight: '700', letterSpacing: '3px', marginBottom: '1rem', textTransform: 'uppercase' }}>Milestone</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', letterSpacing: '1px' }}>Celebrating 5 Years</h3>
                <p style={{ fontSize: '0.95rem', marginBottom: '2rem', color: 'var(--text-dim)', lineHeight: '1.8' }}>
                  Join us as we celebrate 5 incredible years of serving the finest treats in Jaffna.
                  Special anniversary goodies and surprises await you in-store!
                </p>
                <a href="#menu" style={{ color: 'var(--accent)', fontWeight: '700', textDecoration: 'none', fontSize: '0.8rem', letterSpacing: '1px' }} className="uppercase">View Specials →</a>
              </div>

              <div style={{ padding: 'clamp(1.5rem, 5vw, 3rem)', background: 'rgba(255,255,255,0.02)', textAlign: 'left', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '15px' }}>
                <div style={{ color: 'var(--accent)', fontSize: '0.7rem', fontWeight: '700', letterSpacing: '3px', marginBottom: '1rem', textTransform: 'uppercase' }}>Our Vision</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', letterSpacing: '1px' }}>Quality & Creaminess</h3>
                <p style={{ fontSize: '0.95rem', marginBottom: '2rem', color: 'var(--text-dim)', lineHeight: '1.8' }}>
                  Our mission is to bring a smile to every face with our handcrafted delicacies.
                  We believe in quality, innovation, and the joy of shared moments.
                </p>
                <a href="#location" style={{ color: 'var(--accent)', fontWeight: '700', textDecoration: 'none', fontSize: '0.8rem', letterSpacing: '1px' }} className="uppercase">Find Our Shops →</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer style={{ padding: '60px 0', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', background: 'var(--secondary)' }}>
        <style>
          {`
          @media (max-width: 600px) {
            .footer-social { 
              flex-direction: column !important; 
              gap: 1.2rem !important; 
            }
            .footer-social span { display: none !important; }
          }
          `}
        </style>
        <div className="container">
          <div className="footer-social" style={{
            marginBottom: '3rem',
            display: 'flex',
            gap: 'clamp(1rem, 5vw, 2.5rem)',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            padding: '0 1rem'
          }}>
            <a href="https://web.facebook.com/CreamyCreations1808" target="_blank" rel="noopener noreferrer" className="uppercase" style={{
              color: 'var(--accent)',
              fontSize: 'clamp(0.65rem, 2vw, 0.75rem)',
              fontWeight: '700',
              textDecoration: 'none',
              letterSpacing: '1px'
            }}>
              Facebook
            </a>
            <span style={{ color: 'rgba(255,255,255,0.1)', display: 'inline-block' }}>|</span>
            <a href="#" className="uppercase" style={{ color: 'var(--text-dim)', fontSize: 'clamp(0.65rem, 2vw, 0.75rem)', fontWeight: '700', letterSpacing: '1px' }}>Instagram</a>
            <span style={{ color: 'rgba(255,255,255,0.1)', display: 'inline-block' }}>|</span>
            <a href="#" className="uppercase" style={{ color: 'var(--text-dim)', fontSize: 'clamp(0.65rem, 2vw, 0.75rem)', fontWeight: '700', letterSpacing: '1px' }}>Twitter</a>
          </div>
          <p style={{ color: '#444', fontSize: '0.65rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '2px', padding: '0 1rem' }}>
            &copy; 2026 Creamy Creation & Creamy Cafe. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
