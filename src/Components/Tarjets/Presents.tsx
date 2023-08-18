import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
import SectionText from '../General/SectionText';

const Presents = () => {
  return (
    <SectionText
      description={
        'El mejor regalo para nosotros es que nos acompañes, si queres ayudarnos con nuestro viaje !'
      }
      buttonText="Ver mas"
      iconText={faPlaneDeparture}
      titleModal="Cbu"
      textModal="Te compartimos nuetro cbu para que nos ayudes"
      form="presentsPrices"
    />
  );
};

export default Presents;
