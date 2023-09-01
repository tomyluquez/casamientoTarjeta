import { Parallax } from 'react-parallax';
import ButtonCustom from '../General/Buttons/ButtonCustom';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import FormDialog from '../General/Modals/Modal';

const Music = () => {
  const [open, setOpen] = useState(false);

  const handlerMusic = () => {
    setOpen(true);
  };
  return (
    <Parallax
      className="min-h-[600px] w-full flex justify-center items-center p-8"
      bgImage="./fondoMusic.png"
      strength={300}
      bgImageStyle={{
        width: 'auto',
        height: '100vh',
        position: 'absolute',
        maxWidth: 'none',
      }}
    >
      <FormDialog
        open={open}
        setOpen={setOpen}
        text="Segerir canciones"
        intro="Decinos el nombre de la cancion y artista que quieras sugerir"
        form="formMusic"
      />
      <div className="flex flex-col text-center py-8 px-4 bg-white border-2 border-black items-center justify-center gap-4">
        <div className="flex">
          <img
            src="./music.png"
            alt=""
            style={{ width: '50px' }}
            className="music"
          />
          <img
            src="./music.png"
            alt=""
            style={{ width: '50px' }}
            className="music2"
          />
        </div>
        <h4 className="text-4xl font-title ">Musica</h4>
        <p>
          ¿Qué canciones no pueden faltar en la fiesta?
          <br />
          <b>¡Queremos verte dándolo todo en la pista!</b>
        </p>
        <ButtonCustom
          text="Recomendanos tu canción"
          icon={faMusic}
          onClick={handlerMusic}
        />
      </div>
    </Parallax>
  );
};

export default Music;
