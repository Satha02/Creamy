import React, { useState } from 'react';
import { menuData } from '../data/menuData';

const Menu = () => {
    const [activeTab, setActiveTab] = useState('anniversary');

    return (
        <section id="menu" style={{ padding: '120px 0', background: 'var(--secondary)', position: 'relative' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h2 style={{ fontSize: '3.5rem', marginBottom: '1rem', textTransform: 'uppercase', fontWeight: '900' }}>
                        Our <span style={{ color: 'var(--accent)' }}>Menu</span>
                    </h2>
                    <p style={{ color: 'var(--text-dim)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                        Handcrafted delicacies to tantalize your taste buds, prepared with the finest ingredients.
                    </p>
                </div>

                {/* Tabs */}
                <div style={{
                    display: 'flex',
                    gap: '2rem',
                    overflowX: 'auto',
                    paddingBottom: '2rem',
                    marginBottom: '4rem',
                    justifyContent: 'center',
                    borderBottom: '1px solid var(--glass-border)'
                }}>
                    {Object.keys(menuData).map((key) => (
                        <button
                            key={key}
                            onClick={() => setActiveTab(key)}
                            style={{
                                padding: '1rem 0',
                                background: 'transparent',
                                color: activeTab === key ? 'var(--accent)' : '#fff',
                                whiteSpace: 'nowrap',
                                fontWeight: '700',
                                fontSize: '0.8rem',
                                textTransform: 'uppercase',
                                letterSpacing: '2px',
                                transition: 'all 0.3s ease',
                                borderBottom: activeTab === key ? '2px solid var(--accent)' : '2px solid transparent',
                                marginBottom: '-2.1rem'
                            }}
                        >
                            {menuData[key].title}
                        </button>
                    ))}
                </div>

                {/* Menu Grid */}
                <div className="menu-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                    gap: '3rem'
                }}>
                    {menuData[activeTab].items.map((item, index) => (
                        <div key={index} style={{
                            padding: '0 0 1.5rem',
                            borderBottom: '1px solid rgba(255,255,255,0.05)',
                            transition: 'all 0.3s ease',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.8rem'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                                <h3 style={{
                                    fontSize: '1.1rem',
                                    color: '#fff',
                                    textTransform: 'uppercase',
                                    fontWeight: '700',
                                    letterSpacing: '1px'
                                }}>
                                    {item.name}
                                    {item.note && (
                                        <span style={{
                                            marginLeft: '1rem',
                                            fontSize: '0.6rem',
                                            color: 'var(--accent)',
                                            border: '1px solid var(--accent)',
                                            padding: '0.2rem 0.5rem',
                                            borderRadius: '2px'
                                        }}>
                                            {item.note}
                                        </span>
                                    )}
                                </h3>
                                <div style={{
                                    flexGrow: 1,
                                    borderBottom: '1px dotted rgba(255,255,255,0.2)',
                                    margin: '0 1rem',
                                    height: '1px'
                                }}></div>
                                <span style={{ fontWeight: '800', color: 'var(--accent)', fontSize: '1rem' }}>
                                    {item.price}
                                </span>
                            </div>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', fontStyle: 'italic' }}>
                                Freshly prepared with premium ingredients.
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Menu;
