// import Cbu from '../General/Cbu';
import TarjetsPricesService from '../../Data/TarjetsPrices.json';

const TarjetsPrices = () => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <strong>Valor de la tarjeta Adultos:</strong>
        {TarjetsPricesService.adults.map((tarjets) => (
          <p key={tarjets.id}>
            {tarjets.month}: ${tarjets.price}
          </p>
        ))}
      </div>
      <div>
        <strong>
          Valor de la tarjeta Menores (2 - 12 años): Consultar precios
        </strong>
      </div>
      <p>
        Enviar comprobante a <br />
        <a href="http://wa.me/543512118497" target="_blank">
          Tomi: 3512118497
        </a>
        <br />
        <a href="http://wa.me/543517683067" target="_blank">
          Celi: 3517683067
        </a>
      </p>
    </div>
  );
};

export default TarjetsPrices;
