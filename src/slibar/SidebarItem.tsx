// components/SidebarItem.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { NavItem } from './sidebar_types';

import { usePathname } from "next/navigation"

interface SidebarItemProps {
  item: NavItem;
  isCollapsed: boolean;
}

export default function SidebarItem({ item, isCollapsed }: SidebarItemProps) {

  const currentPath = usePathname();


  const hasChildren = item.children && item.children.length > 0;
  let init:boolean = false;
  if (hasChildren && currentPath.startsWith(item.path) ) {
        init = true;    
    };

  const [isOpen, setIsOpen] = useState(init);
  
  // Función para manejar el clic: Navega si no tiene hijos, o abre/cierra si sí tiene.
  const handleClick = (e: React.MouseEvent) => {
    if (hasChildren) {
      e.preventDefault(); // Evita la navegación del Link si hay submenú
      setIsOpen(!isOpen);
    }
  };

    const isActive =
  item.path === "/"
    ? currentPath === "/"
    : currentPath === item.path || currentPath.startsWith(item.path + "/");

  // 🖱️ Vista de Ítem Principal 🖱️
  const mainItem = (
    <div 
      onClick={handleClick}
      className={`flex items-center p-1  mb-3 rounded-lg cursor-pointer hover:bg-gray-700 text-[#446] itemBarMainChildrenHOVER
        ${isActive ? 'itemBarMain ' : ''} ${isCollapsed? 'CollapseOFF':'CollapseON '}
      `}


    >
      <span className={isCollapsed ? '' : 'mr-3'}>{item.icon}</span>
      {!isCollapsed && (
        <>
          <span className="flex-1">{item.title}</span>
          {item.badge && (
            <span className="ml-auto px-2 py-0.5 text-xs bg-red-500 text-white rounded-full">
              {item.badge}
            </span>
          )}
          {hasChildren && (isOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />)}
          
        </>
      )}
    </div>
  );

  return (
    <li>
      {item.path && !hasChildren ? (
        <Link href={item.path}>{mainItem}</Link>
      ) : (
        mainItem
      )}

      {/* 🔻 Submenú 🔻 */}
      {hasChildren && (
        // El submenú lateral o el menú desplegable dependen de isCollapsed
        isCollapsed ? (
          // **ESTILO DESPLEGABLE TIPO POPUP (similar a tu imagen colapsada)**
          <div className="absolute left-full top-0 w-48 bg-gray-800 rounded-lg shadow-lg hidden group-hover:block ml-2">
            {/* ... Renderiza los hijos aquí (similar a Submenu.tsx pero con posición absoluta) */}
            {/* **NOTA:** Aquí usarías un estado de hover o un menú de componente tipo `Popover` para replicar el comportamiento de la imagen colapsada. */}
            <div>hello</div>
          </div>
        ) : (
          // **ESTILO DESPLEGABLE DENTRO DE LA BARRA LATERAL (similar a tu imagen expandida)**
          <div
            className={`overflow-hidden transition-all duration-300 ${
              isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <ul className="pl-4 border-l border-gray-700 pb-3 mb-3">
              {item.children!.map((child) => (
                <li key={child.id}>
                  <Link href={child.path || '#'}>
                    <div className={`flex items-center p-2 rounded-lg cursor-pointer text-sm text-[#000] hover:bg-gray-700 m-1.5 itemBarMainChildrenHOVER
                        ${currentPath == child.path ? 'itemBarMainChildren':''}
                        `}>
                      {child.title}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )
      )}
    </li>
  );
}
