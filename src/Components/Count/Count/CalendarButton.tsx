import { handlerCalendar } from '../../../Functions/buttonFunctions';
import ButtonCustom from '../../General/Buttons/ButtonCustom';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';

const CalendarButton = () => {
  return (
    <ButtonCustom
      text="Agendar Fecha"
      icon={faCalendar}
      onClick={handlerCalendar}
    />
  );
};

export default CalendarButton;
