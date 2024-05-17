import React, { useState, useEffect } from 'react';
import logo from './logo.svg';

const Header = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;

        setIsVisible(visible);
        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos, isVisible, handleScroll]);

    return (
        <header className={`w-full fixed top-0 left-0 z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <nav className='flex justify-between items-center w-full mb-1 backdrop-blur-xl bg-black bg-opacity-90 border-b border-gray-600 p-4'>
                <img src={logo} alt="sum_logo" className='w-12 object-contain' />
                <button
                    type="button"
                    className="text-white text-opacity-80 hover:text-opacity-100 font-regular"
                    onClick={() => window.open('https://github.com')}
                >
                    GitHub
                </button>
            </nav>
        </header>
    );
};

export default Header;
