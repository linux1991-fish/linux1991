// types/sidebar.ts
export interface NavItem {
  id: number;
  title: string;
  icon: React.ReactNode; // Para usar iconos como de 'lucide-react' o 'react-icons'
  path: string; // Ruta si es un enlace directo
  badge?: number; // Para el número de notificaciones (e.g., "Posts")
  children?: NavItem[]; // Para submenús
}
import { LuHouse } from "react-icons/lu";
import { GoTerminal } from "react-icons/go";


// Ejemplo de datos para la barra lateral
export const MENU_ITEMS: NavItem[] = [
  { id: 1, title: 'Home', icon:<LuHouse />, path: '/' },
  { id: 2, title: 'Terminals', icon: <GoTerminal />, path: '/terminals',
    children: [
      { id: 21, title: 'Dark001', path: '/terminals/dark001' ,icon: "<LuHouse />" },
      { id: 22, title: 'Light001', path: '/terminals/light001',icon: "<LuHouse />" },
      { id: 23, title: 'Transparense001', path: '/terminals/transparense001' ,icon: "<LuHouse />"},
    ],
 }, // Solo ejemplo
  { id: 3, title: 'News', icon: <LuHouse />, path: '/news', badge: 4 ,
    children: [
      { id: 31, title: 'Earnings', path: '/news/earnings' ,icon: "<LuHouse />" },
      { id: 32, title: 'Refunds', path:  '/news/refunds',icon: "<LuHouse />" },
      { id: 33, title: 'Declines', path: '/news/declines' ,icon: "<LuHouse />"},
      { id: 34, title: 'Payouts', path:  '/news/payouts' ,icon: "<LuHouse />"},
    ],

  }
];
