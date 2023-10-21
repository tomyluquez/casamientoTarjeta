import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import SectionText from '../General/SectionText';
import Cbu from '../General/Cbu';

const Tarjets = () => {
  return (
    <div>
      <SectionText
        description={
          'El regalo perfecto será tu presencia, te compartimos los valores de nuestra tarjeta.'
        }
        buttonText="Ver valores"
        iconText={faEnvelopeOpenText}
        titleModal="Tarjetas de salon"
        textModal="Los pagos de la tarjeta se pueden realizar hasta el dia 15 de cada mes."
        form="tarjetPrices"
      />
      <div className="text-center text-gray text-sm">
        <Cbu
          titular="Tomas Luquez"
          alias="t.luquez"
          cbu="0000076500000007339813"
        />
      </div>
    </div>
  );
};

export default Tarjets;
