import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import SectionText from '../General/SectionText';
import Cbu from '../General/Cbu';

const Tarjets = () => {
  return (
    <div>
      <SectionText
        description={
          'Tu presencia será nuestro mayor regalo, te compartimos los valores de nuestra tarjeta.'
        }
        buttonText="Ver valores"
        iconText={faEnvelopeOpenText}
        titleModal="Tarjetas de salon"
        textModal="Te compartimos los valores y cbu: 0000003100067349638299"
        form="tarjetPrices"
      />
      <p className="text-center text-gray text-sm">
        <Cbu
          titular="Tomas"
          alias="tren.pelo.estimo.mp"
          cbu="0000003100067349638299"
        />
      </p>
    </div>
  );
};

export default Tarjets;
