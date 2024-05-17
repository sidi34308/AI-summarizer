import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black py-4 text-center text-white flex justify-between p-10 text-semibold">
            <p className="mb-2">
                Made by <a href="https://github.com/sidi34308?tab=repositories" className="underline hover:text-blue-400">Sidi Chaikh</a>
            </p>
            <p>
                Powered by <a href="https://openai.com" className="underline hover:text-blue-400">OpenAI</a>
            </p>
        </footer>
    );
};

export default Footer;
