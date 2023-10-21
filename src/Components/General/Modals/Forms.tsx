import { useForm, SubmitHandler } from 'react-hook-form';
import InputText from '../Inputs/InputText';
import { DialogActions } from '@mui/material';
import TarjetsPrices from '../../Tarjets/TarjetsPrices';
import PresentsPrices from '../../Tarjets/PresentsPrices';
import ButtonCustom from '../Buttons/ButtonCustom';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from 'react';
import Loading from '../Loading';
import { alertContext } from '../../../App';
import { setCancion, setInvitado } from '../../../Firebase/setInvitados';

type Inputs = {
  example: string;
  exampleRequired: string;
  nameLastname: string;
  alimentation: string;
  music: string;
};

interface ApiResponse {
  status: number;
}

interface FormsProps {
  close: () => void;
  type: string; // Cambia la definición de close para que coincida con la firma de evento esperada
}

export default function Forms({ close, type }: FormsProps) {
  const [loading, setLoading] = useState(false);
  const { setOpen, setText } = useContext(alertContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setLoading(true);
    if (data.nameLastname) {
      // confirmAssitence({
      //   nombreInvitado: data.nameLastname,
      //   restricciones: data.alimentation,
      // })
      try {
        setInvitado({
          nombre: data.nameLastname,
          restriccion: data.alimentation,
        }).then((res: ApiResponse) => {
          console.log(res);
          close();
          setLoading(false);
          setOpen(true);
          setText('Que bueno que puedas asisitir ! ahi nos vemos');
        });
      } catch (error) {
        close();
        setLoading(false);
        setOpen(true);
        setText('Algo salio mal !, por favor intenta nuevamente');
      }
    }

    if (data.music) {
      // createSong({
      //   nameSong: data.music,
      // })
      try {
        setCancion({ nombre: data.music }).then((res: ApiResponse) => {
          console.log(res);
          close();
          setLoading(false);
          setOpen(true);
          setText('Gracias por recomendarnos la cancion !');
        });
      } catch (error) {
        close();
        setLoading(false);
        setOpen(true);
        setText('Algo salio mal !, por favor intenta nuevamente');
      }
    }
  };

  return (
    <>
      {loading && <Loading />}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center align-center gap-8 mt-8"
      >
        {type === 'formAssitance' && (
          <>
            <InputText
              label="Nombre y Apellido"
              register={register}
              errors={errors}
              name="nameLastname"
              placeholder="Nombre y Apellido"
              error="El campo es obligatorio"
            />
            <InputText
              label="Tenes alguna restricción alimenticia?"
              register={register}
              errors={errors}
              name="alimentation"
              placeholder="Ej: Vegetariano/a"
              error="En caso de no tener ninguna restriccion poner NO"
            />
          </>
        )}
        {type === 'formMusic' && (
          <InputText
            label="Nombre de la cancion y Artista"
            register={register}
            errors={errors}
            name="music"
            placeholder="Ej: Universo paralelo - La konga"
            error="El campo es obligatorio"
          />
        )}
        {type === 'tarjetPrices' && <TarjetsPrices />}
        {type === 'presentsPrices' && <PresentsPrices />}
        <DialogActions>
          <ButtonCustom icon={faXmark} text="Cerrar" onClick={close} />
          {(type === 'formAssitance' || type === 'formMusic') && (
            <ButtonCustom type="submit" icon={faCheck} text="Confirmar" />
          )}
        </DialogActions>
      </form>
    </>
  );
}
