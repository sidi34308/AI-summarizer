import React from 'react';
import logo from './logo.svg';

const Hero = () => {
    return (
        <header className='w-full flex justify-center flex-col '>
            <nav className='flex justify-between items-center w-full mb-10 pt-3'>
                <img src={logo} alt="sum_logo" className='w-16 object-contain' />
                <button
                    type="button" className="black_btn font-semibold" onClick={() =>
                        window.open('https://github.com')}>GitHub
                </button>
            </nav>
            <h1 className='head_text rtl '>
                <span className='text-blue-500'>مُوجَــز </span>
                الذكاء الاصطناعي يختصر لك الإنترنت في ثوانٍ!
            </h1>
            <h2 className='mt-5 text-1xl text-gray-600 sm:text-1xl text-center ltr rtl'>
                مُوجَز هو موقع متقدم يستخدم تقنيات الذكاء الاصطناعي لتلخيص محتوى المواقع الإلكترونية بدقة وسرعة. سواء كنت طالبًا، باحثًا، أو محترفًا يحتاج إلى توفير الوقت، مُوجَز هو الحل الأمثل لك.
            </h2>
        </header>
    );
}

export default Hero;
