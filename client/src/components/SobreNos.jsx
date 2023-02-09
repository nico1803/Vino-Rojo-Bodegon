import React from 'react'

export default function SobreNos() {
  return (
    <div
        className="bg-primary py-10 px-4 md:px-0 text-center md:mt-10 "
        id="contact"
      >
        <h1 className="text-white text-3xl md:text-3xl font-extrabold font-display mb-8">
          VINO <span className="text-red-600 text-3xl md:text-3xl font-extrabold font-display ">ROJO</span> 
        </h1>
        <p className="text-white text-xl   md:w-1/2 lg:w-1/2 m-auto mb-10">
         Vino Rojo Bodegon se encuentra en la ciudad de San Pedro provincia de Buenos Aires Argentina sobre el río Paraná, ofrecemos las mejores carnes asadas de la zona con sabores unicos e inigualables, acompañado solo de los mejores vinos de las regiones de cuyo.
         Entre nuestros mejores platos
        destacan las pastas frescas hechas con la mejor materia prima de productores locales. 
        </p>
        <br />
        
        <div className=" w-full mt-10 md:w-1/3 mx-auto sm:flex sm:flex-col sm:justify-center sm:items-center pb-8 border-b border-borderLight">
          <p className={`text-emerald-300 text-m mr-3 mb-4`}>
           Nuestro Staff esta compuesto por profesionales certificados en gastronomia regional e internacional
          </p>
          <div className="mt-3 sm:mt-0 flex justify-center md:block">
            <img src="" alt="" srcset="" />
          </div>
        </div>
        <p className="text-primaryLight text-xs mt-6">© 2022 V.R.B</p>
          
      </div>
  )
}

