import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import SectionText from '../General/SectionText';

const Tarjets = () => {
  return (
    <div>
      <SectionText
        description={'Te compartimos los valores de la tarjeta'}
        buttonText="Ver mas"
        iconText={faEnvelopeOpenText}
        titleModal="Tarjetas de salon"
        textModal="Te compartimos los valores y cbu"
        form="tarjetPrices"
      />
    </div>
  );
};

export default Tarjets;
