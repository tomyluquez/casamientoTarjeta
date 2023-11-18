// import Cbu from '../General/Cbu';
import TarjetsPricesService from '../../Data/TarjetsPrices.json';

const TarjetsPrices = () => {
  const date = new Date();

  return (
    <div className="flex flex-col gap-4">
      <div>
        <strong>Valor de la tarjeta Adultos:</strong>
        {TarjetsPricesService.adults.map((tarjet) => {
          const tarjetDate = new Date(tarjet.date);
          const isPastDate = tarjetDate < date;

          return (
            <p key={tarjet.id}>
              {!isPastDate && `${tarjet.month} : $${tarjet.price}`}
            </p>
          );
        })}
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
