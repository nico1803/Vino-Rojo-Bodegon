import React from 'react';

export default function Footer () {
    return (
        <footer className="bg-[#705432] text-white">
            <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#614C3C] py-7">
                <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
                    <span className="text-red-400">Vino Rojo</span> Bodegon
                </h1>
                <div>
                    <input
                        type="text"
                        placeholder=""
                        className="text-gray-800
                        sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
                    />
                    <button className="bg-red-400 hover:bg-red-500 duration-300 px-5 py-2.5 rounded-md text-white md:w-auto w-full">
                    Suscribirte
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8">
                <span>© 2023. All rights reserved.</span>
                <span>Contacto</span>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.9652579510075!2d-59.72594984918735!3d-33.658062080620326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95ba1898cde37a09%3A0x5af68ac2a2ffdd61!2sVino%20Rojo!5e0!3m2!1ses-419!2sar!4v1674078948700!5m2!1ses-419!2sar" width="400" height="300"></iframe>
            </div>
        </footer>
    )
};