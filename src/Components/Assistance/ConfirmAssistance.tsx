import SectionText from '../General/SectionText';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import Tarjets from '../Tarjets/Tarjets';

const ConfirmAssistance = () => {
  return (
    <div className="bg-timer py-12 flex flex-col gap-12">
      <Tarjets />
      <div className="text-center">
        <SectionText
          description="¡ Gracias por acompañarnos en nuestro gran dia ! Te pedimos que confirmes tu asistencia..."
          buttonText="Confirmar Asistencia"
          iconText={faCalendarCheck}
          titleModal="Confirmar Asistencia"
          textModal="En caso de no poder asistir no completar este formulario"
          form="formAssitance"
        />
        <p className="text-center text-gray text-sm">
          podes confirmar hasta el 10/02/2024
        </p>
      </div>
    </div>
  );
};

export default ConfirmAssistance;
