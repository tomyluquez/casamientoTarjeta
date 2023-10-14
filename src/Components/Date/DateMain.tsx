import TimelineCustom from '../General/TimelineCustom';
import Articles from './Articles';
import itinerario from '../../Data/itinerario.json';

const DateMain = () => {
  return (
    <section className="py-12">
      <h2 className="text-3xl text-center mb-8 font-title">Nuestra Boda</h2>
      <Articles />
      <TimelineCustom itinerario={itinerario.data} />
    </section>
  );
};

export default DateMain;
