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
        <iframe title='myFrame' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.9652579510075!2d-59.72594984918735!3d-33.658062080620326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95ba1898cde37a09%3A0x5af68ac2a2ffdd61!2sVino%20Rojo!5e0!3m2!1ses-419!2sar!4v1674078948700!5m2!1ses-419!2sar" width="550" height="380" className='mx-auto' /> 
        <br />
        <a href="tel:+34678567876" className='text-2xl md:text-3xl '>LLAMENOS!</a>
        
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

