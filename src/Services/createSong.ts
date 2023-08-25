interface propsCreateSong {
    nameSong: string;
  }
  
  export const createSong = ({nameSong} :propsCreateSong) : Promise<any> => {
    return fetch('https://casamientoback.onrender.com/api/canciones', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cancion: nameSong
      }),
    });
  };
  