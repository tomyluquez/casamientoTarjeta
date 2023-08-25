interface propsConfirmAssitence {
  nombreInvitado: string;
  restricciones: string;
}

export const confirmAssitence = ({nombreInvitado, restricciones} :propsConfirmAssitence) : Promise<any> => {
  return fetch('https://casamientoback.onrender.com/api/invitados', {
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
