'use client';

export function enviarEventoIdioma(idioma: string = 'es') {
  const evento = new CustomEvent('idioma-cambiado', {
    detail: { idioma }
  });

  window.dispatchEvent(evento);
}
