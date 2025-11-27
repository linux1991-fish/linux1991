// components/Sidebar.tsx
'use client'; // Usa componentes de cliente para el estado

import { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Icon } from 'lucide-react'; 
import SidebarItem from './SidebarItem'; // Lo crearás a continuación
import { MENU_ITEMS } from './sidebar_types';
import Image from 'next/image';
import { FaYoutube } from "react-icons/fa";
import { enviarEventoIdioma } from '@/components/change_language';
export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  // const [isIdioma, setIsIdioma] = useState(UseIdioma());

  // Clase CSS para controlar el ancho
  const sidebarWidthClass = isCollapsed ? 'w-10 p-0.5 md:w-20 md:p-1.5' : 'w-40 p-0.5 md:w-50 md:p-1.5 '; 
  const contentMarginClass = isCollapsed ? 'ml-2 md:ml-12' : 'ml-2 md:ml-42';

  const IconSize = isCollapsed ? 'w-10 h-8 md:w-20 md:h-16':'w-16 h-16 md:w-20 md:h-16 mt-10 md:mt-0';
  return (
    <>
      <div 
        className={` flex flex-col fixed top-0 left-0 h-full bg-[#f9a505] text-white  transition-all duration-300 z-10 ${sidebarWidthClass} ` }
      >
        {/* Logo/Header aquí */}

        <div className=" flex items-center justify-center h-16 mb-16 md:h-20 md:mb-12" 

        >
          <div className={` ${IconSize} bg-gray-700 rounded-lg relative transition-all duration-300 `}

                style={{ boxShadow:'-10px 10px 20px 5px #000'   }}
                // style={{ boxShadow:'0px 5px 15px #000'   }}
          >

      <Image
            src="/logo.png" // Ruta de tu imagen
        alt="Hamburguesa móvil"
        fill
        className="rounded-lg z-10"
        style={{ objectFit: "cover"   }}
      />
          </div>
        </div>
        
        {/* Lista de Ítems */}
        <nav className=' flex-1  flex flex-col justify-between'>
          <ul className='relative'>
            {MENU_ITEMS.map((item) => (
              <SidebarItem 
                key={item.id} 
                item={item} 
                isCollapsed={isCollapsed} 
              />
            ))}
          </ul>

          <div className='flex-1'>
            <div className={`${isCollapsed? '':'p-4 '}  justify-center items-center flex`} >
            <div >
              <a
                  href="https://www.youtube.com/@Linux-1991"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <div className={` mb-4 itemBarMain rounded-lg ${isCollapsed?'w-full h-8 p-0':'w-full h-16 p-0.5'}  ` } >
                  <FaYoutube  className={`w-full h-full  rounded-lg text-[#f00] p-1 ${isCollapsed?'':''}`} href='https://www.youtube.com/@Linux-1991'/>
                </div>
              </a>
                <div className={` mb-4 itemBarMainIdiom rounded-lg w-full h-8 p-0 flex justify-center items-center font-bold text-black cursor-pointer` } onClick={() => enviarEventoIdioma('es')} >ES</div>
                <div className={` mb-4 itemBarMainIdiom rounded-lg w-full h-8 p-0 flex justify-center items-center font-bold text-black cursor-pointer` } onClick={() => enviarEventoIdioma('en')} >EN</div>
            </div>
            </div>
          </div>
        </nav>
        
        {/* Botón de Colapso */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="BotonColapso absolute top-20 md:top-22 -right-2.5 bg-[#27464b] text-[#ff890b] p-0.5 md:p-1 rounded-lg border border-gray-700 cursor-pointer  "
        >
          {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      {/* Contenido principal, ajusta el margen para no quedar debajo del sidebar */}
      <main className={`p-4 ${contentMarginClass} transition-all duration-300`}>
        {/* Tus páginas o contenido principal van aquí */}
        hello
      </main>
    </>
  );
}
