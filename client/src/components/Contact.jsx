import React from 'react'

export default function Contact() {
  return (
    <div
        className="bg-primary py-10 px-4 md:px-0 text-center md:mt-10 "
        id="contact"
      >
        <h4 className="text-orange-900 text-2xl md:text-3xl font-extrabold font-display mb-8">
          No dudes en contactarnos
        </h4>
        <p className="text-orange-900 text-sm md:w-1/2 lg:w-1/4 m-auto mb-10">
         -brindamos atencion de 10/12-
        </p>
        <a href="tel:+34678567876">LLAMENOS!</a>
        
        <div className=" w-full mt-10 md:w-1/3 mx-auto sm:flex sm:flex-col sm:justify-center sm:items-center pb-8 border-b border-borderLight">
          <p className={`text-primaryLight text-m mr-3 mb-4`}>
            <a
              href="mailto:V.R.B@vinoMail.com"
              className="text-primaryLight"
            >
              V.R.B@vinoMail.com
            </a>
          </p>
          <div className="mt-3 sm:mt-0 flex justify-center md:block">
            
          </div>
        </div>
        <p className="text-primaryLight text-xs mt-6">© 2022 V.R.B</p>
      </div>
  )
}

