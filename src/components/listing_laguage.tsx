'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Idioma = 'es' | 'en';

const IdiomaContext = createContext<Idioma>('en');

export function IdiomaProvider({ children }: { children: ReactNode }) {
  const [idioma, setIdioma] = useState<Idioma>('en');

  useEffect(() => {
    const handler = (e: CustomEvent) => {
      const nuevoIdioma = e.detail.idioma === 'es' ? 'es' : 'en';
      setIdioma(nuevoIdioma);
      console.log(nuevoIdioma);
    };

    window.addEventListener('idioma-cambiado', handler as EventListener);

    return () => {
      window.removeEventListener('idioma-cambiado', handler as EventListener);
    };
  }, []);

  return (
    <IdiomaContext.Provider value={idioma}>
      {children}
    </IdiomaContext.Provider>
  );
}

export default function useIdioma() {
  return useContext(IdiomaContext);
}
