interface propsConfirmAssitence {
  nombreInvitado: string;
  restricciones: string;
}

export const confirmAssitence = ({nombreInvitado, restricciones} :propsConfirmAssitence) : Promise<any> => {
  return fetch('https://celi-tomi-casamiento.vercel.app/api/invitados', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      nombre: nombreInvitado,
      restriccion: restricciones,
    }),
  });
};
