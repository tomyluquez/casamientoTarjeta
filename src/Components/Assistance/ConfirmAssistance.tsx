import SectionText from '../General/SectionText';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import Tarjets from '../Tarjets/Tarjets';

const ConfirmAssistance = () => {
  return (
    <div className="bg-timer py-12">
      <SectionText
        description={
          'Nos encantaria poder contar con vos en esta fecha y que nos acompañes !'
        }
        buttonText="Confirmar Asistencia"
        iconText={faCalendarCheck}
        titleModal="Confirmar Asistencia"
        textModal="En caso de no poder asistir no completar este formulario"
        form="formAssitance"
      />
      <p className="text-center text-gray text-sm">
        la confirmacion es por persona
      </p>
      <Tarjets />
    </div>
  );
};

export default ConfirmAssistance;
