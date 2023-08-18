import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import weddingData from '../../Data/OurWedding.json';
import ButtonCustom from '../General/Buttons/ButtonCustom';
import { handlerGoogleMaps } from '../../Functions/buttonFunctions';
import { type TypeofCeremoni } from '../../Data/types';

const Articles = () => {
  const typesWedding: TypeofCeremoni[] = weddingData.Wedding.map(
    (item) => item
  );
  return (
    <article className="flex flex-wrap gap-24 items-center tablet:gap-96 justify-center">
      {typesWedding.map((item, index) => (
        <div
          key={index}
          className="flex flex-col gap-2 items-center justify-center"
        >
          <img
            src={item.image}
            alt="anillos"
            style={{ width: '50px', height: '50%' }}
          />
          <span className="text-3xl text-timer">{item.type}</span>
          <div className="flex flex-col items-center justify-center">
            <span>
              {new Date(item.date).toLocaleDateString('es-ES', {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </span>
            <span>{item.hours}hs</span>
            <span>{item.place}</span>
            <span>{item.city}</span>
          </div>
          <ButtonCustom
            text="Como llegar"
            icon={faLocationDot}
            onClick={() => handlerGoogleMaps(item.address)}
          />
        </div>
      ))}
    </article>
  );
};

export default Articles;
