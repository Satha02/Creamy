import React, { useState } from 'react';
import { menuData } from '../data/menuData';

// Import menu images
import menuImg1 from '../assets/menu/WhatsApp Image 2026-01-21 at 12.08.13.jpeg';
import menuImg2 from '../assets/menu/WhatsApp Image 2026-01-21 at 12.08.13 (1).jpeg';
import menuImg3 from '../assets/menu/WhatsApp Image 2026-01-21 at 12.08.13 (2).jpeg';
import menuImg4 from '../assets/menu/WhatsApp Image 2026-01-21 at 12.08.14.jpeg';

const Menu = () => {
    const [activeTab, setActiveTab] = useState('all');
    const [selectedImage, setSelectedImage] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const menuImages = [menuImg1, menuImg2, menuImg3, menuImg4];

    const categories = [
        { id: 'all', title: 'All' },
        ...Object.keys(menuData).map(key => ({
            id: key,
            title: menuData[key].title
        }))
    ];

    const handleCategoryClick = (id) => {
        setActiveTab(id);
        setIsDropdownOpen(false);
    };

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

                {/* Category Navigation */}
                <div className="category-nav-wrapper" style={{
                    marginBottom: '4rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '1rem',
                    flexWrap: 'wrap'
                }}>
                    <style>
                        {`
                        @keyframes fadeInUp {
                            from { opacity: 0; transform: translateY(20px); }
                            to { opacity: 1; transform: translateY(0); }
                        }
                        .animate-fade-in {
                            animation: fadeInUp 0.5s ease forwards;
                        }
                        .nav-btn {
                            padding: 0.8rem 2rem;
                            background: var(--glass);
                            color: #fff;
                            border: 1px solid var(--glass-border);
                            border-radius: 50px;
                            font-weight: 700;
                            text-transform: uppercase;
                            letter-spacing: 2px;
                            transition: all 0.3s ease;
                            cursor: pointer;
                            font-size: 0.85rem;
                        }
                        .nav-btn.active {
                            background: var(--accent);
                            color: var(--secondary);
                            border-color: var(--accent);
                            box-shadow: 0 5px 15px rgba(255, 171, 0, 0.3);
                        }
                        .nav-btn:hover:not(.active) {
                            background: rgba(255,255,255,0.1);
                            transform: translateY(-2px);
                        }
                        .dropdown-container {
                            position: relative;
                            min-width: 200px;
                        }
                        .dropdown-btn {
                            width: 100%;
                            padding: 0.8rem 1.5rem;
                            background: var(--glass);
                            color: #fff;
                            border: 1px solid var(--glass-border);
                            border-radius: 50px;
                            display: flex;
                            justify-content: space-between;
                            alignItems: center;
                            font-weight: 700;
                            text-transform: uppercase;
                            letter-spacing: 2px;
                            cursor: pointer;
                            font-size: 0.85rem;
                            transition: all 0.3s ease;
                        }
                        .dropdown-btn.active {
                            border-color: var(--accent);
                            color: var(--accent);
                        }
                        .dropdown-menu {
                            position: absolute;
                            top: 120%;
                            left: 50%;
                            transform: translateX(-50%);
                            width: 250px;
                            background: #1a1110;
                            border: 1px solid var(--glass-border);
                            border-radius: 15px;
                            z-index: 1000;
                            box-shadow: 0 15px 40px rgba(0,0,0,0.6);
                            overflow: hidden;
                            backdrop-filter: blur(10px);
                            opacity: 0;
                            visibility: hidden;
                            transition: all 0.3s ease;
                        }
                        .dropdown-menu.open {
                            opacity: 1;
                            visibility: visible;
                            top: 110%;
                        }
                        .dropdown-item {
                            width: 100%;
                            padding: 1rem 1.5rem;
                            text-align: left;
                            background: transparent;
                            color: #fff;
                            border: none;
                            border-bottom: 1px solid rgba(255,255,255,0.05);
                            font-weight: 600;
                            cursor: pointer;
                            transition: all 0.2s ease;
                            font-size: 0.8rem;
                            text-transform: uppercase;
                            letter-spacing: 1px;
                        }
                        .dropdown-item:hover {
                            background: var(--glass);
                            color: var(--accent);
                            padding-left: 1.8rem;
                        }
                        .dropdown-item.active {
                            color: var(--accent);
                            background: rgba(255, 171, 0, 0.1);
                        }
                        .dropdown-item:last-child {
                            border-bottom: none;
                        }
                        `}
                    </style>

                    {/* All Button */}
                    <button
                        className={`nav-btn ${activeTab === 'all' ? 'active' : ''}`}
                        onClick={() => {
                            setActiveTab('all');
                            setIsDropdownOpen(false);
                        }}
                    >
                        All
                    </button>

                    {/* Categories Dropdown */}
                    <div className="dropdown-container">
                        <button
                            className={`dropdown-btn ${activeTab !== 'all' ? 'active' : ''}`}
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                            <span>{activeTab === 'all' ? 'Categories' : categories.find(c => c.id === activeTab)?.title}</span>
                            <span style={{
                                transition: '0.3s',
                                transform: isDropdownOpen ? 'rotate(180deg)' : 'none',
                                marginLeft: '10px',
                                fontSize: '0.6rem'
                            }}>▼</span>
                        </button>

                        <div className={`dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
                            {categories.filter(c => c.id !== 'all').map((cat) => (
                                <button
                                    key={cat.id}
                                    className={`dropdown-item ${activeTab === cat.id ? 'active' : ''}`}
                                    onClick={() => handleCategoryClick(cat.id)}
                                >
                                    {cat.title}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>


                {/* Content Area */}
                <div className="menu-content-area">
                    {activeTab === 'all' ? (
                        /* Image Gallery for "All" */
                        <div className="menu-image-grid" style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                            gap: '2rem'
                        }}>
                            {menuImages.map((img, index) => (
                                <div
                                    key={index}
                                    onClick={() => setSelectedImage(img)}
                                    style={{
                                        cursor: 'pointer',
                                        borderRadius: '15px',
                                        overflow: 'hidden',
                                        border: '1px solid var(--glass-border)',
                                        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                        position: 'relative',
                                        opacity: 0,
                                        animation: `fadeInUp 0.5s ease forwards ${index * 0.1}s`
                                    }}
                                    className="menu-img-card"
                                >
                                    <img
                                        src={img}
                                        alt={`Menu ${index + 1}`}
                                        style={{ width: '100%', height: 'auto', display: 'block', transition: '0.5s' }}
                                    />
                                    <div className="overlay" style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: 'rgba(0,0,0,0.5)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        opacity: 0,
                                        transition: 'opacity 0.3s ease',
                                        backdropFilter: 'blur(4px)'
                                    }}>
                                        <div style={{ textAlign: 'center' }}>
                                            <div style={{
                                                color: 'var(--accent)',
                                                fontSize: '1.5rem',
                                                marginBottom: '0.5rem',
                                                transform: 'translateY(10px)',
                                                transition: '0.3s 0.1s'
                                            }} className="overlay-icon">🔍</div>
                                            <span style={{
                                                color: '#fff',
                                                fontWeight: '700',
                                                padding: '0.8rem 1.5rem',
                                                border: '1px solid rgba(255,255,255,0.3)',
                                                borderRadius: '50px',
                                                letterSpacing: '2px',
                                                fontSize: '0.8rem',
                                                display: 'inline-block',
                                                background: 'rgba(255,255,255,0.1)'
                                            }}>VIEW FULL MENU</span>
                                        </div>
                                    </div>
                                    <style>{`
                                        .menu-img-card:hover { transform: scale(1.03) translateY(-10px) !important; box-shadow: 0 30px 60px rgba(0,0,0,0.8); z-index: 10; }
                                        .menu-img-card:hover img { transform: scale(1.1); }
                                        .menu-img-card:hover .overlay { opacity: 1; }
                                        .menu-img-card:hover .overlay-icon { transform: translateY(0) !important; }
                                    `}</style>
                                </div>
                            ))}
                        </div>
                    ) : (
                        /* Text List for Categories */
                        <div className="menu-items-section">
                            <h3 className="animate-fade-in" style={{
                                color: 'var(--accent)',
                                fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
                                marginBottom: '4rem',
                                textAlign: 'center',
                                fontWeight: '900',
                                textTransform: 'uppercase',
                                letterSpacing: '5px',
                                textShadow: '0 10px 20px rgba(0,0,0,0.3)'
                            }}>
                                {menuData[activeTab].title}
                            </h3>
                            <div className="menu-grid" style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                                gap: '3rem'
                            }}>
                                {menuData[activeTab].items.map((item, index) => (
                                    <div key={index}
                                        className="animate-fade-in"
                                        style={{
                                            padding: '0 0 1.5rem',
                                            borderBottom: '1px solid rgba(255,255,255,0.05)',
                                            transition: 'all 0.3s ease',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '0.8rem',
                                            animationDelay: `${index * 0.05}s`
                                        }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                                            <h4 style={{
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
                                            </h4>
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
                    )}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div style={{
                    position: 'fixed',
                    inset: 0,
                    zIndex: 3000,
                    background: 'rgba(0,0,0,0.95)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2rem'
                }} onClick={() => setSelectedImage(null)}>
                    <button
                        style={{
                            position: 'absolute',
                            top: '20px',
                            right: '20px',
                            background: 'transparent',
                            color: '#fff',
                            fontSize: '2.5rem',
                            fontWeight: '300',
                            border: 'none',
                            cursor: 'pointer'
                        }}
                    >
                        ×
                    </button>
                    <img
                        src={selectedImage}
                        alt="Menu Full"
                        style={{
                            maxWidth: '100%',
                            maxHeight: '90vh',
                            boxShadow: '0 0 50px rgba(0,0,0,0.5)',
                            borderRadius: '10px'
                        }}
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </section>
    );
};

export default Menu;
