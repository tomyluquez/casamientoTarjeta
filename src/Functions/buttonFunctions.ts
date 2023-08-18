
export const handlerCalendar = () => {
  const startDate = encodeURIComponent("20240302T190000Z"); // Fecha y hora de inicio del evento en formato UTC
  const endDate = encodeURIComponent("20240302T210000Z"); // Fecha y hora de finalización del evento en formato UTC
  const eventTitle = encodeURIComponent("Casamiento Celi y Tomi"); // Título del evento

  const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${eventTitle}&dates=${startDate}/${endDate}`;

  window.open(googleCalendarUrl, "_blank");
};

export const handlerGoogleMaps = (address : string) => {
  const mapsUrl = `${address}`;
  window.open(mapsUrl, "_blank");
};
