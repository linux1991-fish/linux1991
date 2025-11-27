
'use client';
import React, { useEffect } from 'react';

export default function SendChangeEn() {
  const enviarEvento = () => {
    const evento = new CustomEvent('idioma-cambiado', {
      detail: { idioma: 'en' }
    });

    window.dispatchEvent(evento);
  };

  return (
      <button onClick={enviarEvento}>EN</button>
  );
}
